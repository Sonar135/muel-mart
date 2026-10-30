<?php

    include "../../connection.php";
    ob_start();
    session_start();

        if(isset($_SESSION["id"])){
        
            $email=$_SESSION['email'];
            $id=$_SESSION['id'];
        
    }

    $biz_add=$_POST["biz_add"];
    $biz_name=$_POST["biz_name"];
    $mode_of_id=$_POST["mode_id"];
    $image_name=$_POST["image"];
    $image=$_FILES["select_image"]["tmp_name"];

    if(empty($biz_add) || empty($biz_name) || empty($mode_of_id) || empty($image_name)){
        echo json_encode([
            'status'=>'empty_field'
        ]);

        exit();

    }


    $query=mysqli_query($conn, "INSERT into business (name, address, mode_of_id, image, owner) values('$biz_name', '$biz_add',
    '$mode_of_id', '$image_name', '$email')");

    $query2=mysqli_query($conn, "UPDATE users set is_seller='true', business='$biz_name' where id=$id");

    move_uploaded_file($image, "../../resources/$image_name");

    if($query){
        $_SESSION["is_seller"]='true';
        echo json_encode([
            'status'=>'success'
        ]);
    };
  

?>