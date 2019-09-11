"use strict"

class Hero {
	constructor(context,name,title,x,y,face,skills,health,maxhealth,weapon,items,foodcost,coincost,colour,foodicon,coinicon,healthicon,deadhealthicon) {
		this.render=this.render.bind(this)
		this.damage=this.damage.bind(this)
		this.context=context
		this.name=name
		this.title=title
		this.face=face
		this.skills=skills
		this.health=health
		this.maxhealth=maxhealth
		this.weapon=weapon
		this.items=items
		this.foodcost=foodcost
		this.coincost=coincost
		this.x=x
		this.y=y
		this.foodicon=foodicon
		this.coinicon=coinicon
		this.healthicon=healthicon
		this.deadhealthicon=deadhealthicon
		this.colour=colour
		this.cooldown=false
	}
	damage(amount) {
		this.health-=amount
	}
	render() {
		this.face.x=this.x
		this.face.y=this.y+25
		this.foodicon.x=this.x+43
		this.foodicon.y=this.y
		this.coinicon.x=this.x+74
		this.coinicon.y=this.y+30
		this.healthicon.x=this.x+117
		this.healthicon.y=this.y-10
		this.deadhealthicon.x=this.x+117
		this.deadhealthicon.y=this.y-10
		for(let i=0; i<this.skills.length; i++) {
			this.skills[i].icon.x=this.x+122+i*55
			this.skills[i].icon.y=this.y+30
		}

		this.context.fillStyle = this.colour
	    this.context.fillText(this.name, this.x, this.y+8)
	    this.context.fillText(this.title, this.x, this.y+85)
		this.face.render()
		for(let i=0;i<this.foodcost; i++) {
			this.foodicon.render()
			this.foodicon.x+=7
		}
		this.coinicon.x=this.foodicon.x+7
		this.coinicon.x=this.x+43
		for(let i=0;i<this.coincost; i++) {
			this.coinicon.render()
			this.coinicon.x+=7
		}
		this.foodicon.x=this.x+43
		this.coinicon.x=this.x+74
		for(let i=0; i<this.maxhealth;i++) {
			this.deadhealthicon.render()
			this.deadhealthicon.x+=20
		}
		this.deadhealthicon.x=this.x+116
		for(let i=0; i<this.health;i++) {
			this.healthicon.render()
			this.healthicon.x+=20
		}
		this.healthicon.x=this.x+116

		for(let i=0; i<this.skills.length; i++) {
			this.skills[i].render()
		}
	}
}
export default Hero