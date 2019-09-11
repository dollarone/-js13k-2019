"use strict"

class Transaction {
	constructor(coin_cost,food_cost,health_cost,coin_gained,food_gained,health_gained,item_gained=null,hero_gained=null) {
		this.affordable=this.affordable.bind(this)
		this.transact=this.transact.bind(this)
		this.coin_cost=coin_cost
		this.food_cost=food_cost
		this.coin_gained=coin_gained
		this.food_gained=food_gained
		this.item_gained=item_gained
		this.hero_gained=hero_gained
		this.health_gained=health_gained
		this.health_cost=health_cost
		this.done=false
	}
	affordable(coin,food,health) {
		return coin>=this.coin_cost && food>=this.food_cost && health>this.health_cost
	}
	transact() {
		if(!this.done) {
			this.done=true
			return [this.coin_gained,this.food_gained,this.health_gained, this.item_gained, this.hero_gained]
		}
		return null
	}
}
export default Transaction