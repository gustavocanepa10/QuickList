const input = document.querySelector("input")
const listaItem = document.querySelector("ul")
const form = document.querySelector("form")


form.addEventListener("submit", (event) => {
    event.preventDefault()



    if (input.value !== "") {
        adicionarItem()
    
    
    } else {
        alert("O campo está vazio")

    }


    

    


    

    

})








function adicionarItem () {

    const NovoItem = document.createElement("li")

    NovoItem.classList.add("li")

    const NomeItem = document.createElement("span")

    NomeItem.innerHTML =`<span>${input.value}</span>

    <button type="button">
        <img src="assets/icons/Frame-3.svg" alt="">
    </button>
   `
                    
                    

   

    

    
    NovoItem.append(NomeItem)

    listaItem.append(NovoItem)
    console.log(NovoItem)

   
    

}