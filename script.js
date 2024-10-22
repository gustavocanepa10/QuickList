const input = document.querySelector("input")
const listaItem = document.querySelector("ul")
const form = document.querySelector("form")



form.addEventListener("submit", (event) => {
    event.preventDefault()



    if (input.value !== "") {
        manageItem()
    
    
    } else {
        alert("O campo está vazio")

    }


    

    


    

    

})








function manageItem () {

    // Adicionar item
    
    const NovoItem = document.createElement("li")

    NovoItem.classList.add("li")

    const NomeItem = document.createElement("span")

    NomeItem.textContent = input.value

    
   

   


                    
    NovoItem.append(NomeItem)

    listaItem.append(NovoItem)
    console.log(NovoItem)


    const removebutton = document.createElement("button")
    removebutton.innerHTML= `<img src="assets/icons/Frame-3.svg" alt="">`

    NovoItem.append(removebutton)


    input.value = ""

    


    // Remover item


   

    removebutton.addEventListener("click", (event) => {
        event.preventDefault()
        console.log("Clique!")


        NovoItem.remove(listaItem)






    })

    



   
    

}