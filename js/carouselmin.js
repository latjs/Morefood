/*
    封装轮播图类
*/
class Carouseles{
	constructor({el,timeout}){
		this.el = el;
		this.timeout = timeout;
		//鼠标移入移出事件
		this.el.onmouseover = () =>{
			//清除定时器
			clearInterval(this.timer);
		}
		this.el.onmouseout = () =>{
			//再次自动轮播
			this.autoMove();
		}
		
		
		//复制Carouseles-list的第一个li到最后
		let CarouselesList = this.el.getElementsByClassName('carousel-list2')[0];
		let firstLi = CarouselesList.children[0];
		this.liWidth = firstLi.offsetWidth;  //每张图片的宽度
		
		CarouselesList.innerHTML += firstLi.outerHTML; //复制第一张图片
		this.imgLen = CarouselesList.children.length; //图片的个数
		
		//设置最新的UI宽度
		CarouselesList.style.width = this.imgLen*this.liWidth +'px';
		
		this.CarouselesList = CarouselesList;
		
		//添加li的下标
		this.liIndex = 0;
		//调价按钮的下标
		this.dotIndex = 0;
		
		//获取按钮的长度
		this.dots = this.el.getElementsByClassName('dots')[0];
		this.dotLen = this.dots.children.length;
		
		for(let i=0; i<this.dotLen;i++){
			this.dots.children[i].onmouseover = () =>{
				this.liIndex = i;
				this.dotIndex =i;
				
				//让ul运动
				bufferMove(this.CarouselesList,{left: - this.liIndex*this.liWidth});
				//切换按钮
				this.dotMove();
			}
		}
		
//		//给左侧的按钮添加点击事件
//		let prev = this.el.getElementsByClassName('prev')[0];
//		
//		prev.onclick = () =>{
//			this.leftMove();
//		}
//		
//		//给右侧按钮添加点击事件
//		let next = this.el.getElementsByClassName('next')[0];
//		
//		next.onclick=() =>{
//			this.rightMove();
//		}
		
		//自动轮播
		this.autoMove();	
	}
	autoMove(){
		this.timer = setInterval(() =>{
			this.rightMove();
		},this.timeout);	
	}
	
	leftMove(){
		this.liIndex--;
		if(this.liIndex < 0){
			this.CarouselesList.style.left = -(this.imgLen - 1)* this.liWidth +'px';
			this.liIndex = this.imgLen - 2;
		}
		bufferMove(this.CarouselesList,{left: -this.liIndex*this.liWidth});
		
		//按钮切换
		this.dotIndex--;
		this.dotMove();
	}
	
	rightMove(){
	  	//图片运动
	  	this.liIndex++;
	  	
	  	if(this.liIndex >= this.imgLen){
	  		this.CarouselesList.style.left = 0
	  		this.liIndex = 1
	  	}
	  	bufferMove(this.CarouselesList,{left: - this.liIndex * this.liWidth});
	  	
	  	//按钮切换
	  	this.dotIndex++;
	  	this.dotMove();
	}
	dotMove(){
		
		//左侧方向的判断
		if(this.dotIndex < 0){
			this.dotIndex = this.dotLen - 1;
		}
		//右侧方向的判断
		if(this.dotIndex >= this.dotLen){
			this.dotIndex = 0;
		}
		
		for(let i=0; i<this.dotLen; i++){
			this.dots.children[i].className = '';
		}
		this.dots.children[this.dotIndex].className = 'active';
	}
	
}
