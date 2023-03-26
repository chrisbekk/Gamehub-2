const signInBtn = document.getElementById("sign-in-btn")
const form = document.querySelector(".form-sign-in")

const bars = document.querySelector(".bars-menu")
const navbarMenu = document.querySelector(".navbar-menu")
bars.addEventListener("click", ()=>{
    console.log("click")
    bars.classList.toggle("open")
    navbarMenu.classList.toggle("show-menu")
    
  })
signInBtn.addEventListener("click", signIn)

function signIn(event){
    event.preventDefault()
    const formData = new FormData(form);

    const user = Object.fromEntries(formData)
    const sessionUser = fromSessionStorage()

    if(user.username === sessionUser.username & user.password === sessionUser.password){
        console.log("Log in Success")
        window.location.href = "profile.html"
        sessionStorage.setItem("loggedIn", true)
    } else{
        console.log("Log in Failure")
        isLoggedIn = false
    }
    
}

function fromSessionStorage(){
    return JSON.parse(sessionStorage.getItem("user"))
    
}

function checkShoppingCart(){
    const shoppingCartStatus = sessionStorage.getItem("shoppingcart")

    if(shoppingCartStatus){
        document.querySelector(".navbar-item-shoppingcart").style.display = "inline"
    } else{
        document.querySelector(".navbar-item-shoppingcart").style.display = "none"
    }
}

checkShoppingCart()