
<?php
 
    include 'authentication/auth_user.php';
    include 'connection.php';




        $email=$_POST['email'];
        $fname=$_POST['fname'];
        $lname=$_POST['lname'];
        $phone=$_POST['phone'];
        $password=$_POST['password'];
        $confirm=$_POST['confirm'];




     
        

    
        if($email=='' or $fname=='' or $lname=='' or $phone=='' or $password=='' or $confirm==''){
            echo json_encode([
                'status'=>'empty_field'
            ]);

            exit();
        }
  

        if(invalid_email($email)!== false){
            echo json_encode([
                "status"=>"invalid_email"
            ]);
        exit();
        }

        if(pwd_match($password, $confirm)!== false){
      
            echo json_encode([
                "status"=>"pwd_match"
            ]);
            exit();
        }

        // if (invalid_password($password)) {
        //     echo json_encode([
        //         "status"=>"invalid_pass"
        //     ]);
        //     exit();
 
        // }

        if(email_exists($conn, $email)!== false){
            echo json_encode([
                "status"=>"email_exists"
            ]);
      
            exit();
        }


     

        create_user($conn, $fname, $lname, $email, $password, $phone);
    
        

?>


