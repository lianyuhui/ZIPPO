<?php
	header("Content-type:text/html;charset=utf-8");


	//接收数据
	$username=$_POST['username'];
	$userpass=$_POST['userpass'];

	//修路搭桥
	$con=mysql_connect("localhost","root","root");

	if(!$con){
		echo "连接数据库失败";
		mysql_close($con);

	}else{

		//选择数据库
		mysql_select_db("zippo",$con);

		//执行SQL语句

		$sqlstr="select * from user where username='$username' and username='$userpass'";
		$result=mysql_query($sqlstr,$con);

		//关闭数据库
		mysql_close($con);

		//响应
		$rows=mysql_num_rows($result);
		if($rows==0){
			echo "登录失败";

		}else{
			header("location:index.html");
		}
	}
?>