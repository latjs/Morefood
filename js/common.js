function $$(id){
	return document.getElementById(id);
}

//缓冲运动
function bufferMove(obj,target,fn,ratio=8){
    //清定时器
    clearInterval(obj.timer);
    //启动新的定时器
    obj.timer=setInterval(function(){
    	var all=true;
    	for(var attr in target){
    		var cur=0;
    		if(attr==='opacity'){
    			cur=parseInt(getStyle(obj,'opacity')*100);
    		}else{
    			cur=parseInt(getStyle(obj,attr));
    		}
    		//计算速度
    		var speed=(target[attr]-cur)/ratio;
    		
    		//判断方向
    		speed=speed>0?Math.ceil(speed):Math.floor(speed);
    		//定义next下次值
    		var next=cur+speed;
    		//赋值
    		if(attr==='opacity'){
    			obj.style.opacity=next/100;
    		}else{
    			obj.style[attr]=next+'px';
    		}
    		//判断当前属性是否运动完毕
    		if(next!==target[attr]){
    			all=false;
    		}
    	}
    	//如果all为true说明所有运动均已完毕
    	if(all){
    		//清除定时器
    		clearInterval(obj.timer);
    		//执行回调函数
    		if(fn){
    			fn();
    		}
    	}
    },50);
}

function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}
