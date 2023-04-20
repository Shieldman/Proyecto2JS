const products = [
  {
    name: "HP Essentials 255 G8 AMD",
    price: 289,
    stars: 4,
    reviews: 250,
    seller: "PcComponentes",
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg",
  },
  {
    name: 'ASUS ExpertBook B1 B1402CBA-EB0821X Intel Core i7-1255U/16GB/512GB SSD/14"',
    price: 921.77,
    stars: 3,
    reviews: 1296,
    seller: "Megatecnología",
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1070/10706375/1276-asus-expertbook-b1-b1402cba-eb0821x-intel-core-i7-1255u-16gb-512gb-ssd-14.jpg",
  },
  {
    name: 'Lenovo IdeaPad Gaming 3 15IAH7 Intel Core i7-12700H/16GB/512GB SSD/RTX3060/15.6"',
    price: 999,
    stars: 5,
    reviews: 74,
    seller: "PcComponentes",
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1062/10622699/2788-lenovo-ideapad-gaming-3-15iah7-intel-core-i7-12700h-16gb-512gb-ssd-rtx3060-156-comprar.jpg",
  },
  {
    name: 'Samsung Galaxy Book3 360 Intel Evo Core i7-1360P/16GB/512GB SSD/15.6" Táctil',
    price: 1689,
    stars: 3,
    reviews: 0,
    seller: "PcComponentes",
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1066/10663863/1519-samsung-galaxy-book3-360-intel-evo-core-i7-1360p-16gb-512gb-ssd-156-tactil.jpg",
  },
  {
    name: 'ASUS VivoBook Flip TP470EA-EC402W Intel Core i5-1135G7/8GB/512GB SSD/14" Táctil',
    price: 778.4,
    stars: 4,
    reviews: 28,
    seller: "OCASIONIA",
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1027/10273328/1319-asus-vivobook-flip-tp470ea-ec402w-intel-core-i5-1135g7-8gb-512gb-ssd-14-tactil.jpg",
  },
  {
    name: "ASUS M515DA-R53BHDSS2 AMD Ryzen 5 3500U/8GB/256GB SSD/15.6",
    price: 547.82,
    stars: 5,
    reviews: 1,
    seller: "Oldplay",
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1067/10670260/1476-asus-m515da-r53bhdss2-amd-ryzen-5-3500u-8gb-256gb-ssd-156-pt.jpg",
  },
  {
    name: 'HP 250 G8 Intel Core i5-1135G7/16GB/1TB SSD/15.6"',
    price: 646.68,
    stars: 5,
    reviews: 19,
    seller: "Punto by ZE",
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1065/10657752/1388-hp-250-g8-intel-core-i5-1135g7-16gb-1tb-ssd-156.jpg",
  },
  {
    name: 'ASUS Vivobook 14 F1400EA-EK1543W Intel Core i3-1115G4/8GB/256GB SSD/14"',
    price: 453.99,
    stars: 4,
    reviews: 44,
    seller: "ELECTRONOW",
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1037/10370461/1398-asus-vivobook-14-f1400ea-ek1543w-intel-core-i3-1115g4-8gb-256gb-ssd-14-d1393580-88f8-4e44-a77a-9ec87ef183e3.jpg",
  },
  {
    name: 'PcCom Revolt 3060 Intel Core i7-12700H/32GB/500GB SSD/RTX 3060/15.6"',
    price: 1289.91,
    stars: 5,
    reviews: 2,
    seller: "PcComponentes",
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1063/10636779/1426-pccom-revolt-3060-intel-core-i7-12700h-32gb-500gb-ssd-rtx-3060-156-foto.jpg",
  },
  {
    name: 'ASUS Zenbook 14 OLED UX3402ZA-KM020W Intel Evo Core i5-1240P/16GB/512GB SSD/14"',
    price: 1016.82,
    stars: 4,
    reviews: 13,
    seller: "Locurainformatica",
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1062/10622694/1735-asus-zenbook-14-oled-ux3402za-km020w-intel-core-i5-1240p-16gb-512gb-ssd-14.jpg",
  },
];

var shownProducts = [];

const getProductTemplate = (name, price, stars, reviews, seller, image) => {
  return ` <article class="product">
                <img class="product-image" src="${image}">
                <div class="product-title">${name}</div>
                <div class="product-price">${price}€</div>
                <div class="product-rating">
                    <div class="product-rating-stars" >La valoración es ${stars} sobre 5</div>
                    <div class="product-reviews-number">(${reviews})</div>
                </div>
                <div class="product-seller">Vendido por <b>${seller}</b></div>
            </article>`;
};

const setProductList = (products) => {
  const productList = document.querySelector("#products");
  for (let i = 0; i < products.length; i++) {
    shownProducts.push(products[i]);
    productList.innerHTML += getProductTemplate(
      products[i].name,
      products[i].price,
      products[i].stars,
      products[i].reviews,
      products[i].seller,
      products[i].image
    );
  }
};

const getSelectFilterOption = (seller) => {
  return `<option class="sellerButton" value="${seller.toLowerCase()}">${seller}</option>`;
};

const getFiltersBasis = () => {
  const filterList = document.querySelector("#filter");
  filterList.innerHTML += `<select name="product-filter" id="product-filter"></select>`;

  filterList.innerHTML += `<div id="price-filter">
            <input id="price-filter-input" type="number" placeholder="Precio máximo">
            <button id="price-filter-button">Buscar</button>
        </div>`;

  filterList.innerHTML += `<button id="clear-filter">Limpiar filtros</button>`;
};

const setSellersList = (products) => {
  const sellersList = document.querySelector("#product-filter");
  const uniquenessList = [];
  for (let i = 0; i < products.length; i++) {
    if (uniquenessList.indexOf(products[i].seller)) {
      uniquenessList.push(products[i].seller);
      sellersList.innerHTML += getSelectFilterOption(products[i].seller);
    }
  }
};

const applySelectFilterToProducts = (event) => {
  const selectedCategory = event.target.value;
  const productList = document.querySelector("#products");
  productList.innerHTML = "";
  const oldProductList = shownProducts;
  shownProducts = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].seller.toLowerCase() == selectedCategory) {
      shownProducts.push(products[i])
      productList.innerHTML += getProductTemplate(
        products[i].name,
        products[i].price,
        products[i].stars,
        products[i].reviews,
        products[i].seller,
        products[i].image
      );
    }
  }
};

const applyCleanFilters = (event) => {
  const productList = document.querySelector("#products");
  productList.innerHTML = "";
  setProductList(products);
  
};

const applyPriceFilter = (event) => {
  const priceInput = document.querySelector("#price-filter-input");
  const productList = document.querySelector("#products");
  const oldProductList = shownProducts;
  shownProducts = [];
  productList.innerHTML = "";
  for (let i = 0; i < oldProductList.length; i++) {
      if(oldProductList[i].price<=priceInput.value){
      productList.innerHTML += getProductTemplate(
        oldProductList[i].name,
        oldProductList[i].price,
        oldProductList[i].stars,
        oldProductList[i].reviews,
        oldProductList[i].seller, 
        oldProductList[i].image
      );

        shownProducts.push(oldProductList[i]);
        console.log(shownProducts);
  };
  }
};

const createSelectFilterListener = () => {
  const selectElement = document.querySelector("#product-filter");
  selectElement.addEventListener("change", applySelectFilterToProducts);
};

const createCleanFilterListener = () => {
  const clickButton = document.querySelector("#clear-filter");
  clickButton.addEventListener("click", applyCleanFilters);
};

const createPriceButtonListener = () => {
  const clickButtton = document.querySelector("#price-filter-button");
  clickButtton.addEventListener("click",applyPriceFilter);
};

setProductList(products);
getFiltersBasis();
setSellersList(products);
createSelectFilterListener();
createCleanFilterListener();
createPriceButtonListener();
