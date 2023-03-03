const url = "./data/products.json";

async function fetchData() {
  const response = await fetch(url);
  const json = await response.json();
  const products = json.product
  return products;
}

export default fetchData;