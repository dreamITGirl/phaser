
function Load (){
	this.init = function(){
		this.stage.disableVisibilityChange = true; //当页面失去焦点时动画，倒计时仍继续执行
	}
	this.preload = function(){
		this.load.image('bg','./images/bg.png')
		this.load.image('menu-score','./images/menu-score.png')
		this.load.image('score-list','./images/score-list.png');//加载图片
		
		
		this.load.spritesheet('menu-logo','./images/menu-logo.png',560,248,4)
		this.load.spritesheet('menu-one','./images/menu-one.png',560,150,3)
		this.load.spritesheet('menu-pk','./images/menu-pk.png',560,150,3)
		this.load.spritesheet('menu-rank','./images/menu-rank.png',560,150,3)
		this.load.spritesheet('menu-list','./images/menu-list.png',260,150,3)
		this.load.spritesheet('menu-rule','./images/menu-rule.png',260,150,3)
		this.load.spritesheet('back','./images/back.png',50,50,3)
	}
	this.create = function(){
		loadbg()//加载背景
		addImage(40,40,'menu-logo',560,248).animations.add('shark').play(10,true)
		
		addImage(40,318,'menu-score',560,65)
		
		addSprite(40,407,'menu-rank',560,150,function(){
		})
		
		addSprite(40,577,'menu-pk',560,150,function(){
		})
		
		addSprite(40,747,'menu-one',560,150,function(){
		})
		
		addSprite(40,917,'menu-list',260,150,function(){
			game.state.start('Billboard')//点击榜单可进入榜单页面
		})
		
		addSprite(340,917,'menu-rule',260,150,function(){
		})
	}
}







