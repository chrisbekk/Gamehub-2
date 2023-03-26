import shoppingCart from "./addToCart.js"

function renderShoppingCart(){
    const sessionCart = JSON.parse(sessionStorage.getItem("shoppingcart"))
    if(sessionCart){
        const button = document.createElement("a")
        button.classList.add("button-delete")
        button.textContent = "To Checkout"
        button.href="checkout.html"
        document.querySelector(".shoppingcart-actions").append(button)

        renderProductCard(sessionCart)

        const totalElement = document.createElement("p")
        totalElement.classList.add("sum-total")
        totalElement.textContent = sessionCart.total
        document.querySelector(".shoppingcart-total").append(totalElement)
        
    } 
    return Promise.resolve(".delete-item")

}


function renderProductCard(shoppingCart){
    shoppingCart.items.forEach(item => {
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
        productCard.innerHTML = `
        <img>
        <p class="product-title"></p>
        <p class="product-quantity"></p>
        <span class="material-symbols-outlined delete-item">delete</span>
        <p class="product-price"></p>`

        productCard.querySelector("img").src = item.image
        productCard.querySelector(".product-title").textContent = item.title
        productCard.querySelector(".product-quantity").textContent = item.quantity
        productCard.querySelector(".product-price").textContent = item.price
        
        document.querySelector(".shoppingcart-item").append(productCard)
    });
}



renderShoppingCart()
    .then(element=>{
        document.querySelectorAll(element).forEach(function (btn){
            btn.addEventListener("click", (event)=>{
                const cartItemElement = event.target.parentElement
                const sessionCart = JSON.parse(sessionStorage.getItem("shoppingcart"))

                const cartElement = event.target.parentElement.querySelector(".product-title").textContent
                const cartItem = sessionCart.items.find(item => item.title === cartElement)
                shoppingCart.removeItem(cartItem, cartItemElement)
            })
        })
    })

    function checkShoppingCart(){
        const shoppingCartStatus = sessionStorage.getItem("shoppingcart")
    
        if(shoppingCartStatus){
            document.querySelector(".navbar-item-shoppingcart").style.display = "inline"
        } else{
            document.querySelector(".navbar-item-shoppingcart").style.display = "none"
        }
    }
    
    checkShoppingCart()