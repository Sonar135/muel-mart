<?php

    include "../../connection.php";




    $product=$_POST["product_name"];
    $category=$_POST["category"];
    $price=$_POST["price"];
    $image=$_POST["image"];
    $image_file=$_FILES['select_image']['tmp_name'];

    
    $query=mysqli_query($conn, "INSERT into products (product_name, category, price, image, seller_id, quantity) 
    values('$product', '$category', $price, '$image', 'seller01', 1)");



    move_uploaded_file($image_file, "../../resources/$image");

    if($query){
        echo json_encode([
            "status" => "success"
        ]);
    }




    else{
        echo json_encode([
            "status" => "error"
        ]);
    }

?>