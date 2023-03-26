const icon = document.getElementById("sell-icon")
const link = document.getElementById("sell-link")

const bars = document.querySelector(".bars-menu")
const navbarMenu = document.querySelector(".navbar-menu")
bars.addEventListener("click", ()=>{
    
    bars.classList.toggle("open")
    navbarMenu.classList.toggle("show-menu")
    
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

const callToActionButton = document.querySelectorAll(".hero-button")

callToActionButton.forEach((button)=>{
    button.addEventListener("click",()=> window.location.href = "products.html" )
})
