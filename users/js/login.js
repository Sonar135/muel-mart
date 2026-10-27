let login= document.querySelector("form")

login.addEventListener("submit", (e)=>{
    e.preventDefault()

  const  form_data= new FormData(login)

    fetch("../signin.php", {
        method: "POST",
        body: form_data
    })
    .then(response=>response.json()).then(feedback=>{
        if(feedback.status=="invalid"){
            console.log("Email or password incorrect")
        }

        else if(feedback.status=="empty_field"){
            console.log("please fill all fields")
        }

        else if(feedback.status=="success"){
            window.location.href=feedback.redirect_url
        }
    })
})