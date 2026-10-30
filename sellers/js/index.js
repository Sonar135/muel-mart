
fetch('../session.php', {
    method:"GET"
})
.then(response=>response.json()).then(feedback=>{
    let owner=feedback.email

    console.log(owner)
    if(feedback.status=="logged out"){
        window.location.href="../users/login.html"
    }


    else if(feedback.is_seller!="true"){
        window.location.href="../users/seller_creation.html"
    }

    fetch(`../get_products.php?owner=${owner}`, {
    method: 'GET'
})
.then(response=>response.json()).then(feedback=>{
    console.log(feedback.length)

    feedback.forEach(product => {
        console.log(product)
        document.querySelector(".product_grid").innerHTML+=`         <div class="product_card">
                <form id="delete" method="">
                    <button><i class="fa-solid fa-trash"></i></button>
                </form>
                <div class="prod_img">
                    <img src="../resources/${product.image}" alt="">
                </div>

                <div class="prod_name">
                    ${product.product_name}
                </div>

                <div class="prod_cat">
                    ${product.category}
                </div>

                <div class="edit">
                   Edit
                </div>
            </div>`
    });


})

})


