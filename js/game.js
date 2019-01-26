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

game.States.Load =Load;

game.States.Billboard = Billboard;

game.States.Menu = Menu;


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