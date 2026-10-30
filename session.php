<?php

    include 'connection.php';

    ob_start();
    session_start();

    $data=[
        "status"=>'logged out'
    ];

    if(isset($_SESSION["id"])){
        $data=[
            "status"=>'logged in',
            'email'=>$_SESSION['email'],
            'fname'=>$_SESSION['fname'],
            'lname'=>$_SESSION['lname'],
            'phone'=>$_SESSION['phone'],
            'is_seller'=>$_SESSION['is_seller'],
            'is_admin'=>$_SESSION['is_admin'],
            'id'=>$_SESSION['id'],
            'business'=>$_SESSION['business']
        ];

        $id=$_SESSION['id'];

    $query=mysqli_query($conn, "SELECT * from users where id=$id");

  if ($row=mysqli_fetch_assoc($query)){
    $_SESSION['is_seller']=$row['is_seller'];
    $_SESSION['business']=$row['business'];
   };



    };


    echo json_encode($data);
?>