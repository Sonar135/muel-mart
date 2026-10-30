const url_parameter= new URLSearchParams(window.location.search);
const parameter=url_parameter.get('product')
// history.replaceState(null, "", "item.html")
let quantity=1;





fetch(`../get_products.php?product=${parameter}`, {
    method:'GET'
})
.then(response=>response.json()).then(feedback=>{
    console.log(feedback);
    feedback=feedback[0]

    document.querySelector(".image_cont").innerHTML=`<img src="../resources/${feedback.image}">`
    document.querySelector(".grid2").innerHTML=`
          <h1>${feedback.product_name}</h1>
                <h4 class="red">${feedback.business}</h4>
                <h4 class="">In Stock: ${feedback.quantity}</h4>

                   <h4 class="category">
                    ${feedback.category}
                </h4>


                <!-- <span>
                  
                </span> -->

                <h4 class="price"><i class="fa-solid fa-naira-sign"></i> ${feedback.price} </h4>
                <div class="quan">
                    <div class="minus"><i class="fa-solid fa-minus"></i></div>
                    <div class="quantity">1</div>
                    <div class="plus"><i class="fa-solid fa-plus"></i></div>
                </div>

                <div class="add_cont">
                <form enctype="multipart/form-data" id="cart_insert"> <input type="hidden" class="cart_value" name="cart_value"> <input type="hidden" name="product_id" value="${feedback.id}">   <button class="cart"> Add to Cart</button></form> 
                    <div class="favourite">
                      <i class="fa-solid fa-bookmark"></i>
                    </div>
                </div>
    `

    let cart_insert=document.querySelector("#cart_insert")

document.querySelector(".cart_value").value=quantity


    document.querySelector('.plus').addEventListener("click", ()=>{
         if(quantity==feedback.quantity){
        quantity=quantity;
        }

        else{
            quantity+=1
        }
        document.querySelector(".quantity").textContent=quantity
        document.querySelector(".cart_value").value=quantity
    })

    document.querySelector('.minus').addEventListener("click", ()=>{
        if(quantity<2){
        quantity=quantity;
        }

        else{
            quantity-=1
        }
       
        document.querySelector(".quantity").textContent=quantity
        document.querySelector(".cart_value").value=quantity
    })

    cart_insert.addEventListener("submit", (e)=>{
        e.preventDefault();

        const form_data= new FormData(cart_insert);

        fetch("php/cart_insert.php", {
            method:"POST",
            body: form_data
        })
        .then(response=>response.json()).then(feedback=>{

            if(feedback.status=="logged out"){
                console.log("please log in")
            }

            if(feedback.status=="in_cart"){

             
                error_notification("product already in cart")
               

            }

            if(feedback.status=="success"){
                success_notification("product added to cart")
                console.log("added to cart")
            }
        })
    })

    
})