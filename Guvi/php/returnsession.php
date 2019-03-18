<?php
include_once("dbconnect.php");
session_start(); 

$email=$_SESSION['email'];
$result['msg']=$email; //returning the email session
  echo var_export(json_encode($result));
?>
