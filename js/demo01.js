/*根据设计图和屏幕宽度的比例自动缩放图片和精灵图的大小*/
var winH = window.innerHeight
var winW = window.innerWidth
var devicePixelRatio = window.devicePixelRatio
var H5 = winH > winW
var canH = winH * devicePixelRatio
var canW = H5 ? winW * devicePixelRatio : winH * (640 / 1136) * devicePixelRatio;

var bl = canW /640 ;


var game = new Phaser.Game({
	width:canW,
	height:canH
})

game.States = {}

game.States.Load = function (){
	this.preload = function(){
		this.load.image('bg','./images/bg.png')
		this.load.spritesheet('menu-logo','./images/menu-logo.png')
	}
	this.create = function(){
		this.add.image(0,0,'bg')
//		addImage(40,40,'menu-logo',560,248)
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
	var SPRITE = game.add.spritesheet(x*bl,y*bl,key,callback,game,1,0,2)
	SPRITE.width = w*bl
	SPRITE.height = h*bl
	return SPRITE
}
