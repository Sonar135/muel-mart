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
                console.log("please fill all fields")
            }

            else if(feedback.status=='invalid_email'){
                console.log("please check email")
            }

             else if(feedback.status=='pwd_match'){
                console.log("passwords don't match")
            }

       

              else if(feedback.status=='email_exists'){
                console.log("Account with email already exists")
            }

            if(feedback.status==="success"){
                window.location.href="login.html"
            }
        })
})

