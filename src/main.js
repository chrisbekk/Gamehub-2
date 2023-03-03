import fetchData from "./getData.js";

const newRelease = document.querySelector(".new-release")
const topSeller = document.querySelector(".top-seller")
const onSale = document.querySelector(".on-sale")

function createProductCard() {
  const productCard = document.createElement("div")
  productCard.classList.add("product-card")
  console.log(productCard)
  productCard.innerHTML = `
    <a href=>
        <img class="product-image">
        <p class="product-title"></p>
        <p class="product-price"></p>
    </a>
  `
  return productCard
}

async function renderProducts(){
    const products = await fetchData()
    console.log(products)
    products.forEach(product => {
        console.log(product.title)
        const productCard = createProductCard()
        productCard.querySelector("a").href = `product-details.html?product=${product.title}`
        productCard.querySelector("img").src = product.image
        productCard.querySelector(".product-title").textContent = product.title
        productCard.querySelector(".product-price").textContent = product.price + " " + product.currency

        switch(product.category){
            case "new release":
                console.log("test")
                newRelease.append(productCard)
                break;
            case "top seller":
                console.log("seller")
                topSeller.append(productCard)
                break;
            case "on sale":
                console.log("sale")
                onSale.append(productCard)
                break;
        }
        
    });
}

renderProducts()















