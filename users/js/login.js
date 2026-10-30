let login= document.querySelector("form")

// fetch("../session.php", {
//     method: "GET",
// }).then(response=>response.json()).then(feedback=>{
//     if(feedback.status!="logged out"){
//         window.location.href="index.html"
//     }
// })

login.addEventListener("submit", (e)=>{
    e.preventDefault()

  const  form_data= new FormData(login)

    fetch("../signin.php", {
        method: "POST",
        body: form_data
    })
    .then(response=>response.json()).then(feedback=>{
        if(feedback.status=="logged in"){
            success_notification("You're Already Logged In")
            // window.location.href="index.html"
        }

        if(feedback.status=="invalid"){
            error_notification("Email or password incorrect")
        }

        else if(feedback.status=="empty_field"){
            error_notification("please fill all fields")
        }

        else if(feedback.status=="success"){
            window.location.href=feedback.redirect_url
        }
    })
})