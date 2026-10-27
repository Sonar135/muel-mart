
fetch('../session.php', {
    method:"GET"
})
.then(response=>response.json()).then(feedback=>{
    if(feedback.status=="logged out"){
        window.location.href="../users/login.html"
    }


    else if(feedback.is_seller!="true"){
        window.location.href="../users/seller_creation.html"
    }
})