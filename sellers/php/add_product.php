<?php
    ob_start();
    session_start();
    include "../../connection.php";




    $product=$_POST["product_name"];
    $category=$_POST["category"];
    $price=$_POST["price"];
    $image=$_POST["image"];
    $image_file=$_FILES['select_image']['tmp_name'];
    $email=$_SESSION["email"];
    $business=$_SESSION["business"];

    if(empty($product) or empty($category) or empty($price) or empty($image)){
         echo json_encode([
            "status" => "empty_field"
        ]);

        exit();
    }


    
    $query=mysqli_query($conn, "INSERT into products (product_name, category, price, image, seller_id, quantity, business) 
    values('$product', '$category', $price, '$image', '$email', 1, '$business')");



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