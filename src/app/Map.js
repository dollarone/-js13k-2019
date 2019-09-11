"use strict"

import Tile from './Tile.js'

class Map {
	constructor(context,title,data,level,px) {
		this.render=this.render.bind(this)
		this.getPos=this.getPos.bind(this)
		this.swapStartAndGoal=this.swapStartAndGoal.bind(this)
		this.context=context
		this.title=title
		this.data=data
		this.level=level
		this.tiles=[]
		this.px=px
		this.blinkValue=100
		this.blinkMod=5
		for(let x=0; x<10; x++) {
			for(let y=0; y<8; y++) {
				this.tiles.push(new Tile(this.context,22+32*x,40+y*32,this.level,this.px))
			}
		}

	}
	getPos(mapPos) {
		return [ this.data[mapPos]["x"], this.data[mapPos]["y"] ]
	}
	getIndex(mapPos) {
		return [ this.data[mapPos]["x"], this.data[mapPos]["y"] ]
	}
	swapStartAndGoal() {

	}

	render(x,y,col,level,blinkers) {
		this.blinkValue+=this.blinkMod
		if(this.blinkValue>230) {
			this.blinkMod=-this.blinkMod
		}
		if(this.blinkValue<100) {
			this.blinkMod=-this.blinkMod
		}
		this.context.lineWidth = 8
		for(let i=0; i<this.tiles.length; i++) {
			this.tiles[i].render()
		}
		this.context.fillStyle = col
		this.context.font = "12px Arial"
		this.context.fillText(this.title, x, y)

		for(let n=0;n<this.data.length;n++) {
			
			for(let i=0;i<this.data[n]["n"].length;i++) {
				let pos=this.data[n]["n"][i]
				//console.log(n + " going to " + pos)
				this.context.fillStyle = this.data[n]["c"]
				this.context.strokeStyle = this.data[n]["c"]
				this.context.fillStyle = "#000000"
				if(level<2) {
					this.context.strokeStyle = "#623B00"	
				}
				else {
					this.context.strokeStyle = "#524F4D" //524F4D" //"#7A6F6C"//"#007300"//"#663931"
				}
				this.context.beginPath();
				this.context.moveTo(-54+x+72*this.data[n]["x"], -27+y+56*this.data[n]["y"])
				if(level!=3 && Math.abs(this.data[pos]["x"]-this.data[n]["x"])>1) {
					let mod=42
					if(this.data[pos]["y"]==5 || this.data[n]["y"]==5) {
						mod=-42
					}
					this.context.bezierCurveTo(-54+x+72*this.data[n]["x"], -27+y+56*this.data[n]["y"]+mod,
					 	-54+x+72*this.data[pos]["x"], -27+y+56*this.data[pos]["y"]+mod,
						-54+x+72*this.data[pos]["x"], -27+y+56*this.data[pos]["y"]);
				}
				else {
					this.context.lineTo(-54+x+72*
						this.data[pos]["x"], 
						-27+y+56*
						this.data[pos]["y"])
				}
				this.context.stroke();
			}
		}
		if(level==0 || level==7) {
			for(let i=0; i<this.tiles.length; i++) {
				if((i*i)%11>1) {
					this.tiles[i].render(20,80,6) 
				}
			}
		}
		if(level==1 || level==6) {
			for(let i=0; i<this.tiles.length; i++) {
				if(i%73<72 && i%40<39 && i%48<47 && i%59<58 && (i>25 || i%22<21)) {
					this.tiles[i].render(20,80,4) 
				}
			}
		}
		if(level==2 || level==5) {
			for(let i=0; i<this.tiles.length; i++) {
				if((i*i)%11>1) {
					this.tiles[i].render(20,80,5) 
				}
			}

		}
		if(level==3) {
			for(let i=0; i<this.tiles.length; i++) {
				if(i%2==1 ){
					this.tiles[i].render(20,80,7) 
				}
			}

		}
		for(let n=0;n<this.data.length;n++) {
			this.context.beginPath();
			this.context.fillStyle = this.data[n]["c"]
			this.context.strokeStyle = this.data[n]["c"]
			if(blinkers.includes(n)) {
				this.context.fillStyle = "rgba(" + this.blinkValue + ", 0, 0, 1)"
			}
			//this.context.rect(x+20*this.data[n]["x"],y+40*this.data[n]["y"],10,10)
			this.context.arc(-54+x+72*this.data[n]["x"],-27+y+56*this.data[n]["y"], 10, 0, 2 * Math.PI)
			this.context.fill()
		}
	}
}
export default Map