<?php

    include "../../connection.php";
    ob_start();
    session_start();

        if(isset($_SESSION["id"])){
        
            $email=$_SESSION['email'];
        
    }

    $biz_add=$_POST["biz_add"];
    $biz_name=$_POST["biz_name"];
    $mode_of_id=$_POST["mode_id"];
    $image_name=$_POST["image"];
    $image=$_FILES["select_image"]["tmp_name"];


    $query=mysqli_query($conn, "INSERT into business")
  

?>