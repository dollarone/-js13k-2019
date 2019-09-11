"use strict"

class Tile {
	constructor(context,x,y,type,types) {
		this.render=this.render.bind(this)
		this.context=context
		this.colours="00c000623b00007300524f4dFA4F4DC29F66d1d1d7"
		// 00c000
		// 623b00
		// 007300
		// 524f4d
		// 7a6f6c
		// ac9f00 // C29F66
		// d1d1d7
		this.types=types
		this.type=type
		this.S=16
		this.x=x
		this.y=y	
		// /		"vv~vvvvvvvvvvvwvvwvvvvvvvvvwvvvvvvvvvv~vvvvvvvvv~vvvwvvvvvvvvvvvvvvvvvwvvvvwvvv~wvvvvvvvvvwvvvvvvvvvv~vvvvvvvvvvvwvv~vvwvvvvvvvv",
		//"IYKIKIYKYIIY[I[[[K[IKI[KYY[KI[YIIY[KY[IIII[IYKYKIKIYII[[Y[I[KIYKY[IYIIIIIKYKI[I[II[[Y[K[YK[[I[II[[YKIIYK[[IYI[YKYKI[[[KIIYKYI[II"
	//"IYKIKIYKYIIY[I[[[K[IKI[KYY[KI[YIIY[KY[IIII[IYKYKIKIYII[[Y[I[KIYKY[IYIIIIIKYKI[I[II[[Y[K[YK[[I[II[[YKIIYK[[IYI[YKYKI[[[KIIYKYI[II

		//"lmlemelmlmlelldmdmdlememeeemelmlmlellldlmledmdmeledememelelmllleelememelememedemmlelledlmeldmmldlllmdmleememddmlmdmdmedmmmlememd"

		//"lmlemmlmlmlelmdmdmdmememememelmlmlmlmlmlmlmdmdmelemememelelmlmlmemdmememememmdemmlelmedlmemdmmmdlmlmdmmeememelmmmdmlmedmmmlememd"
		//mmemmmmemmemmmmemmemmmmemmemmmmeddddddddmmlmmemmmmlmmemmmmlmmemmmmlmmemmddddddddmlmmemmmmlmmemmmmlmmemmmmlmmemmmmlmmemmmdddddddd
		
		//green sword: "@@@@@@X[@@@@@@[[@@@@@X[[@@@@@[[C@@@@X[[@@@I@[[C@@@IX[[@@@@HY[C@@@@PI[@@@@@RJA@@@@PRRIA@@@RRBHA@@@RR@@@@@@RB@@@@@@@@@@@@@@@@@@@@@"
			
	}
	old() {	
		data.replace(/./g,a=>{
			let z=a.charCodeAt()
			this.px.push(z&7)
			this.px.push((z>>3)&7)
		})	
		// face: "@PRRRR@@@RRRRRR@PRRRRRRBRRrVRRRRRrvVRRRRRrvvrVVRRvvvvVvVRvftvdvVPvvvuvvV@vvvnvvV@vvvnvv@@vvvuvv@@vvvvvF@@vfddv@@@pvvvF@@@@vvv@@@".

		//@H@@@@@@@IA@@H@@@IA@@HA@HII@@IA@HII@@IA@IIIA@IA@IIIA@II@IIIAHII@IIIAHII@IIIAHII@III@IIIAHII@IIIA@R@@IIIA@R@@HII@@@@@@PB@@@@@@PB@
		//IYKIKIYKYIIY[I[[[K[IKI[KYY[KI[YIIY[KY[IIII[IYKYKIKIYII[[Y[I[KIYKY[IYIIIIIKYKI[I[II[[Y[K[YK[[I[II[[YKIIYK[[IYI[YKYKI[[[KIIYKYI[II
		//lmlemmlmlmlelmdmdmdmememememelmlmlmlmlmlmlmdmdmelemememelelmlmlmemdmememememmdemmlelmedlmemdmmmdlmlmdmmeememelmmmdmlmedmmmlememd
		//"IYKIKIYKYIIY[I[[[K[IKI[KYY[KI[YIIY[KY[IIII[IYKYKIKIYII[[Y[I[KIYKY[IYIIIIIKYKI[I[II[[Y[K[YK[[I[II[[YKIIYK[[IYI[YKYKI[[[KIIYKYI[II"
		let P="vv~vvvvvvvvvvvwvvwvvvvvvvvvwvvvvvvvvvv~vvvvvvvvv~vvvwvvvvvvvvvvvvvvvvvwvvvvwvvv~wvvvvvvvvvwvvvvvvvvvv~vvvvvvvvvvvwvv~vvwvvvvvvvv".replace(/./g,a=>{
			let z=a.charCodeAt()
			this.px[0].push(z&7)
			this.px[0].push((z>>3)&7)
		})	
		P="[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[I[[[[[[I[I[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[".replace(/./g,a=>{
			let z=a.charCodeAt()
			this.px[1].push(z&7)
			this.px[1].push((z>>3)&7)
		})//"IYKIKIYKYIIY[I[[[K[IKI[KYY[KI[YIIY[KY[IIII[IYKYKIKIYII[[Y[I[KIYKY[IYIIIIIKYKI[I[II[[Y[K[YK[[I[II[[YKIIYK[[IYI[YKYKI[[[KIIYKYI[II
		P="vv~vvvvvvvvvvvwvvwvvvvvvvvvwvvvvvvvvvv~vvvvvvvvv~vvvwvvvvvvvvvvvvvvvvvwvvvvwvvv~wvvvvvvvvvwvvvvvvvvvv~vvvvvvvvvvvwvv~vvwvvvvvvvv".replace(/./g,a=>{
			let z=a.charCodeAt()
			this.px[0].push(z&7)
			this.px[0].push((z>>3)&7)
		})	
		//"lmlemelmlmlelldmdmdlememeeemelmlmlellldlmledmdmeledememelelmllleelememelememedemmlelledlmeldmmldlllmdmleememddmlmdmdmedmmmlememd"
		P="mo}".replace(/./g,a=>{
			let z=a.charCodeAt()
			this.px[2].push(z&7)
			this.px[2].push((z>>3)&7)
		})//"lmlemmlmlmlelmdmdmdmememememelmlmlmlmlmlmlmdmdmelemememelelmlmlmemdmememememmdemmlelmedlmemdmmmdlmlmdmmeememelmmmdmlmedmmmlememd"
		//mmemmmmemmemmmmemmemmmmemmemmmmeddddddddmmlmmemmmmlmmemmmmlmmemmmmlmmemmddddddddmlmmemmmmlmmemmmmlmmemmmmlmmemmmmlmmemmmdddddddd
		P="".replace(/./g,a=>{
			let z=a.charCodeAt()
			this.px[3].push(z&7)
			this.px[3].push((z>>3)&7)
		})
		P="@H@@@@@@@IA@@H@@@IA@@HA@HII@@IA@HII@@IA@IIIA@IA@IIIA@II@IIIAHII@IIIAHII@IIIAHII@III@IIIAHII@IIIA@R@@IIIA@R@@HII@@@@@@PB@@@@@@PB@".replace(/./g,a=>{
			let z=a.charCodeAt()
			this.px[4].push(z&7)
			this.px[4].push((z>>3)&7)
		})
		P="@@@`@@@@@@@`D@@@@@@de@@@@@`eeD@@@@`emD@@@@deld@@@`lele@@@`mdemD@`lmleme@`meleme@@lemeleD@`dmmlmd@@dmmlme@@`mmlmD@@@dmdd@@@@`dd@@".replace(/./g,a=>{
			let z=a.charCodeAt()
			this.px[5].push(z&7)
			this.px[5].push((z>>3)&7)
		})
		
		P="@@@@@@@x@@@@@@Gp@@@@@@Fp@@@@@@Fp@@@@@@F@@@@@@@@@G@@@@@@@F@@@@@@@FGG@@@@@FFFG@@@@FFFFG@@@@FFFF@@G@FFFFx@F@@FFFp@F@@@@Fp@F@@@@@p@@".replace(/./g,a=>{
			let z=a.charCodeAt()
			this.px[6].push(z&7)
			this.px[6].push((z>>3)&7)
		})
		P="`ddD`ddDdemddmldlemmlmleddddddddlmlmmlmedddmedded@`dd@`d@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@".replace(/./g,a=>{
			let z=a.charCodeAt()
			this.px[7].push(z&7)
			this.px[7].push((z>>3)&7)
		})

		//green sword: "@@@@@@X[@@@@@@[[@@@@@X[[@@@@@[[C@@@@X[[@@@I@[[C@@@IX[[@@@@HY[C@@@@PI[@@@@@RJA@@@@PRRIA@@@RRBHA@@@RR@@@@@@RB@@@@@@@@@@@@@@@@@@@@@"
		P="@@@@@@hm@@@@@@}o@@@@@ho@@@@@}E@@@@ho@@@@@}E@@B@ho@@PR@}E@@@Rjo@@@@PRE@@@@@Rj@@@@@PRR@@@@@RBRB@@@RR@PR@@@RB@@B@@@PB@@@@@@".replace(/./g,a=>{
		  	let z=a.charCodeAt()
		  	this.px[8].push(z&7)
		  	this.px[8].push((z>>3)&7)
		})
		// @`@@@D@@@`dddD@@@@Umj@@@@@umn@@@@@uvn@@@@@hmE@@@@m}}mm@xhooooo@xho}}mo@hooooo@Ghm}}mmxG@vllDV@@vddDvB@@@d`DB@@@@d`D@@@@`d`d@@@

		P="@`@@@D@@@`dddD@@@@Umj@@@@@umn@@@@@uvn@@@@@hmE@@@@m}}mm@xhooooo@xho}}mo@hooooo@Ghm}}mmxG@vllDV@@vddDvB@@@d`DB@@@@d`D@@@@`d`d@@@".replace(/./g,a=>{
		  	let z=a.charCodeAt()
		  	this.px[9].push(z&7)
		  	this.px[9].push((z>>3)&7)
		})
		this.S=16
		this.x=x
		this.y=y
	}

	render(x,y,type=this.type) {
		
		for(let j=0;j<this.S;j++){
		  	for(let i=0;i<this.S;i++){
		    	if(this.types[type][j*this.S+i]){
				    this.context.fillStyle="#"+this.colours.substr(6*(this.types[type][j*this.S+i]-1),6);
				    this.context.fillRect(this.x+i*2,this.y+j*2,2,2);
		   		}
			}
		}
	}
}
export default Tile