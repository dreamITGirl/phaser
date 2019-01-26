/*如何将渲染游戏中的文字*/
//需求:榜单排名需要每隔一段事件就要更新，这里我们就在update或者render函数中改变排名内容;
//update和render函数是每秒就会调一次，但它并不会影响整个游戏的内存
function Billboard(){
	var self = this;//在ajax中的this并不会指向我们想要的对象
	this.init = function(){
		
		this.listArr = []
//		this.load.image('score-list','./images/score-list.png');//加载图片，需要放在demo01.js中的load函数里统一加载，否则加载不出来
	}
	this.preload = function(){
		loadbg()//加载背景
		/*增加游戏所需要的图片,使用的demo01.js封装的函数*/
		addImage(24,120,'score-list',594,879)
		addSprite(24,37,'back',50,50,function(){
			game.state.start('Load')//点击榜单可进入榜单页面
		})
		/*var listbg = game.add.image(24*bl,120*bl,'score-list');
		listbg.width = 594 *bl;
		listbg.height = 879 *bl;*///这个函数是addImage未封装的内容。
		this.loadText()
		
	}
	this.update = function(){
		setTimeout(function(){
			$.ajax({
				type:"get",
				url:"./json/billboard.json",
				async:true,
				success:function(data){
					for(var i=0;i<data.length;i++){
						if(i<self.listArr.length){
							self.listArr[i][0].text= data[i].ranking;
							self.listArr[i][1].text= data[i].name;
							self.listArr[i][2].text= data[i].score;
							self.listArr[i][3].text= data[i].questionNum+' / '+data[i].useTime+' / '+data[i].rightRadio;
						}else{
							self.listArr[i] = [
								self.addText(62,i,data[i].ranking,30,'#6CDDFA'),
								self.addText(122,i,data[i].name,30,'#666'),
								self.addText(250,i,data[i].score,30,'#666'),
								self.addText(383,i,data[i].questionNum+' / '+data[i].useTime+' / '+data[i].rightRadio,24,'#666')
							]
						}
					}
				}
			});
		},2000)
		
	}
	this.addText = function(x,i,text,fontSize,color){
		var top =( 200+81*i+(80-fontSize)/2)*bl;
		var text = this.add.text(x*bl,top,text,{
			fill:color,
			fontSize:(fontSize *bl),
			fontWeight:'normal',
		})//有四个参数，this.add.text(x,y,text,style)//这四个参数分别代表了文本的x方向的位置，y方向的位置，当前的文本内容,样式对象;渲染的字体基本都是默认加粗的字体。
		return text
	}
	this.loadText = function(){
		/*用ajax请求榜单数据*/
		$.ajax({
			type:"get",
			url:"./json/version.json",
			async:true,
			success:function(res){
				for (var i=0;i<res.length;i++) {
					self.listArr[i] = [
						self.addText(62,i,res[i].ranking,30,'#6CDDFA'),
						self.addText(122,i,res[i].name,30,'#666'),
						self.addText(250,i,res[i].score,30,'#666'),
						self.addText(383,i,res[i].questionNum+' / '+res[i].useTime+' / '+res[i].rightRadio,24,'#666')
					]
				}
			},
			error:function(err){
				console.log(JSON.stringify(err))
			}
		});
	}
	
}
