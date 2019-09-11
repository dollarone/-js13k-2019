"use strict"

class Enemy {
	constructor(context,name,introtext,deathtext,skills,health,xp,loot) {
		this.damage=this.damage.bind(this)
		this.context=context
		this.name=name
		this.introtext=introtext
		this.deathtext=deathtext
		this.skills=skills
		this.health=health
		this.xp=xp
		this.loot=loot
	}
	damage(amount) {
		this.health-=amount
	}
}
export default Enemy