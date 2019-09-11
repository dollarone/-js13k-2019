"use strict"

import Encounter from './Encounter.js'
import Map from './Map.js'
import Tile from './Tile.js'
import Hero from './Hero.js'
import Skill from './Skill.js'
import Transaction from './Transaction.js'
import Enemy from './Enemy.js'

class Main {
	constructor(test) {
		this.update = this.update.bind(this)
		this.render = this.render.bind(this)
		this.startGame = this.startGame.bind(this)
		//this.rectFill = this.rectFill.bind(this)
		this.click = this.click.bind(this)
		this.randomEncounter = this.randomEncounter.bind(this)
		this.specialEncounters = this.specialEncounters.bind(this)
		this.randomInt = this.randomInt.bind(this)
		this.generateMap = this.generateMap.bind(this)
		this.getNodeIfExist = this.getNodeIfExist.bind(this)
		this.mulberry32 = this.mulberry32.bind(this)
		this.createTile=this.createTile.bind(this)
		this.createTileDesigns=this.createTileDesigns.bind(this)
		this.generateName=this.generateName.bind(this)
		this.addToBattlelog=this.addToBattlelog.bind(this)

		this.randomGenerator=this.mulberry32(2)
		this.designs=["plains","forest","mountains","dungeon","forest-top","mountains-top","plains-top","dungeon-top","sword","warrior","chicken","coin","heart","deadheart","dagger"]
		this.tileDesigns=["vv~vvvvvvvvvvvwvvwvvvvvvvvvwvvvvvvvvvv~vvvvvvvvv~vvvwvvvvvvvvvvvvvvvvvwvvvvwvvv~wvvvvvvvvvwvvvvvvvvvv~vvvvvvvvvvvwvv~vvwvvvvvvvv",
			"[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[I[[[[[[I[I[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[",
			"dg|",
			"",
			"@H@@@@@@@IA@@H@@@IA@@HA@HII@@IA@HII@@IA@IIIA@IA@IIIA@II@IIIAHII@IIIAHII@IIIAHII@III@IIIAHII@IIIA@R@@IIIA@R@@HII@@@@@@PB@@@@@@PB@",
			"@@@D@@@@@@`g@@@@@@|gD@@@@@|gd@@@@`gd@@@@`|gdD@@@|gdd@@`ggdd@@`ggdd@@|g|ddD@`||gdD@@`||gdd@@@`|gdd@@@@`ddd@@@@@`dD@@@@@@@@@",
			"@@@@@@@x@@@@@@Gp@@@@@@Fp@@@@@@Fp@@@@@@F@@@@@@@@@G@@@@@@@F@@@@@@@FGG@@@@@FFFG@@@@FFFFG@@@@FFFF@@G@FFFFx@F@@FFFp@F@@@@Fp@F@@@@@p@@",
			"`dd@`dd@dgddgdgggggddgdddgddgd`g@`g@`dd@`dd@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
			"@@@@@@`d@@@@@@|g@@@@@`g@@@@@|D@@@@`g@@@@@|D@PB@`g@@PR@|D@@@Rbg@@@@PRD@@@@@Rb@@@@@PRR@@@@@RBRB@@@PR@PR@@@RB@@R@@@R@@@@@@@", //sword
			"@`@@@D@@@`dddD@@@@Tdb@@@@@tdf@@@@@tvf@@@@@`dD@@@@d||dd@x`ggggg@x`g||dg@`ggggg@G`d||ddxG@vbbBV@@vRRBvB@@@RPBB@@@@RPB@@@@PRPR@@@",
			"@@@@`R@@@@@@TRB@@@@`RRB@@@@`RRB@@@@TRR@@@@@TRR@@@@`RRB@@@@`RR@@@@@`RB@@@@@|G@@@@@@|@@@@@@d@@@@@`G@@@@@@@G@@@@@@@@@@@@@@@@@@@@@",
			"@@@dd@@@@@dd@@@`D@@||g@@|g|g@`|dD`|gD`|gD`|dD@|gdg@@|g@@`D@@@dd@@@@@dd@@@@@@@@@@@@@@@@@@@",
			"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@hE@m@@@@mmhmE@@@mmmmE@@@hmmm@@@@@mmE@@@@@hm@@@@@@@E@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
			"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`D@d@@@@dd`dD@@@ddddD@@@`ddd@@@@@ddD@@@@@`d@@@@@@@D@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
			"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@x@@@@x@@@@@@@@@@xG@@@@@b@@@@@PRD@@@@@RR@@@@@PRB@@@@@@R@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"] 

		// TODO: instead have references to this from the monster roster
		this.bosses=[["Orc Chieftain","Land Shark"],["black bear","Goblin Warlord"],["Stone Golem","Giant"],["Sir Despair"]]
		this.levelNames=["wild plains", "forest of Rackwood", "Longcrag mountains", "Dungeon of Despair"]
		this.exits=["Eftiell Tower","the town of Leafhill","Rackwood Inn","Longcraig Tower","Crypt of Despair"]
		this.caves=["cave","cavern","hideout","mine"]
		this.canvas = document.getElementById('gameCanvas')
		this.context = this.canvas.getContext('2d')
		this.grid=[]
		this.gridTest=[]
		this.gridSpines=[]
		this.gridWidth=10
		this.gridHeight=10
		this.state=10
		this.level=0
		this.mapPos=0
		this.colours=[]
		this.colours[0] = "#000000"
		this.colours[1] = "#666666"
		this.colours[2] = "#00aa00"
		this.colours[3] = "#0000aa"
		this.colours[4] = "#aaaa00"
		this.colours[5] = "#00aaaa"
		this.colours[6] = "#aaaaaa"
		this.px=this.createTileDesigns(this.tileDesigns)


		this.map=[]
		this.map.push(this.generateMap(0,"Plains"))
		this.map.push(this.generateMap(1,"Forest"))
		this.map.push(this.generateMap(2,"Mountain"))
		this.map.push(this.generateMap(3,"Castle"))

		for(let x=0; x<this.gridWidth; x++) {
			this.grid[x]=[]
			for(let y=0; y<this.gridHeight; y++) {
				this.grid[x][y]=0
				if ((y+x)%2==0) {
					this.grid[x][y]=6
				}
			}
		}
		this.context.font = "12px Arial"
		//this.context.font = "16px Arial"
		this.context.strokeStyle = this.colours[6]
		this.context.strokeText("Next", 80, 50)
		//this.context.translate(0.5, 0.5);
		this.context.imageSmoothingEnabled=false

		// 59 max per line
		this.currentEncounter=this.map[this.level].data[this.mapPos]["e"]
		
		this.temporaryClickableFields=[]
		for(let i=0;i<this.currentEncounter.options.length;i++) {
			this.temporaryClickableFields.push([20, 110 + i*40 + Math.floor(this.currentEncounter.text.length/60)*15-20, 23+this.currentEncounter.options[i].length*5,30])
		}			
		this.player = new Tile(this.context,24,500,9,this.px)
		this.player.x=-16+20+-54+72*this.map[this.level].data[this.mapPos]["x"]
		this.player.y=-24+30+-21+56*this.map[this.level].data[this.mapPos]["y"]

		this.sword= new Tile(this.context,80,500,8,this.px)
		this.blinkers=[]

		this.heroNames=["Valfar","Hrasvalg","Polby","Batrik","Bhorgal","Wilfa","Zander","Gundar","Soth","Arne"]
		this.heroes=[]

		this.reusableChicken=this.createTile("chicken",60,380)
		this.reusableCoin=this.createTile("coin",20,380)
		this.reusableHeart=this.createTile("heart",40,380)
		this.reusableDeadheart=this.createTile("deadheart",1,1)
		this.heroes.push(new Hero(this.context,this.generateName(),"Warrior",20,400,this.createTile("warrior",20,390),
			[],
			10,10,"longsword",[],1,0,"#c99",
			this.reusableChicken,this.reusableCoin,this.reusableHeart,this.reusableDeadheart)) // warcry
		if(false) {
		this.heroes.push(new Hero(this.context,this.generateName(),"War priest",20,400,this.createTile("warrior",20,390),
			[],
			10,10,"longsword",[],1,1,"#99c",
			this.reusableChicken,this.reusableCoin,this.reusableHeart,this.reusableDeadheart)) // warcry
		this.heroes.push(new Hero(this.context,this.generateName(),"Wizard",20,400,this.createTile("warrior",20,390),
			[],
			10,10,"longsword",[],1,1,"#9c9",
			this.reusableChicken,this.reusableCoin,this.reusableHeart,this.reusableDeadheart)) // warcry
		this.heroes.push(new Hero(this.context,this.generateName(),"Rogue",20,400,this.createTile("warrior",20,390),
			[],
			10,10,"longsword",[],2,1,"#ccc",
			this.reusableChicken,this.reusableCoin,this.reusableHeart,this.reusableDeadheart)) // warcry
	}

//		let hero=this.heroes[0]
		this.heroes[0].skills.push(new Skill(this.context,"Attack","slash",this.createTile("sword",1,1),2,0,5,"#c99"))
		//this.heroes[3].skills.push(new Skill(this.context,"Attack","stab",this.createTile("dagger",1,1),1,0,3,"#c99"))

		this.food=this.createTile("chicken",120,310)
		this.coin=this.createTile("coin",200,310)
		this.foodTotal=20
		this.coinTotal=20
		this.gameover=false
		this.win=false
		this.debug=true
  	}
  	generateName() {
  		let num=this.randomInt(0,this.heroNames.length)
		let name=this.heroNames[num]
		this.heroNames.splice(num,1)
		return name
  	}
  	getNodeIfExist(x,y,data) {
		for(let n=0;n<data.length;n++) {
			if(x==data[n]["x"] && y==data[n]["y"]) {
				return n
			}
		}
		return -1
  	}
  	generateMap(level,title) {
  		let data=[]
		let nextfreenodeid=0
		let col=0
		let placeBoss=true

		for(let z=0;z<this.randomInt(2,3+level); z++) {
			let prevnodeid=0
			col++
	  		let x=1
	  		let y=3
	  		let lastWasX=this.randomInt(0,2)==0
			let node=[]
			node["x"]=x
			node["y"]=y
			node["e"]=this.randomEncounter(1,"foo")	
			if(z==0) {
				node["e"]= this.specialEncounters(level,"start")
			}
			node["n"]=[]
			node["c"]=this.colours[col]
			node["s"]="none"
			node["id"]=nextfreenodeid
			let foundid=this.getNodeIfExist(x,y,data)
			if(foundid==-1) {
				console.log("adding " + data.length + ": " + x + "," + y)
				data.push(node)
				nextfreenodeid++
			}
			else {
				console.log("re-using " + foundid + ": " + x + "," + y)
				node=data[foundid]
				prevnodeid=foundid
			}

			while(x<6) {
				if(level==3) {
					let lastY=y
					if(!lastWasX) {
						x++
						lastWasX=true
					}
					else {
						y=Math.min(Math.max(y+this.randomInt(-1,2),1),5)
						lastWasX=false
					}
					if(y==lastY && !lastWasX) {
						x++
						lastWasX=true
					}
				}
				else {
					x++
					if(this.randomInt(1,10)==1) {
						x++
					}
					y=Math.min(Math.max(y+this.randomInt(-2,3),1),5)
				}

				if(x<6) {
					node=[]
					node["x"]=x
					node["y"]=y
					node["e"]=this.randomEncounter(1,"foo")
					node["c"]="#111"
					node["s"]="none"
					node["n"]=[prevnodeid]
					node["id"]=nextfreenodeid

					foundid=this.getNodeIfExist(x,y,data)
					if(foundid==-1) {
						console.log("adding " + data.length + ": " + x + "," + y)
						data.push(node)
						if(!data[prevnodeid]["n"].includes(nextfreenodeid)) {
							data[prevnodeid]["n"].push(nextfreenodeid)
						}
						prevnodeid=nextfreenodeid
						nextfreenodeid++
					}
					else {
						console.log("re-using " + foundid + ": " + x + "," + y)
						if(!data[foundid]["n"].includes(prevnodeid)) {
							data[foundid]["n"].push(prevnodeid)
						}
						if(!data[prevnodeid]["n"].includes(foundid)) {
							data[prevnodeid]["n"].push(foundid)
						}
						prevnodeid=foundid
					}			
				}
			}
			if(placeBoss && level==3) {
				//data[data.length-1]["c"]="#7f7" // mark this otherwise
				data[data.length-1]["s"]="boss"
				data[data.length-1]["e"]=this.specialEncounters(level,"boss")
				placeBoss=false
			}

		}
		if(level!=3) {
			//data[data.length-1]["c"]="#333" // mark this otherwise
			data[data.length-1]["s"]="exit"
			data[data.length-1]["e"]=this.specialEncounters(level,"exit")
		}
 		for(let i=0; i<data.length; i++) {
 			let buffer = i + " (" + data[i]["x"] + "," + data[i]["y"] + ") goes to "
 			if(data[i].hasOwnProperty("n")) {
	 			for(let a=0; a<data[i]["n"].length; a++) {
	 				buffer+=data[i]["n"][a] + ", "
	 			} 
	 		}
	 		console.log(buffer)
 		}
 /*
				  ------o------o---
				 /			  /		\
		o-------o------------o		 o-----o
				 \ 			/		/
				  ---o-----o-------o
*/		
  		return new Map(this.context, this.levelNames[level].toUpperCase(), data, level, this.px)
  	}
  	randomEncounter(level,type) {
  		let dice=this.randomInt(1,6)
  		if(dice==1) {
			return this.combatEncounters(level,type)
  		}
  		else if(dice==2 && false) {
  			let h=new Hero(this.context,this.generateName(),"Wanderer",20,400,this.createTile("warrior",20,390),
				[],
				10,10,"longsword",[],2,1,"#ccc",
				this.reusableChicken,this.reusableCoin,this.reusableHeart,this.reusableDeadheart)
			return new Encounter(this.context,"A HELPING HAND", 
			"You find a little house and a man waiting in the doorway. He says: 'Need a helping hand? I am available for hire...'", 
			["'It's a deal!' (cost: 1 coin and 1 food per turn)","'I do not need your help."],
			["'Alright! Where are we going?'", "You continue on your way."],
			6,[new Transaction(0,0,0,0,0,0,null,h),new Transaction(0,0,0,0,0,0)])
			
  		}
  		else if(dice==3) {
			return new Encounter(this.context,"A CRAZY BARGAIN", 
			"You come upon a thin man sitting by himself. He is grinning from ear to ear and looking at you. His right fingers are playing with a curved dagger in his left hand. He says: 'Hello! Traveller! I have a proposition for you: Let me collect a bit of blood from you and in return I will give you 30 coin?'", 
			["'Sounds great!' (lose 1 health)","'No way'. Leave immediately."],
			["The man gives you a bag of coin. 'Excellent,' he smiles as he readies the dagger... Ouch!", "You immediately get on your way."],
			4,[new Transaction(0,0,1,30,0,0),new Transaction(0,0,0,0,0,0)])
  		}
  		else if(dice==4) {
			return new Encounter(this.context,"A WILD HUNTER", 
			"You brush past some bushes and see a man sitting down on a rock, skinning a rabbit. He looks up at you.\n'Fancy some meat, friend? Fresh as they come!'", 
			["Buy a small piece (7 rations) for 4 coin.","Buy a small and a large piece (20 rations) for 10 coin.","'No, thanks.'"],
			["The man takes your coin and hands you the meat.", "The man takes your coin and hands you the meat.","You continue on your way."],
			4,[new Transaction(4,0,0,0,7,0),new Transaction(10,0,0,0,20,0),new Transaction(0,0,0,0,0,0)])
  		}
   		else if(dice==5) {
			let cave=this.caves[this.randomInt(0,this.caves.length)]

  			return new Encounter(this.context,"A SECRET " + cave.toUpperCase(), 
			"You come across an entrance to a hidden " + cave + ".", 
			["Investigate the " + cave,"Leave quietly"],
			["There's nothing in it.", "You leave quietly, before anyone - or anything - finds you."])
  		}
  		//else 
		return new Encounter(this.context,"A SMALL SPRING", 
			"There's a small spring with cold water flowing through it.       It looks fresh and healthy.", 
			["Drink","Move on"],
			["Ah, feels lovely!", "You can never trust nature."])
  	}
  	combatEncounters(level,type) {
  		if(type=="boss") {
  			let e = new Encounter(this.context,"THE DOOM KNIGHT", 
			"The Doom Knight", 
			["This is it. Let's dance."],
			["The Doom Knight does not grin. But if he could, he would."],15,
			[new Transaction(0,0,0,0,0,0),new Transaction(0,1,0,0,0,0)],
			new Enemy(this.context,"Doom Knight","The Doom Knight turns towards you, slowly.",
				"The Doom Knight disintegrates into a million tiny pieces.", 
				[new Skill(this.context,"Attack","hacks",this.createTile("dagger",1,1),2,0,6,"#c99"),
				new Skill(this.context,"Attack","headbutts",this.createTile("dagger",1,1),1,0,13,"#c99")],
				15,1,new Transaction(0,0,0,0,3,0)))
			return e
		}
  		let e2 = new Encounter(this.context,"AMBUSHED", 
			"You are ambushed by a Khroll! These creatures are small but agile, they look vaguely humanoid albeit with a mouth full of sharp teeth and with sharp claws on their hands - which this one is currently aiming at you!", 
			["Let's have it.","Throw some meat and run away. (1 ration)"],
			["You ready yourself for a fight!","Hopefully this creature likes squirrel or rabbit or whatever that meat was!"],10,
			[new Transaction(0,0,0,0,0,0),new Transaction(0,1,0,0,0,0)],
			new Enemy(this.context,"Khroll","The Khroll screams and spits as it prepares to attack!",
				"The Khroll collapses, blood leaking from multiple wounds.", 
				[new Skill(this.context,"Attack","rakes",this.createTile("dagger",1,1),1,0,3,"#c99")],
				5,1,new Transaction(0,0,0,0,3,0)))
			return e2
  	}
  	specialEncounters(level,type) {
  		if(type=="exit") {
  			let exit = this.exits[level+1]
  			let e = new Encounter(this.context,exit.toUpperCase(), 
			"You can see " + exit + " just ahead.", 
			["Onwards!","Stay a bit longer in this area."],
			["You grin and pick up the pace.","You turn around.\nYou have unfinished business here!"],1)
			return e
  		}
  		else if(type=="start") {
  			let start = this.exits[level]
  			let levelName =  this.levelNames[level]
  			let e = new Encounter(this.context,levelName.toUpperCase(), 
			"You left " + start + " a while ago. You finally reach the " + levelName + ".",
			["Let's get going!"],
			["You wonder what dangers lie ahead..."],2)
			return e
		}
		else if(type=="boss") {
			let e=this.combatEncounters(level,"boss")
			return e

  			let boss = this.bosses[level][this.randomInt(0,this.bosses[level].length)]
  			let e2= new Encounter(this.context,boss.toUpperCase(), 
			"You've encountered the " + boss + ".",
			["Fight","Run away"],
			["Let's get it on","You run away as fast as you can!"],3)
			return e2
  		}
  		else if(type=="cashflowproblem") {
  			let e = new Encounter(this.context,"A CASH FLOW PROBLEM",
  				"Oh no! You don't have enough coin to pay the expenses of your hired help - so they left!",
  				["Continue"],
  				["After a quick break to re-assess your financial situation, you get back on your way."],5)
			return e
  		}
  		else if(type=="famine") {
  			let e = new Encounter(this.context,"STARVATION",
  				"Oh dear! The rations have run out! Your party has suffered famine and starvation!",
  				["Continue"],
  				["You bury the dead with their full equipment as is custom. A quick prayer and onwards you go."],5)
			return e
  		}   	
  	}
  	randomInt(min,max) {
  		return Math.floor(this.randomGenerator() * (+max - +min)) + +min 
  	}
  	addToBattlelog(text) {
  		this.battlelog.push(text)
  		if(this.battlelog.length>16) {
  			this.battlelog.shift()
  		}
  	}
	update() {
		if(this.gameover || this.win) {
			this.temporaryClickableFields=[]
		}
		else {
			if(this.state==50) {
				for(let i=0; i<this.currentEncounter.enemy.skills.length; i++) {
					this.currentEncounter.enemy.skills[i].update()
					if(this.randomInt(1,40)==1 && !this.currentEncounter.enemy.skills[i].cooldown) {
						this.currentEncounter.enemy.skills[i].activate()
						let target=this.randomInt(0,this.heroes.length)
						if(this.currentEncounter.enemy.skills[i].name=="Attack") {
							this.heroes[target].health-=this.currentEncounter.enemy.skills[i].effect
							this.addToBattlelog("The " + this.currentEncounter.enemy.name + " " + this.currentEncounter.enemy.skills[i].verb + " " + this.heroes[target].name + " for " + this.currentEncounter.enemy.skills[i].effect + " damage.")
						}
						if(this.heroes[target].health<1) {
							this.addToBattlelog(this.heroes[target].name + " collapses in a heap!")	
							if(target==0) {
								this.gameover=true
								this.addToBattlelog("You have died!")
								return
							}
							for(let z=target; z<this.heroes.length; z++) {
								this.heroes[z].y-=100
								this.heroes[z].render()
							}

							this.heroes.splice(target,1)
							this.temporaryClickableFields=[]

							for(let z=0; z<this.heroes.length; z++) {

								for(let a=0; a<this.heroes[z].skills.length; a++) {
									//this.heroes[i].skills[a].icon.y=this.heroes[i].y+30
									this.temporaryClickableFields.push([this.heroes[z].skills[a].icon.x-8, 
										this.heroes[z].skills[a].icon.y-8, 
										48,
										48,z,a])
										console.log("adding for combat: " + a + " " + 
											this.temporaryClickableFields[this.temporaryClickableFields.length-1][0] + "," +
											this.temporaryClickableFields[this.temporaryClickableFields.length-1][1] + "," +
											this.temporaryClickableFields[this.temporaryClickableFields.length-1][2] + "," +
											this.temporaryClickableFields[this.temporaryClickableFields.length-1][3])
								}
							}					
						}
					}
				}
			}
		}
	}
    render() {
    	
    	if(this.state==50 || this.state==51 || this.state==52) {
	   		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
			this.context.beginPath()
			this.context.fillStyle = "#000000"
			this.context.rect(20, 30+10, 20+303,30+226)
			this.context.fill()
			this.context.font = "12px Arial"

			this.context.fillStyle = this.colours[6]
			this.context.strokeStyle = this.colours[6]

			this.context.fillText("COMBAT", 20, 30)
			for(let i=0;i<this.battlelog.length;i++) {
				this.context.fillText(this.battlelog[i], 24, 20+40+15*i)
			}
			if(this.state==51 || this.state==52) {
				this.context.fillStyle = "#66c"
				this.context.fillText("Continue", 24, 40+this.battlelog.length*15)
			}
    	}
    	else if(this.gameover || this.win) {
    		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
			this.context.beginPath()
			this.context.fillStyle = "#000000"
			this.context.rect(20, 30+10, 20+303,30+226)
			this.context.fill()
			this.context.font = "12px Arial"

			this.context.fillStyle = this.colours[6]
			this.context.strokeStyle = this.colours[6]
			if(this.gameover) {
				this.context.fillText("GAME OVER", 20, 30)
				this.context.fillText("You have died.", 20, 30+40)
			}
			else if(this.win) {
				this.context.fillText("EPILOGUE", 20, 30)
				this.context.fillText("You have defeated the Doom Knight!", 20, 30+40)
			}
			return
    	}
		else {
			if(this.state>=100) {
				this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
				this.map[this.level].render(20,30,this.colours[6],this.level,this.blinkers)
			}
			if(this.state>=10 && this.state<=20) {
				this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
				this.currentEncounter.render(25,30,this.colours[6],this.coinTotal, this.foodTotal, this.heroes[0].health)
			}

			if(this.state>99) {
				this.player.render()
			}
		}		
		for(let i=0; i<this.heroes.length; i++) {
			this.context.beginPath()
			this.context.fillStyle = this.colours[0]
			this.context.strokeStyle = this.colours[2]
			this.context.fillRect(this.heroes[i].face.x-3,this.heroes[i].face.y-3,40,40)
			this.context.fill()
			this.heroes[i].y=400+i*100
			this.heroes[i].render()
		}

		this.food.render()
		this.coin.render()
		this.context.fillStyle = "#66c"
	    this.context.fillText("RESOURCES", 20, 320)
	    this.context.fillText("HEROES", 20, 360)

		this.context.fillStyle = "#ccc"
		let foodLimit=0
		let coinLimit=0
		for(let i=0; i<this.heroes.length; i++) {
			foodLimit+=this.heroes[i].foodcost
			coinLimit+=this.heroes[i].coincost
		}
		foodLimit=Math.max(9,foodLimit*3)
		coinLimit=Math.max(9,coinLimit*3)
		if(this.foodTotal<=foodLimit) {
			this.context.fillStyle="#FA4F4D"
		}
	    this.context.fillText(this.foodTotal+ "", 160, 330)
	    this.context.fillStyle = "#ccc"
		if(this.coinTotal<=coinLimit) {
			this.context.fillStyle="#FA4F4D"
		}
	    this.context.fillText(this.coinTotal + "", 245, 330)
	    this.context.fillStyle = "#ccc"
	    this.context.fillText("Name", 20, 380)
	    this.context.fillText("Cost", 70, 380)
	    this.context.fillText("Health and skills", 140, 380)

		if(this.debug) {
			for(let i=0;i<this.temporaryClickableFields.length;i++) {
				this.context.fillStyle="rgba(255, 255, 255, 0.1)"
				this.context.fillRect(this.temporaryClickableFields[i][0], this.temporaryClickableFields[i][1],
					this.temporaryClickableFields[i][2],this.temporaryClickableFields[i][3], "rgba(255, 255, 255, 0.9)")
				//let pos = this.map[this.level].getPos(this.mapPos)
				//this.rectFill(-54+10+72*pos[0],-21+70+(56*pos[1]),
				//	20,20, "rgba(255, 255, 255, 0.5)")
			}
		}
	}
	click(e) {
		console.log("touched/clicked " + e.offsetX + "," + e.offsetY)
		for(let i=0;i<this.temporaryClickableFields.length;i++) {
			if(e.offsetX>=this.temporaryClickableFields[i][0] && e.offsetX<=this.temporaryClickableFields[i][0]+this.temporaryClickableFields[i][2] &&
				e.offsetY>=this.temporaryClickableFields[i][1] && e.offsetY<=this.temporaryClickableFields[i][1]+this.temporaryClickableFields[i][3]) {
				console.log("match:" + i)
				if(this.state==51) {
					this.battlelog=[]
					this.addToBattlelog("You find the following:")
					let loot=this.currentEncounter.enemy.loot.transact()
					//			return [this.coin_gained,this.food_gained,this.health_gained, this.item_gained]

					if(loot[0]>0) {
						this.addToBattlelog("    • " + loot[0] + " coin")
						this.coinTotal+=loot[0] 
					}
					if(loot[1]>0) {
						this.addToBattlelog("    • " + loot[1] + " food") 
						this.foodTotal+=loot[1]
					}
					//no health possible
					if(loot[3]!=null) {
						this.addToBattlelog("    • " + loot[3].name) 
						//todo
					}
					this.addToBattlelog("")
					this.addToBattlelog("")
					this.addToBattlelog("")
					this.state=52
					this.temporaryClickableFields=[]
					this.temporaryClickableFields.push([24, 20+this.battlelog.length*15,60,30])
				}
				else if(this.state==52) {
					if(this.currentEncounter.special==15) {
						this.win=true
						this.state=103
						return
					}
					this.currentEncounter.special=0
					this.temporaryClickableFields = []
					this.state=102	
					this.currentEncounter.state=100
					let neighbours = this.map[this.level].data[this.mapPos]["n"]
					this.blinkers=[]
					for(let i=0; i<neighbours.length; i++) {
						let pos=this.map[this.level].getPos(neighbours[i])
						this.temporaryClickableFields.push([-54+10+72*pos[0],-27+20+56*pos[1],20,20,neighbours[i]])
						this.blinkers.push(neighbours[i])
						console.log("Add neigh " + neighbours[i])
					}			
				}
				else if(this.state==50) {

					let hero=this.temporaryClickableFields[i][4]
					let skill=this.temporaryClickableFields[i][5]
					console.log("hero " + hero + " skill " + skill)
					if(!this.heroes[hero].skills[skill].cooldown) {
						console.log("activate")
						this.heroes[hero].skills[skill].activate()
						if(this.heroes[hero].skills[skill].name=="Attack") {
							this.currentEncounter.enemy.health-=this.heroes[hero].skills[skill].effect
							this.addToBattlelog(this.heroes[hero].name + " attacks the " + this.currentEncounter.enemy.name + " for " + this.heroes[hero].skills[skill].effect + " damage.")
						}
						if(this.currentEncounter.enemy.health<1) {
							this.addToBattlelog(this.currentEncounter.enemy.deathtext)
							this.addToBattlelog("")
							this.addToBattlelog("")
							this.addToBattlelog("")
							this.state=51
							this.temporaryClickableFields=[]
							this.temporaryClickableFields.push([24, 20+this.battlelog.length*15,60,30])
						}
					}
					return
				}
				else if(this.state==100 || this.state==102) {
					this.mapPos=this.temporaryClickableFields[i][4]
					this.temporaryClickableFields = []
					this.currentEncounter=this.map[this.level].data[this.mapPos]["e"]

					let disappearing=[]
				
					for(let i=0; i<this.heroes.length; i++) {
						if(this.heroes[i].coincost==0 || this.heroes[i].coincost<=this.coinTotal) {
							this.coinTotal-=this.heroes[i].coincost
						}
						else {
							disappearing.push(i)
						}
					}
					let newCrew=[]
					for(let i=0; i<this.heroes.length;i++) {
						if(!disappearing.includes(i)) {
							newCrew.push(this.heroes[i])
						}
					}
					this.heroes=newCrew
					let dead=[]
					for(let i=0; i<this.heroes.length; i++) {
						if(this.heroes[i].foodcost==0 || this.heroes[i].foodcost<=this.foodTotal) {
							this.foodTotal-=this.heroes[i].foodcost
						}
						else {
							this.heroes[i].damage(1)
							if(this.heroes[i].health<1) {
								dead.push(i)
								if(i==0) {
									this.gameover=true
								}
							}
						}
					}
					let newCrew2=[]
					for(let i=0; i<this.heroes.length;i++) {
						if(!dead.includes(i)) {
							newCrew2.push(this.heroes[i])
						}
					}
					this.heroes=newCrew2
					if(disappearing.length>0) {
						this.currentEncounter=this.specialEncounters(this.level,"cashflowproblem")
					}
					if(dead.length>0) {
						this.currentEncounter=this.specialEncounters(this.level,"famine")
					}

					if(this.currentEncounter.result!=null) {
						this.state=12
						this.temporaryClickableFields.push([20, 110 + Math.floor(8/60)*15-20, 60,30])
					}
					else {
						this.state=10
						for(let i=0;i<this.currentEncounter.options.length;i++) {
							let canAffordOption=true
							if(this.currentEncounter.special==4 || this.currentEncounter.special==10) {
								canAffordOption=this.currentEncounter.cost[i].affordable(this.coinTotal,this.foodTotal,this.heroes[0].health)
							}
							if(canAffordOption) {
								let textLength = this.context.measureText("1. " +this.currentEncounter.options[i])
								this.temporaryClickableFields.push([20, 110 + i*40 + Math.floor(this.currentEncounter.text.length/60)*15-20, 20+textLength.width,30])
							
								console.log("adding for encounter: " + i + " " + 
									this.temporaryClickableFields[this.temporaryClickableFields.length-1][0] + "," +
									this.temporaryClickableFields[this.temporaryClickableFields.length-1][1] + "," +
									this.temporaryClickableFields[this.temporaryClickableFields.length-1][2] + "," +
									this.temporaryClickableFields[this.temporaryClickableFields.length-1][3])
							}
							else {
								this.temporaryClickableFields.push([-1,-1,-1,-1,-1])
							
							}
						}
					}	
					console.log("clicked on mapPos " + this.mapPos)
					
					this.player.x=-16+20+-54+72*this.map[this.level].data[this.mapPos]["x"]
					this.player.y=-24+30+-22+56*this.map[this.level].data[this.mapPos]["y"]
					this.temporaryClickableFields.push(20,400,25,25,5)
					return
				}
				else if(this.state==10) {
					this.currentEncounter.result=i
					this.state=12
					this.temporaryClickableFields = []
					this.temporaryClickableFields.push([20, 110 + Math.floor(8/60)*15-20, 60,30])
					if(this.currentEncounter.special==4 || this.currentEncounter.special==10) {
						//this.currentEncounter.state=100
						let deal=this.currentEncounter.cost[i].transact()
						this.coinTotal+=deal[0]-this.currentEncounter.cost[i].coin_cost
						this.foodTotal+=deal[1]-this.currentEncounter.cost[i].food_cost
						this.heroes[0].health+=deal[2]-this.currentEncounter.cost[i].health_cost
					}						
					return
				}
				else if(this.state==12) { // result != null
					if(this.currentEncounter.special==1 && this.currentEncounter.result==0) {
						this.temporaryClickableFields = []
						this.mapPos=0
						this.state=100
						this.level++
						let pos=this.map[this.level].getPos(this.mapPos)
						this.temporaryClickableFields=[]
						this.temporaryClickableFields.push([-54+10+72*pos[0],-27+20+56*pos[1],20,20,this.mapPos])
						this.player.x=-16+20+-54+72*this.map[this.level].data[this.mapPos]["x"]
						this.player.y=-24+30+-22+56*this.map[this.level].data[this.mapPos]["y"]-15
						this.blinkers=[]
						this.blinkers.push(this.mapPos)
					}
					else {
						if((this.currentEncounter.special==10 || this.currentEncounter.special==15) && this.currentEncounter.result==0) {
							// enter combat
							console.log("entering combat")

							this.battlelog=[]
							this.addToBattlelog(this.currentEncounter.enemy.introtext)

							this.temporaryClickableFields=[]
							this.state=50
							for(let i=0; i<this.heroes.length; i++) {
								for(let a=0; a<this.heroes[i].skills.length; a++) {
									this.temporaryClickableFields.push([this.heroes[i].skills[a].icon.x-8, 
										this.heroes[i].skills[a].icon.y-8, 
										48,
										48,i,a])
										console.log("adding for combat: " + a + " " + 
											this.temporaryClickableFields[this.temporaryClickableFields.length-1][0] + "," +
											this.temporaryClickableFields[this.temporaryClickableFields.length-1][1] + "," +
											this.temporaryClickableFields[this.temporaryClickableFields.length-1][2] + "," +
											this.temporaryClickableFields[this.temporaryClickableFields.length-1][3])
								}
							}
							return
						}
						if(this.currentEncounter.special==5) {
							this.currentEncounter=this.map[this.level].data[this.mapPos]["e"]
							this.temporaryClickableFields=[]
							if(this.currentEncounter.result!=null) {
								this.state=12
								this.temporaryClickableFields.push([20, 110 + Math.floor(8/60)*15-20, 60,30])
							}
							else {
								this.state=10
								for(let i=0;i<this.currentEncounter.options.length;i++) {
									let canAffordOption=true
									if(this.currentEncounter.special==4 || this.currentEncounter.special==10) {
										canAffordOption=this.currentEncounter.cost[i].affordable(this.coinTotal,this.foodTotal,this.heroes[0].health)
									}
									if(canAffordOption) {
										let textLength = this.context.measureText("1. " +this.currentEncounter.options[i])
										this.temporaryClickableFields.push([20, 110 + i*40 + Math.floor(this.currentEncounter.text.length/60)*15-20, 
											20+textLength,30])
									
										console.log("adding for encounter: " + i + " " + 
											this.temporaryClickableFields[this.temporaryClickableFields.length-1][0] + "," +
											this.temporaryClickableFields[this.temporaryClickableFields.length-1][1] + "," +
											this.temporaryClickableFields[this.temporaryClickableFields.length-1][2] + "," +
											this.temporaryClickableFields[this.temporaryClickableFields.length-1][3])
									}
									else {
										this.temporaryClickableFields.push([-1,-1,-1,-1,-1])
									
									}
								}
							}
						}
						else {
							if(this.currentEncounter.special==1) {
								this.currentEncounter.result=null
							}
							this.temporaryClickableFields = []
							this.state=102	
							this.currentEncounter.state=100
							let neighbours = this.map[this.level].data[this.mapPos]["n"]
							this.blinkers=[]
							for(let i=0; i<neighbours.length; i++) {
								let pos=this.map[this.level].getPos(neighbours[i])
								this.temporaryClickableFields.push([-54+10+72*pos[0],-27+20+56*pos[1],20,20,neighbours[i]])
								this.blinkers.push(neighbours[i])
								console.log("Add neigh " + neighbours[i])
							}
						}
					}
				}
			}
		}
	}

	startGame() {

		this.gameStarted=true

	}
	mulberry32(a) {
	    return function() {
	      var t = a += 0x6D2B79F5;
	      t = Math.imul(t ^ t >>> 15, t | 1);
	      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
	      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    	}
	}

	createTile(design,x,y) {
		for(let i=0; i<this.designs.length;i++) {
			console.log("comparing " + design + " with " + this.designs[i])
			if(design==this.designs[i]) {
				return new Tile(this.context,x,y,i,this.px)
			}
		}
		return null
	}
	createTileDesigns(tileDesigns) {
		let designs=[tileDesigns.length]
		for(let i=0; i<tileDesigns.length; i++) {
			designs[i]=[]
			let P=tileDesigns[i].replace(/./g,a=>{
				let z=a.charCodeAt()
				designs[i].push(z&7)
				designs[i].push((z>>3)&7)
			})
		}
		return designs
	}
}
export default Main
