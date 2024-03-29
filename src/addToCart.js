const shoppingCart = {
    items: [],
    total: 0,
 

    addToCart: function(shopItem){
        const sessionCart = JSON.parse(sessionStorage.getItem("shoppingcart"))
        //Get session storage and check if the cart is empty or not
        if(sessionCart === null){

            this.items.push(shopItem)
            this.total += shopItem.price
            shopItem.quantity = 1

            
            sessionStorage.setItem("shoppingcart", JSON.stringify(this))
            document.querySelector(".navbar-item-shoppingcart").style.display = "inline"
            

        } else if(sessionCart !== null){

            const sessionCart = JSON.parse(sessionStorage.getItem("shoppingcart"))

            const cartItem = sessionCart.items.find(item => item.title === shopItem.title)
            if( cartItem !== undefined ){

                cartItem.quantity += 1
                console.log(cartItem)
                sessionCart.total += shopItem.price

                sessionStorage.setItem("shoppingcart", JSON.stringify(sessionCart))

            } else{
                const sessionCart = JSON.parse(sessionStorage.getItem("shoppingcart"))

                sessionCart.items.push(shopItem)
                sessionCart.total += shopItem.price

                shopItem.quantity = 1
                sessionStorage.setItem("shoppingcart", JSON.stringify(sessionCart))
            }
        }
    },

    removeItem: function(deleteItem, cartItemElement){
        
        const sessionCart = JSON.parse(sessionStorage.getItem("shoppingcart"))
        const cartItem = sessionCart.items.find(item => item.id === deleteItem.id)
        

        if(cartItem.quantity > 1){
            cartItem.quantity -= 1
            sessionCart.total -= cartItem.price
            
            cartItemElement.querySelector(".product-quantity").textContent = cartItem.quantity
            document.querySelector(".sum-total").textContent = sessionCart.total
            sessionStorage.setItem("shoppingcart", JSON.stringify(sessionCart))
        } else if (cartItem.quantity === 1){
           const currentIndex = sessionCart.items.indexOf(cartItem)
           sessionCart.items.splice(currentIndex, 1)
           cartItemElement.remove()
           sessionCart.total -= cartItem.price
           document.querySelector(".sum-total").textContent = sessionCart.total

           if(sessionCart.items.length === 0){
        
            document.querySelector(".navbar-item-shoppingcart").style.display = "none"
            sessionStorage.removeItem("shoppingcart")
            document.querySelector(".button-delete").style.display = "none"
            
            return
           }

           sessionStorage.setItem("shoppingcart", JSON.stringify(sessionCart))

           
           

        }



    }


}

export default shoppingCart


function checkShoppingCart(){
    const shoppingCartStatus = sessionStorage.getItem("shoppingcart")

    if(shoppingCartStatus){
        
    } else{
        
    }
}

checkShoppingCart()


const bars = document.querySelector(".bars-menu")
const navbarMenu = document.querySelector(".navbar-menu")
bars.addEventListener("click", ()=>{
    
    bars.classList.toggle("open")
    navbarMenu.classList.toggle("show-menu")
    
  })