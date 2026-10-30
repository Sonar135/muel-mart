<?php
    ob_start();
    session_start();
    include '../../connection.php';

    if(!isset($_SESSION["id"])){
        echo json_encode([
            "status"=>"logged out"
        ]);
        exit();
    }

    $user=$_SESSION["email"];
    $product_id=$_POST["product_id"];
    $quantity=$_POST["cart_value"];

    $check_cart=mysqli_query($conn, "SELECT * from cart where product_id='$product_id' and user='$user'");

    if(mysqli_fetch_assoc($check_cart)>0){
        echo json_encode([
            "status"=>"in_cart"
        ]);

        exit();
    }

    $get_product=mysqli_query($conn, "SELECT * from products where id=$product_id");

    $row=mysqli_fetch_assoc($get_product);

    $product_name=$row['product_name'];
    $business=$row['business'];
    $in_stock=$row['quantity'];
    $price=$row['price'];
    $image=$row['image'];

    $insert=mysqli_query($conn, "INSERT into cart (product, business, user, quantity, in_stock, product_id, price, image)
     values( '$product_name', '$business', '$user', $quantity, $in_stock, $product_id, $price, '$image' )");

     if($insert){
        echo json_encode([
            "status"=>"success"
        ]);
     }

?>