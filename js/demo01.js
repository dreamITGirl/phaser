/*根据设计图和屏幕宽度的比例自动缩放图片和精灵图的大小*/
var winH = window.innerHeight
var winW = window.innerWidth

console.log(winH,winW)


var H5 = winH > winW

var isGullScreen = winH/winW;//是否是全面屏

var canH,canW,bl;


if(isGullScreen>1.9 && H5 ){//全面屏
	canW = winW;
	canH = winH;
}else if(H5 && isGullScreen < 1.9){
	
	canH = winH;
	canW = canH * 640 /1136;
}else{
	canW = winH * 640 / 1136;
	canH = winH;
}

bl = canW / 640;


var game = new Phaser.Game({
	width:canW,
	height:canH,
	canvas:$('canvas')[0]
})



game.States = {}

game.States.Load = function (){
	this.init = function(){
		this.stage.disableVisibilityChange = true; //当页面失去焦点时动画，倒计时仍继续执行
	}
	this.preload = function(){
		this.load.image('bg','./images/bg.png')
		this.load.image('menu-score','./images/menu-score.png')
		
		this.load.spritesheet('menu-logo','./images/menu-logo.png',560,248,4)
		this.load.spritesheet('menu-one','./images/menu-one.png',560,150,3)
		this.load.spritesheet('menu-pk','./images/menu-pk.png',560,150,3)
		this.load.spritesheet('menu-rank','./images/menu-rank.png',560,150,3)
		this.load.spritesheet('menu-list','./images/menu-list.png',260,150,3)
		this.load.spritesheet('menu-rule','./images/menu-rule.png',260,150,3)
	}
	this.create = function(){
		loadbg()//加载背景
		addImage(40,40,'menu-logo',560,248).animations.add('shark').play(10,true)
		
		addImage(40,318,'menu-score',560,65)
		
		addSprite(40,407,'menu-rank',560,150,function(){
			console.log(1)
		})
		
		addSprite(40,577,'menu-pk',560,150,function(){
			console.log(2)
		})
		
		addSprite(40,747,'menu-one',560,150,function(){
			console.log(3)
		})
		
		addSprite(40,917,'menu-list',260,150,function(){
			console.log(3)
		})
		
		addSprite(340,917,'menu-rule',260,150,function(){
			console.log(3)
		})
	}
}

game.States.Menu = function (){
	this.preload = function(){
		
	}
	this.create = function(){
		
	}
}

game.States.Billboard = function (){
	this.preload = function(){
		
	}
	this.create = function(){
		
	}
}

game.States.Rule = function (){
	this.preload = function(){
		
	}
	this.create = function(){
		
	}
}

game.state.add('Load',game.States.Load)
game.state.add('Menu',game.States.Menu)
game.state.add('Billboard',game.States.Billboard)
game.state.add('Rule',game.States.Rule)

game.state.start('Load')


function addImage(x,y,key,w,h){
	var IMAGE = game.add.image(x*bl,y*bl,key)
	IMAGE.width = w*bl;
	IMAGE.height = h*bl;
	return IMAGE
}

function addSprite(x,y,key,w,h,callback){
	var SPRITE = game.add.button(x*bl,y*bl,key,callback,game,1,0,2)
	SPRITE.width = w*bl
	SPRITE.height = h*bl
	return SPRITE
}
function loadbg(){
	var bg = game.add.image(0,0,'bg')
	bg.width = canW;
	bg.height = canH;
	return bg
}
