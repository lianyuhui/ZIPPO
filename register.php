<?php


	header("Content-style:text/html;charset=utf-8");

	//接收数据
	$username=$_GET['username'];

	//搭桥修路
	$con=mysql_connect("localhost","root","root");
	//判断
	if(!$con){
		echo "数据库连接失败";
	}else{
		//选择数据库
		mysql_select_db("zippo",$con);

		//执行SQL语句
		$sqlstr="select * from user where username='$username'";
		$result=mysql_query($sqlstr,$con);

		//关闭数据库
		mysql_close($con);

		//响应
		$rows=mysql_num_rows($result);
		if($rows==0){
			echo "1";
		}else{
			echo "0";
		}


	}
?>