let notification_timer
const success_notification=(text)=>{
  clearTimeout(notification_timer)

   document.querySelector(".success_notification").classList.remove("active")
  document.querySelector(".success_notification").textContent=''

       document.querySelector(".error_notification").classList.remove("active")
  document.querySelector(".error_notification").textContent=''

       document.querySelector(".success_notification").classList.add("active")
  document.querySelector(".success_notification").textContent=text

  notification_timer= setTimeout(() => {
   document.querySelector(".success_notification").classList.remove("active")
  document.querySelector(".success_notification").textContent=''
  }, 4000);

}

const error_notification=(text)=>{
  clearTimeout(notification_timer)
      document.querySelector(".error_notification").classList.remove("active")
  document.querySelector(".error_notification").textContent=''

     document.querySelector(".success_notification").classList.remove("active")
  document.querySelector(".success_notification").textContent=''
  
   

 document.querySelector(".error_notification").classList.add("active")
  document.querySelector(".error_notification").textContent=text
 notification_timer= setTimeout(() => {
        document.querySelector(".error_notification").classList.remove("active")
  document.querySelector(".error_notification").textContent=''
  }, 4000);


  
}



document.addEventListener("DOMContentLoaded", () => {

  // setTimeout(() => {
  //   document.querySelector(".loader_overlay").classList.add("hide")
  // }, 1000);




  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
      document.querySelector("title").textContent=""
      document.querySelector("title").textContent="Muel Mart"

      let icon=  document.createElement("link")
      icon.rel="icon"
      icon.href="../resources/favicon.png"

      document.head.appendChild(icon);

  

   const prof = document.getElementById("prof");
const profBox = document.querySelector(".prof_box");



if (prof && profBox) {

  prof.addEventListener("click", (e) => {
    e.stopPropagation();
    profBox.classList.toggle("active");
  });


  document.addEventListener("click", (e) => {
    if (!prof.contains(e.target) && !profBox.contains(e.target)) {
      profBox.classList.remove("active");
    }
  });
}

document.querySelector(".sell").addEventListener("click", ()=>{
        console.log("click")

  fetch('../session.php', {
    method: "GET"
  })
.then(response=>response.json()).then(feedback=>{
     if(feedback.status=="logged out"){
        window.location.href="login.html"
    }


   else  if(feedback.is_seller!="true"){
        window.location.href="seller_creation.html"
    }

    else(
      window.location.href="../sellers/index.html"
    )
})

})

    })
    .catch(error => console.error("Error loading navbar:", error));



    fetch('../session.php', {
    method: "GET"
})
.then(response=>response.json()).then(feedback=>{
    if(feedback.status=='logged in'){
        document.querySelector("#loggedin").classList.add("hide")
        document.querySelector("#prof").classList.add("active")
    }

})









});


