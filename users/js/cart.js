
let sum_total=0
let checkout=0
const delivery=2500

fetch("php/get_cart.php", {
    method:"GET"
})
.then(response=>response.json()).then(feedback=>{
    // console.log(feedback)

    feedback.forEach(product => {
        let total_price=parseInt(product.price*product.quantity)
        
        sum_total+=total_price
        checkout=sum_total+delivery
        console.log(sum_total)
      
      let tray=  document.createElement("div")
      tray.classList.add("cart_cont")
        


      tray.innerHTML=`
             <div class="item">
                        <div class="img_cont">
                            <img src="../resources/${product.image}" alt="">
                        </div>

                     <div class="item_desc">
                        <h4>${product.product}</h4>
                        <h4 class="cat">${product.business}</h4>
                     </div>

                     <div class="price">
                        <h4><i class="fa-solid fa-naira-sign"></i>${total_price}</h4>
                     </div>
                    </div>

                    <div class="actions">
                        <div class="remove">
                            <i class="fa-solid fa-trash"></i> REMOVE
                        </div>

                        <div class="quan">
                            <div class="minus"><i class="fa-solid fa-minus"></i></div>
                            <div class="quantity">${product.quantity}</div>
                            <div class="plus"><i class="fa-solid fa-plus"></i></div>


                        </div>
                    </div>
      `

      document.querySelector(".cart").appendChild(tray);
      document.querySelector("#subtotal").textContent=sum_total
      document.querySelector("#delivery").textContent=delivery
      document.querySelector("#checkout").innerHTML=`CHECKOUT: <i class="fa-solid fa-naira-sign"><span>${checkout}</span></i>`
    });
})