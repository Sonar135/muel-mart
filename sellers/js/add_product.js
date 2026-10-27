let image_input=document.querySelector("#select")

let form=document.querySelector("form")

image_input.addEventListener("change", ()=>{
    const file=image_input.files[0];
   
})


document.querySelectorAll(".category_seed").forEach(category=>{
    category.addEventListener("click", ()=>{
        let selected=document.querySelector(".selected")

        if(selected){
            selected.classList.remove("selected")
        }
        category.classList.add("selected")
        document.querySelector("#category").value=category.textContent.trim("")
       
    })
})



document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault()

    const form_data= new FormData(form)

    
    fetch("./php/add_product.php", {
        method:'POST',
        body: form_data
    })
    .then(response=>response.json()).then(feedback=>{
        if(feedback.status=="success"){
            console.log("product added")
        }

        else{
            console.log("product not added")
        }
    })


})