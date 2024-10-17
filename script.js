const input = document.querySelector("input")
const lista = document.querySelector("ul")
const form = document.querySelector("form")



input.addEventListener("input", () => {
    // console.log(input.value)
})



function AddItem () {
    
    const NovoItem = document.createElement("li")
    NovoItem.classList.add("item")
    const NomeItem = document.createElement("span")


    

    NomeItem.innerHTML = `
                <span>${input.value}</span>
            
            <button>
                <img src="assets/Frame-3.svg" alt="">
            </button>
                
            `

        
        

    
    

    NovoItem.append(NomeItem)

    lista.append(NovoItem)

    
    



    

        
    

  


}


form.addEventListener("submit", (event) => {
    event.preventDefault()
    


    if (input.value !== "") {
        AddItem()
    } 
    
    else {
        alert("Campo inválido, tente novamente")
    }





})








