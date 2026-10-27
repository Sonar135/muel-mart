
document.addEventListener("DOMContentLoaded", ()=>{
    let pending_orders=document.querySelectorAll(".sec2 .order_card")

    pending_orders.forEach((order)=>{
        order.addEventListener("click", ()=>{
            
        document.querySelector(".action_overlay").classList.add("active")
    })
    })


    document.querySelector(".close_btn").addEventListener("click", ()=>{
        document.querySelector(".action_overlay").classList.remove("active")

    })

    document.querySelector(".deny_btn").addEventListener("click", ()=>{
        document.querySelector(".deny_btn span").classList.add("inactive");
        document.querySelector(".deny_btn i").classList.add("active");
    })

   
  
})