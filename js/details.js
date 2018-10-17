function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}
function change(ev){
	//数据
		let leftt=ev.clientX-$('.box').offsetLeft-100;
		let topp=ev.clientY-$('.box').offsetTop-100;
		//边界
		if(leftt<0){
			leftt=0
		}else if(leftt>152){
			leftt=152;
		}

		if(topp<0){
			topp=0
		}else if(topp>152){
			topp=152;
		}
		//改变外观
		$('.moveBox').style.left=leftt+'px';
		$('.moveBox').style.top=topp+'px';
		$('.showBox').style.backgroundPosition = (-2.5*leftt)+'px '+(-2.5*topp)+'px';
	}

	window.onload=function(){
		//让moveBox和showBox显示隐藏
		$('.box').onmouseover=function(){
			$('.moveBox').style.display="block";
			$('.showBox').style.display="block";
		}

		$('.box').onmouseout=function(){
			$('.moveBox').style.display="none";
			$('.showBox').style.display="none";
		}

		$('.box').onmousemove=function(event){
			let ev=event||window.event;
			change(ev);
		}
		// 循环
		for(let i=0;i<$('li').length;i++){
		$('li')[i].onclick = function(){
			let bgImg = getStyle(this,"backgroundImage");
			$("#box").style.backgroundImage = bgImg;
			$("#showBox").style.backgroundImage = bgImg;
			$('li')[i].style.borderColor="red";
		}
		$('li')[i].onmouseout=function(){
				$('li')[i].style.borderColor="pink";
			}
		}
	}