    
    
    fetch(`../get_products.php`, {
    method: 'GET'
})
.then(response=>response.json()).then(feedback=>{
    console.log(feedback)

    feedback.forEach(product => {
        const card=document.createElement("div");
        card.classList.add("product_card")
        card.innerHTML=`        
            
                <div class="prod-inner">
                    <div class="img_container">
                            <div class="image_cont">
                                <img src="../resources/${product.image}" alt="" class="image">
                            </div>
                    </div>

                    <div class="content1">
                        <div class="content2">
                            <div class="data name">${product.product_name}</div>
                            <div class="data seller">${product.business} </div>
                            <div class="price"><i class="fa-solid fa-naira-sign"></i>${product.price}</div>
                            <div class="button">View Product</div>
                        </div>
                    </div>
                </div>
           `

               document.querySelector(".products").appendChild(card)

    card.addEventListener("click", ()=>{
        window.location.href=`item.html?product=${product.id}`
    })



    });
           



})



