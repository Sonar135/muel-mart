let image_input=document.querySelector("#select")

let form=document.querySelector(".add_product")

image_input.addEventListener("change", ()=>{
    const file=image_input.files[0];
   
    document.querySelector("#select_image").textContent=file.name
    document.querySelector(".image").value=file.name.trim("")
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



form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const form_data= new FormData(form)

    
    fetch("./php/add_product.php", {
        method:'POST',
        body: form_data
    })
    .then(response=>response.json()).then(feedback=>{
        if(feedback.status=="success"){
            success_notification("product added")
            document.querySelector("#select_image").textContent=""
    document.querySelector(".image").value=""

           let selected=document.querySelector(".selected")

        if(selected){
            selected.classList.remove("selected")
        }

        document.querySelector("#category").value=""
        }

        else{
            error_notification("please fill all fields")
        }
    })


})