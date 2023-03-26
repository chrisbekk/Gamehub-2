const icon = document.getElementById("sell-icon")
const link = document.getElementById("sell-link")

const bars = document.querySelector(".bars-menu")
const navbarMenu = document.querySelector(".navbar-menu")
bars.addEventListener("click", ()=>{
    console.log("click")
    bars.classList.toggle("open")
    navbarMenu.classList.toggle("show-menu")
    
  })


    icon.addEventListener("click", (event)=>{
        console.log(event.target)
        const check = sessionStorage.getItem("loggedIn")
        if(check){
            document.getElementById("sell-icon").href = "profile.html"
            
        } else{
            document.getElementById("sell-icon").href = "register.html"
            
        }
    })

    link.addEventListener("click", (event)=>{
        console.log(event.target)
        const check = sessionStorage.getItem("loggedIn")
        if(check){
            
            document.getElementById("sell-link").href = "profile.html"
        } else{
            
            document.getElementById("sell-link").href = "register.html"  
        }
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
