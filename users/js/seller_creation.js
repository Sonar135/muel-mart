let id_seeds=document.querySelectorAll(".id_seed")

let form=document.querySelector("form")

id_seeds.forEach(seed=>{
    seed.addEventListener("click", ()=>{
        let selected=document.querySelector(".selected")

        if(selected){
            selected.classList.remove("selected")
        }
        
        seed.classList.add("selected")
        document.querySelector("#id").value=seed.textContent.trim("")
    })
})

let image_input=document.querySelector("#select")

image_input.addEventListener("change", ()=>{
    const file= image_input.files[0]
     document.querySelector("#select_image").textContent=file.name
    document.querySelector(".image").value=file.name.trim("")
})

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const form_data= new FormData(form)

    fetch("./php/seller_creation.php", {
        method:"POST",
        data: form_data
    })
    .then(response=>response.json()).then(feedback=>{
        
    })
})