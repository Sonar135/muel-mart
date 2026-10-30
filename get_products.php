<?php
    ob_start();
    session_start();
    include 'connection.php';

    $data=[];
    $query_addition='';

    if(isset($_SESSION["id"])){
        $email=$_SESSION["email"];
         $query_addition= "where seller_id!='$email'";
    }

    if(isset( $_GET['owner'])){
        $owner=$_GET['owner'];
        $query_addition= "where seller_id='$owner'";
    }

    if(isset($_GET['product'])){
        $product=$_GET['product'];
        $query_addition="where id=$product";
    }
    

   $query = mysqli_query($conn, "SELECT * from products $query_addition");

   while($row=mysqli_fetch_assoc($query)){
    $data[]=[
        "product_name"=>$row["product_name"],
        "category"=>$row["category"],
        "price"=>$row["price"],
        "image"=>$row["image"],
        "seller_id"=>$row["seller_id"],
        "quantity"=>$row["quantity"],
        "id"=>$row["id"],
        "business"=>$row["business"],
    ];
   };

   echo json_encode($data);
?>