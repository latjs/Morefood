/*
    封装轮播图类
*/
class Carousel{
	constructor({el,timeout = 3000}){
		this.el = el;
		this.timeout = timeout;
		
		//鼠标移入移出事件
		this.el.onmouseover = () =>{
			//清除定时器
			clearInterval(this.timer);
		}
		this.el.onmouseout = () =>{
			this.autoMove();
		}
		
		
		//复制carousel-list的第一个li到最后
		let carouselList = this.el.getElementsByClassName('carousel-list')[0];
		let firstLi = carouselList.children[0];
		this.liHeight = firstLi.offsetHeight;  //每张图片的宽度
		
		carouselList.innerHTML += firstLi.outerHTML; //复制第一张图片
		this.imgLen = carouselList.children.length; //图片的个数
		
		//设置最新的UI宽度高度
		carouselList.style.height = this.imgLen*this.liHeight +'px';
		
		this.carouselList = carouselList;
		
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
				bufferMove(this.carouselList,{top: - this.liIndex*this.liHeight});
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
			this.carouselList.style.top = -(this.imgLen - 1)* this.liHeight +'px';
			this.liIndex = this.imgLen - 2;
		}
		bufferMove(this.carouselList,{top: -this.liIndex*this.liHeight});
		
		//按钮切换
		this.dotIndex--;
		this.dotMove();
	}
	
	rightMove(){
	  	//图片运动
	  	this.liIndex++;
	  	
	  	if(this.liIndex >= this.imgLen){
	  		this.carouselList.style.top = 0
	  		this.liIndex = 1
	  	}
	  	bufferMove(this.carouselList,{top: - this.liIndex * this.liHeight});
	  	
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
