import fetchData from "./getData.js";
import shoppingCart from "./addToCart.js";

const parentNode = document.querySelector(".wrapper")
function getQueryString(){
    const queryString = document.location.search
    const searchParam = new URLSearchParams(queryString)
    return searchParam.get("product")
}

const bars = document.querySelector(".bars-menu")
const navbarMenu = document.querySelector(".navbar-menu")
bars.addEventListener("click", ()=>{
    console.log("click")
    bars.classList.toggle("open")
    navbarMenu.classList.toggle("show-menu")
    
  })

function createProductDetails() {
    const productDetails = document.createElement("section")
    productDetails.classList.add("product-details")
    
    productDetails.innerHTML = `
        <div class="product-image">
            <img alt="Cover image of product">
        </div>
        <p class="product-title"></p>
        <p class="product-price" id="details-price"></p>
        <button class="add-to-cart">Add to Cart</button>
        <a class="add-to-cart" href="shoppingcart.html">Shopping Cart</a>
        
        <p class="product-description"></p>
        <a class="button" id="to-store" href="products.html">To Store</a>
    `

    return productDetails
  }



async function renderProductDetails(){
    const details = await fetchData()
    const product = details.find(product => product.title === getQueryString())

    const productDetails = createProductDetails()
    productDetails.querySelector("img").src = product.image
    productDetails.querySelector(".product-title").textContent = product.title
    productDetails.querySelector(".product-title").dataset.id = product.id
    productDetails.querySelector(".product-price").textContent = `${product.price} ${product.currency}`
    productDetails.querySelector(".product-description").textContent = product.description

    parentNode.append(productDetails)
    document.querySelector("button").addEventListener("click", (event)=>{
        shoppingCart.addToCart(product)
    })
    
    

}

renderProductDetails()

function checkShoppingCart(){
    const shoppingCartStatus = sessionStorage.getItem("shoppingcart")

    if(shoppingCartStatus){
        document.querySelector(".navbar-item-shoppingcart").style.display = "inline"
    } else{
        document.querySelector(".navbar-item-shoppingcart").style.display = "none"
    }
}

checkShoppingCart()