<?php

        include 'authentication/auth_user.php';
        include 'connection.php';

        $email=$_POST['email'];
        $password=$_POST['password'];


        if(trim($email)=='' or trim($password)==''){
            echo json_encode([
                'status'=>"empty_field"
            ]);

            exit();
        }

        



    login($conn, $email, $password);
    


  

  
    
?>