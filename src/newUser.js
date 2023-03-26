const registerUserBtn = document.getElementById("new-user-btn")
const form = document.querySelector(".form-new-user")
const bars = document.querySelector(".bars-menu")
const navbarMenu = document.querySelector(".navbar-menu")
bars.addEventListener("click", ()=>{
    
    bars.classList.toggle("open")
    navbarMenu.classList.toggle("show-menu")
    
  })

registerUserBtn.addEventListener("click", addNewUser)

function addNewUser(event){
    event.preventDefault()
    const formData = new FormData(form);

    const user = Object.fromEntries(formData)
    
    validateForm(user)
    

}

function toSessionStorage(data){
    sessionStorage.setItem("user", JSON.stringify(data))
}

function validateForm(data){
    if(validateInput(data.username, 1, ".label-username") & validateInput(data.password, 8, ".label-password") & emailValidation(data, ".label-email")){
        
        toSessionStorage(data)
        window.location.href= "register.html"
    } else{
        console.log("error")
    }

}

function emailValidation(data, el){
    const regEx = /\S+@\S+\.\S+/;
    const validEmail = regEx.test(data.email);
    if(validEmail){
        document.querySelector(el).style.visibility = "hidden"
        return true
    } else{
        document.querySelector(el).style.visibility = "visible"
    }
}

function validateInput(data, req, el){
    if(data.trim().length > req){
        document.querySelector(el).style.visibility = "hidden"
        return true
    }
    else{
        
        document.querySelector(el).style.visibility = "visible"
    }
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