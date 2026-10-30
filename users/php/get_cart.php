<?php
    ob_start();
    session_start();

    $data=[];

    include "../../connection.php";

    if(!isset($_SESSION["id"])){
        header("location:../../users/login.html");
        exit();
    };

    $user=$_SESSION["email"];

    $query=mysqli_query($conn, "SELECT * from cart where user='$user'");

    while($row=mysqli_fetch_assoc($query)){
 $data[]=[
        "id"=>$row["id"],
        "product"=>$row["product"],
        "business"=>$row["business"],
        "quantity"=>$row["quantity"],
        "in_stock"=>$row["in_stock"],
        "product_id"=>$row["product_id"],
        "price"=>$row["price"],
        "image"=>$row["image"],

    ];
      
    };

    echo json_encode($data);
?>