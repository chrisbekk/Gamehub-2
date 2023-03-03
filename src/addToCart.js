const cart = []

let dataID = 0


export function addToCart(){
    let item = {title: document.querySelector(".product-title").textContent, price: document.querySelector(".product-price").textContent, img: document.querySelector("img").src}
    cart.push(item)
    console.log(cart)

    if(localStorage.getItem("cart") === null){
        localStorage.setItem("cart", JSON.stringify(cart))
    } else{
        const localStorageData = JSON.parse(localStorage.getItem("cart"))
        localStorageData.push(item)
        localStorage.setItem("cart", JSON.stringify(localStorageData))
    }
    
    
}

export function renderShoppingCart(){
    const shoppingCart = JSON.parse(localStorage.getItem("cart"))
    console.log(shoppingCart)
    const shoppingCartItem = document.querySelector(".shoppingcart-item")
    if(shoppingCart.length === 0){
        shoppingCartItem.innerHTML = " "
        const checkOutBtn = document.querySelector(".checkout-btn")
        checkOutBtn.style.display = "none"
    } else{

        shoppingCart.forEach(item=>{
            
            const productCard = document.createElement("div")
            productCard.classList.add("product-card")
    
    
            productCard.innerHTML = `
                    <img class="product-image">
                    <p class="product-title"></p>
                    <span class="material-symbols-outlined" role="button" aria-label="Remove item" id="remove" data-index=${dataID ++} >delete</span>
                    <p class="product-price"></p>
                   
            `
            productCard.querySelector("img").src = item.img
            productCard.querySelector(".product-title").textContent = item.title
            productCard.querySelector(".product-price").textContent = item.price
            console.log(item.img)
            
            shoppingCartItem.append(productCard)
            
            const button = document.querySelectorAll("#remove")
            button.forEach(button =>{button.addEventListener("click", removeCartItem)
            })
        })
    }
    const totalEl = document.createElement("p")
    totalEl.classList.add("total")
    document.querySelector(".shoppingcart-total").append(totalEl)
    renderTotal()

    

}

function removeCartItem(event){
    const localStorageData = JSON.parse(localStorage.getItem("cart"))
    console.log(localStorageData)
    const grabElement = event.target.parentNode
    console.log(grabElement)
    const productName = grabElement.querySelector(".product-title").textContent
    const currentIndex = event.target.dataset.index
    localStorageData.splice(currentIndex, 1)
    localStorage.setItem("cart", JSON.stringify(localStorageData))
    grabElement.remove()
    renderTotal()
    console.log(localStorageData)
    if(localStorageData.length === 0){
        const checkOutBtn = document.querySelector(".checkout-btn")
        checkOutBtn.style.display = "none"
    }

}

function calculateTotal(){
    let sum = 0
    const cartElements = document.querySelector(".shoppingcart-item")
    console.log(cartElements)
    let total = cartElements.querySelectorAll(".product-price")
    total.forEach(item =>{
        console.log(item.textContent)
        sum += parseFloat(item.textContent)
    })
    return sum

}

function renderTotal(){
    const totalEl = document.querySelector(".total")
    totalEl.textContent = calculateTotal()
}

