const input = document.querySelector("input")
const listaItem = document.querySelector("ul")
const form = document.querySelector("form")



form.addEventListener("submit", (event) => {
    event.preventDefault()


    const newItem = {
        id: new Date().getTime(),
        item_name: item.value,
    }

     console.log(newItem)
     itemAdd(newItem)




    

    function itemAdd (newItem) {

        try {


        // Criando o item
        const listItem = document.createElement("li")
        listItem.classList.add("li")
        


        // Criando o conteúdo do item
        const itemContent = document.createElement("span")
        itemContent.textContent = newItem.item_name

        // Criando a data que foi o item foi adiciona na lista
        
        


        // Criando o removebutton
        const removebutton = document.createElement("button")
        removebutton.innerHTML = `<img src="assets/icons/Frame-3.svg" alt="">`


        // Adicionando os elementos no item e na lista
        listItem.append(itemContent)
        listItem.append(removebutton)
        listaItem.append(listItem)



        removebutton.addEventListener("click", (event) => {
            event.preventDefault()
            alert("Item removido com sucesso!")
            listItem.remove()
            
        })
        
        
    
    
        } catch (error) {
            alert("Não foi possivel executar a ação")
            
        }

        





    }


    



    


    

    


    

    

})













    


