const cart = []

let dataID = 0
let id = 0


export function addToCart(){
    let item = {
        id : id++,
        title: document.querySelector(".product-title").textContent, 
        price: document.querySelector(".product-price").textContent, 
        img: document.querySelector("img").src
    }
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
        document.querySelector(".shoppingcart-actions").innerHTML +=`
        <a href="checkout.html" class="button checkout-btn">Proceed to Checkout</a>`
        
        shoppingCart.forEach(item=>{
            
            const productCard = document.createElement("div")
            productCard.classList.add("product-card")
    
    
            productCard.innerHTML = `
                    <img class="product-image">
                    <p class="product-title"></p>
                    <span class="material-symbols-outlined" role="button" aria-label="Remove item" id="remove" data-index=${item.id} >delete</span>
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
    console.log(localStorageData.length)
    const grabElement = event.target.parentNode
    const productName = grabElement.querySelector(".product-title").textContent
    grabElement.remove()
    renderTotal()
    console.log(localStorageData)
    let currentIndex = event.target.dataset.index

    console.log(typeof(currentIndex))
    localStorageData.forEach(item =>{
        if(item.id == currentIndex){
           let index = localStorageData.indexOf(item)
           console.log(index)
           localStorageData.splice(index, 1)

        }
    })
    localStorage.setItem("cart", JSON.stringify(localStorageData))

    if(localStorageData.length == 0){
        console.log(localStorage.getItem("cart"))
        localStorage.removeItem("cart")
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

