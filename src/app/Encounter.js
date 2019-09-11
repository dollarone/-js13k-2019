"use strict"

class Encounter {
	constructor(context,title,text,options,resultText,special=0,cost=[],enemy=null) {
		this.render=this.render.bind(this)
		this.wrapText=this.wrapText.bind(this)
		this.context=context
		this.title=title
		this.text=text
		this.options=options
		this.resultText=resultText
		this.state=10
		this.result=null
		this.special=special
		this.cost=cost
		this.enemy=enemy
	}
	wrapText(context, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }
        context.fillText(line, x, y);
     }

	render(x,y,col,coin,gold,health) {
		this.context.beginPath()
		this.context.fillStyle = "#000000"
		this.context.rect(x-5, y+10, x+298,y+226)
		this.context.fill();
		this.context.font = "12px Arial"

		this.context.fillStyle = col
		this.context.strokeStyle = col

		this.context.fillText(this.title, x-5, y)
		if(this.result!=null) {
			if(this.special==2 && this.state>=100) {
				this.wrapText(this.context, "You've already visited this place. Looks like there's no longer anyone here.", x, y+40,320, 15)
			}
			else if(this.special==4 && this.state>=100) {
				this.wrapText(this.context, "You've already visited this place. Looks like there's no longer anyone here.", x, y+40,320, 15)
			}
			else if(this.state>=100 && this.special!=1) {
				this.context.fillText("You've already visited this place.", x, y+40)
			}
			else {
			    this.wrapText(this.context,this.resultText[this.result], x, y+40, 320,15)
			}
			if(false) {
				this.context.beginPath()
				this.context.fillStyle = "#422"
				this.context.rect(x, y+88 + Math.floor(8/60)*15-20, x+40,30 + Math.floor(8/60) * 15-16)
				this.context.fill()
			}
			this.context.fillStyle = col
			this.context.fillStyle = "#66c"
		    this.context.fillText("Continue", x, y+80 + Math.floor(8/60) * 15)
		}
		else {
			//this.context.fillText(this.text, x, y+40)
			 this.wrapText(this.context, this.text, x, y+40, 320, 15);

			for(let i=0;i<this.options.length;i++) {
				let canAffordOption=true
				if(this.special==4) {
					canAffordOption=this.cost[i].affordable(coin,gold,health)
				}
				if(canAffordOption) {
					this.context.fillStyle = col
					this.context.fillStyle = "#66c"
				}
				else {
					this.context.fillStyle = col
					this.context.fillStyle = "#338"
				}

				if(false) {
					this.context.beginPath()
					this.context.fillStyle = "#444"
					let textLength = this.context.measureText("1. " + this.options[i])
					this.context.fillRect(x, y+80 + i*40 + Math.floor(this.text.length/60)*15-20+23, textLength.width, 2)
					//this.context.rect(x, y+80 + i*40 + Math.floor(this.text.length/60)*15-20, 3+x+this.options[i].length*5,30)
					this.context.fill()
					
				}
				let num=i+1 + ". "
				if(this.options.length==1) {
					num=""
				}
			    this.context.fillText(num + this.options[i], x, y+80 + i*40 + Math.floor(this.text.length/60) * 15)
			}
		}
	}
}
export default Encounter
