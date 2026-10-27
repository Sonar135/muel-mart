let cards= document.querySelectorAll(".product_card")

cards.forEach((card)=>{
    card.addEventListener("click", ()=>{
        window.location.href="item.html"
    })
})