function checkShoppingCart(){
    const shoppingCartStatus = sessionStorage.getItem("shoppingcart")

    if(shoppingCartStatus){
        document.querySelector(".navbar-item-shoppingcart").style.display = "inline"
    } else{
        document.querySelector(".navbar-item-shoppingcart").style.display = "none"
    }
}

checkShoppingCart()

const bars = document.querySelector(".bars-menu")
const navbarMenu = document.querySelector(".navbar-menu")
bars.addEventListener("click", ()=>{
    console.log("click")
    bars.classList.toggle("open")
    navbarMenu.classList.toggle("show-menu")
    
  })