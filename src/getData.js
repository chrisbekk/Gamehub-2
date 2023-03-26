const url = "./data/products.json";

async function fetchData() {
  const response = await fetch(url);
  const json = await response.json();
  const products = json.product
  return products;
}

export default fetchData;

function checkShoppingCart(){
  const shoppingCartStatus = sessionStorage.getItem("shoppingcart")

  if(shoppingCartStatus){
      document.querySelector(".navbar-item-shoppingcart").style.display = "inline"
  } else{
      document.querySelector(".navbar-item-shoppingcart").style.display = "none"
  }
}

checkShoppingCart()