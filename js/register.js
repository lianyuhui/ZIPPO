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
    $("#btn").onclick = function(){
        //1、创建对象
        let xhr = new XMLHttpRequest();
        
        //2、设置请求参数
        xhr.open("post","regSave2.php",true);
        
        //3、设置回调函数
        xhr.onreadystatechange = function(){
            if(xhr.readyState==4 && xhr.status==200){
                //5、接收响应
                let str = xhr.responseText;
                if(str=="1"){
                    alert("注册成功！");
                    location.href="index.html";
                }else if(str=="-1"){
                    $("#message").style.display = "block";
                    $("#message").innerHTML="注册失败，用户名已经存在";
                }else{
                    $("#message").style.display = "block";
                    $("#message").innerHTML="注册失败，服务器出错！";
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
        xhr.open("get","ajax02.php?username="+this.value,true);
        
        //3、设置回调函数
        xhr.onreadystatechange = function(){
            if(xhr.readyState==4 && xhr.status==200){
                //5、接收响应
                let str = xhr.responseText;
                if(str=="1"){
                    $("#usernameMessage").innerHTML = "输入正确";
                }else{
                    $("#usernameMessage").innerHTML = "用户名已被注册";
                }
                
            }
        }
        
        //4、发送请求
        xhr.send();
    }
}
