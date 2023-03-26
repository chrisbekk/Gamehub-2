import fetchData from "./getData.js";

const newRelease = document.querySelector(".new-release")
const topSeller = document.querySelector(".top-seller")
const onSale = document.querySelector(".on-sale")
const bars = document.querySelector(".bars-menu")
const navbarMenu = document.querySelector(".navbar-menu")
bars.addEventListener("click", ()=>{
    
    bars.classList.toggle("open")
    navbarMenu.classList.toggle("show-menu")
    
  })
function createProductCard() {
  const productCard = document.createElement("div")
  productCard.classList.add("product-card")
  
  productCard.innerHTML = `
    <a href=>
        <img class="product-image" alt="Cover image of product"> 
        <p class="product-title"></p>
        <p class="product-price"></p>
    </a>
  `
  return productCard
}

async function renderProducts(){
    const products = await fetchData()
    
    products.forEach(product => {
        
        const productCard = createProductCard()
        productCard.querySelector("a").href = `product-details.html?product=${product.title}`
        productCard.querySelector("img").src = product.image
        productCard.querySelector(".product-title").textContent = product.title
        productCard.querySelector(".product-price").textContent = product.price + " " + product.currency

        switch(product.category){
            case "new release":
                
                newRelease.append(productCard)
                break;
            case "top seller":
                
                topSeller.append(productCard)
                break;
            case "on sale":
                
                onSale.append(productCard)
                break;
        }
        
    });
}

renderProducts()

function checkShoppingCart(){
    const shoppingCartStatus = sessionStorage.getItem("shoppingcart")

    if(shoppingCartStatus){
        document.querySelector(".navbar-item-shoppingcart").style.display = "inline"
    } else{
        document.querySelector(".navbar-item-shoppingcart").style.display = "none"
    }
}

checkShoppingCart()














