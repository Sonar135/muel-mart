<?php
        ob_start();
        // session_start();
        include 'authentication/auth_user.php';
        include 'connection.php';

        if(isset($_SESSION["id"])){
            echo json_encode ([
                "status"=>"logged in"
            ]);

            exit();
        }

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