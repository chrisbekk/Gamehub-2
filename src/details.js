import fetchData from "./getData.js";
import { addToCart } from "./addToCart.js";

const parentNode = document.querySelector(".wrapper")
function getQueryString(){
    const queryString = document.location.search
    const searchParam = new URLSearchParams(queryString)
    return searchParam.get("product")
}

function createProductDetails() {
    const productDetails = document.createElement("section")
    productDetails.classList.add("product-details")
    console.log(productDetails)
    productDetails.innerHTML = `
        <div class="product-image">
            <img>
        </div>
        <p class="product-title"></p>
        <p class="product-price"></p>
        <button class="add-to-cart">Add to Cart</button>
        <a class="add-to-cart" href="shoppingcart.html">Shopping Cart</a>
        
        <p class="product-description"></p>
        <a class="add-to-cart" id="to-store" href="products.html">To Store</a>
    `

    return productDetails
  }



async function renderProductDetails(){
    const details = await fetchData()
    const product = details.find(product => product.title === getQueryString())
    console.log(product)
    const productDetails = createProductDetails()
    productDetails.querySelector("img").src = product.image
    productDetails.querySelector(".product-title").textContent = product.title
    productDetails.querySelector(".product-price").textContent = `${product.price} ${product.currency}`
    productDetails.querySelector(".product-description").textContent = product.description

    parentNode.append(productDetails)

    return Promise.resolve("button")
    

}

renderProductDetails()
    .then(element=>{
        document.querySelector(element).addEventListener("click", addToCart)
    })

