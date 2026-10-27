

fetch('../session.php', {
    method: "GET"
})
.then(response=>response.json()).then(feedback=>{
    if(feedback.status!='logged in'){
        window.location.href="login.html"
    }
})