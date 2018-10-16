
function $(str){
    if(str.charAt(0)=="#"){
        return document.getElementById(str.substring(1));
    }else if(str.charAt(0)=="."){
        return document.getElementsByClassName(str.substring(1));
    }else{
        return document.getElementsByTagName(str);
    }
}

window.onload = function(){


     // 正则用户名（手机号）
     $("#username").onkeyup = function(){
		let reg = /^1[3-9]\d{9}$/; 
		
		let str1= this.value;
		if(reg.test(str1)){
            $("#usernameMessage11").innerHTML = "√";
           
		}else{
			$("#usernameMessage11").innerHTML = "请输入正确的手机号！";
        }	
        	
    }
    //密码
    $("#userpass").onkeyup = function(){
        //（必须包含字母、数字、特殊字符，长度6个字符以上）
        let regLetter = /[a-zA-Z]/; 
        let regNum = /[0-9]/; 
        let regSpecial = /[\@^*$!#]/; 

        var str2 = this.value;
        if(str2.length>=6 && regLetter.test(str2) && regNum.test(str2) && regSpecial.test(str2) ){
            $("#usernameMessage2").innerHTML = "√";
        }else{
            $("#usernameMessage2").innerHTML = "6位以上字母、数字、特殊字符";
        }		
    } 

     $("#chong").onkeyup = function(){
        if($("#userpass").value != $("#chong").value){
            $("#usernameMessage3").innerHTML = "密码不一致";
        }else{
            $("#usernameMessage3").innerHTML = "";
        }
     }
//连接
    $("#btn").onclick = function(){
        //1、创建对象
        let xhr = new XMLHttpRequest();
        
        //2、设置请求参数
        xhr.open("post","regSave.php",true);
        
        //3、设置回调函数
        xhr.onreadystatechange = function(){
            if(xhr.readyState==4 && xhr.status==200){
                //5、接收响应
                let str = xhr.responseText;
                if(str=="1"){
                    alert("恭喜您，注册成功！");
                    location.href="login.html";
                }else if(str=="-1"){
                    
                    $("#usernameMessage1").innerHTML="注册失败，用户名已经存在";
                }else{
                    
                    $("#usernameMessage1").innerHTML="注册失败，服务器出错！";
                }
            }
        }
        
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        
        //4、发送请求
        let str = "username="+$("#username").value+"&userpass="+$("#userpass").value;
        xhr.send(str);
    }

    $("#username").onblur = function(){
        //1、创建对象
        let xhr = new XMLHttpRequest();
        
        //2、设置请求参数
        xhr.open("get","register.php?username="+this.value,true);       
        //3、设置回调函数
        xhr.onreadystatechange = function(){
            if(xhr.readyState==4 && xhr.status==200){
                //5、接收响应
                let str = xhr.responseText;
                if(str!="1"){
                    $("#usernameMessage1").innerHTML = "用户名已被注册";
                }else if(str=="1" || $("#username").value == ""){
                    $("#usernameMessage1").innerHTML = "";
                }else{
                    $("#usernameMessage1").innerHTML = "";
                }
            }
        }
        //4、发送请求
        xhr.send();
    }    
}
