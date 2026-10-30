let signup=document.querySelector("form")

signup.addEventListener("submit", (e)=>{
    e.preventDefault()

   const form_data= new FormData(signup)

        fetch("../signup.php", {
            method: "POST",
            body: form_data
        })
        .then(response=>response.json()).then(feedback=>{

            if(feedback.status=="empty_field"){
                error_notification("please fill all fields")
            }

            else if(feedback.status=='invalid_email'){
                error_notification("please check email")
            }

             else if(feedback.status=='pwd_match'){
                error_notification("passwords don't match")
            }

       

              else if(feedback.status=='email_exists'){
                error_notification("Account with email already exists")
            }

            if(feedback.status==="success"){
                window.location.href="login.html"
            }
        })
})

