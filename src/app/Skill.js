"use strict"

class Skill {
	constructor(context,name,verb,icon,effect,special,countdown,colour) {
		this.render=this.render.bind(this)
		this.update=this.update.bind(this)
		this.activate=this.activate.bind(this)
		this.context=context
		this.name=name
		this.verb=verb
		this.icon=icon
		this.effect=effect
		this.special=special
		this.countdown=countdown
		this.colour=colour
		this.activatedArc=360
	}

	activate() {
		//this.colour="#111"
		this.activatedArc=360
		this.cooldown=true
	}

	update() {
		if(this.cooldown) {
	    	if(this.activatedArc<1) {
	    		//this.hero.cooldown=false
	    		this.cooldown=false
	    	}
		    this.activatedArc-=(6/this.countdown)
	    }
	}

	render() {
		this.context.beginPath()
		this.context.fillStyle = "#000000"
		this.context.strokeStyle = "#00aa00"
		this.context.arc(this.icon.x+16,this.icon.y+16, 24, 0, 2 * Math.PI)
		this.context.fill()
		this.context.strokeStyle = "#666666"
		this.context.beginPath()
		this.context.arc(this.icon.x+16,this.icon.y+16, 26, 0, 2 * Math.PI)
		this.context.lineWidth = 2
		this.context.stroke()
		this.icon.render()
		this.context.fillStyle = this.colour
		let textLength = this.context.measureText(this.name)
	    this.context.fillText(this.name, this.icon.x-textLength.width/2+15, this.icon.y+55)
	    if(this.cooldown) {
	    	if(this.activatedArc<1) {
	    		//this.hero.cooldown=false
	    		this.cooldown=false
	    	}
    	
	    	this.context.beginPath()
			this.context.fillStyle = "rgba(255, 255, 255, 0.3)"
			this.context.strokeStyle = "rgba(255, 255, 255, 0.3)"
			//this.context.clearRect(this.icon.x, this.icon.y, 48,48)
			this.context.arc(this.icon.x+16,this.icon.y+16, 24, 0, 2*Math.PI)
			this.context.fill()
			
		
			this.context.beginPath()
			this.context.fillStyle = "rgba(255, 255, 255, 0.6)"
			this.context.strokeStyle = "rgba(255, 255, 255, 0.6)"
			this.context.arc(this.icon.x+16,this.icon.y+16, 24, 0, this.activatedArc*(Math.PI/180))
			this.context.fill()
		
		    this.activatedArc-=(6/this.countdown)
	    }

	}
}
export default Skill