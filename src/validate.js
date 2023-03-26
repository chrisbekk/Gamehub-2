const fname = document.querySelector(".fname")
const lname = document.querySelector(".lname")
const address = document.querySelector(".address")
const email = document.querySelector(".email")
const phone = document.querySelector(".phone")
const button = document.querySelector(".button")

const bars = document.querySelector(".bars-menu")
const navbarMenu = document.querySelector(".navbar-menu")
bars.addEventListener("click", ()=>{
    bars.classList.toggle("open")
    navbarMenu.classList.toggle("show-menu")
    
  })

const firstName = {
    required: 0,
    isValid: false,
}

const lastName = {
    required: 0,
    isValid: false,
}

const addressObj = {
    required: 15,
    isValid: false,
}

const phoneObj = {
    required: 7,
    isValid: false,
}

const emailObj = {
    required: 7,
    isValid: false,
}

fname.addEventListener("keyup", event =>{
    if(event.target.value.trim().length > firstName.required){
        document.querySelector(".label-fname").style.color = "#d9d9d9"
        firstName.isValid = true
    } else{
        document.querySelector(".label-fname").style.color = "tomato"
        return firstName.isValid
    }
})

lname.addEventListener("keyup", event =>{
    if(event.target.value.trim().length > lastName.required){
        document.querySelector(".label-lname").style.color = "#d9d9d9"
        lastName.isValid = true
       
    } else{
        document.querySelector(".label-lname").style.color = "tomato"
        return lastName.isValid
    }
})

address.addEventListener("keyup", event =>{
    if(event.target.value.trim().length > addressObj.required){
        document.querySelector(".label-address").style.color = "#d9d9d9"
        addressObj.isValid = true
        
    } else{
        document.querySelector(".label-address").style.color = "tomato"
        return addressObj.isValid
    }
})

email.addEventListener("keyup", event =>{
    function emailValidation(email){
        const regEx = /\S+@\S+\.\S+/;
        const validEmail = regEx.test(email);
        return validEmail; 
    }
    if(emailValidation(event.target.value)){
        document.querySelector(".label-email").style.color = "#d9d9d9"
        emailObj.isValid = true
        
        
    } else{
        document.querySelector(".label-email").style.color = "tomato"
        return emailObj.isValid
    }
    
    
})

phone.addEventListener("keyup", event =>{
    if(event.target.value.trim().length > phoneObj.required){
        document.querySelector(".label-phone").style.color = "#d9d9d9"
        phoneObj.isValid = true
        
    } else{
        document.querySelector(".label-phone").style.color = "tomato"
        return phoneObj.isValid
    }
})




button.addEventListener("click", (event)=>{
    event.preventDefault()
    if(firstName.isValid & lastName.isValid & addressObj.isValid & emailObj.isValid & phoneObj.isValid){
        
        location.reload()
        window.location.href = "checkoutsuccess.html"
        sessionStorage.removeItem("shoppingcart")
        document.querySelector(".navbar-item-shoppingcart").style.display = "none"
        
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