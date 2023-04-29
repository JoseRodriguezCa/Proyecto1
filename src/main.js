const priceFilter = document.getElementById('price-filter');
const priceInput = document.getElementById('price-input');


const products = document.getElementById('products')
const maxPrice = document.getElementById('price-input')
const search = document.getElementById('seacher')
const sellers = document.getElementById("sellers")
const cleaner = document.getElementById('cleaner')
const cleanerSlider = document.getElementById('price-filter')


function updatePriceInput() {
  priceInput.value = priceFilter.value;
}

function updatePriceFilter() {
  priceFilter.value = priceInput.value;
}

priceFilter.addEventListener('input', updatePriceInput);
priceInput.addEventListener('input', updatePriceFilter);



const productList = [
    {
      name: 'PcCom Revolt 3060 Intel Core i7',
      price: 1289.95,
      stars: 5,
      reviews: 2,
      seller: 'pccomponentes',
      image: "https://thumb.pccomponentes.com/w-300-300/articles/1063/10636779/1426-pccom-revolt-3060-intel-core-i7-12700h-32gb-500gb-ssd-rtx-3060-156-foto.jpg"
    },

    {
        name: 'Lenovo IdeaPad 3 15ITL6 Intel Core i5',
        price: 429.00,
        stars: 4,
        reviews: 250,
        seller: 'lenovo',
        image: "https://thumb.pccomponentes.com/w-300-300/articles/1066/10663113/1517-lenovo-ideapad-3-15itl6-intel-core-i5-1155g7-8gb-512gb-ssd-156.jpg"
      },

      {
        name: 'Lenovo V15 IGL Intel Celeron N4020',
        price: 299.00,
        stars: 4,
        reviews: 364,
        seller: 'lenovo',
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/1063/10633201/1361-lenovo-v15-igl-intel-celeron-n4020-8gb-256-gb-ssd-156.jpg'
      },

      {
        name: 'HP 15S-FQ5013NS Intel Core i5',
        price: 569.00,
        stars: 5,
        reviews: 87,
        seller: 'hp',
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/1042/10428549/1392-hp-15s-fq5013ns-intel-core-i5-1235u-8gb-512gb-ssd-156.jpg'
      },

      {
        name: 'Lenovo IdeaPad 1 15ADA7 AMD Ryzen 3',
        price: 302.94,
        stars: 4,
        reviews: 8,
        seller: 'lenovo',
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/1067/10672816/1753-lenovo-ideapad-1-15ada7-amd-ryzen-3-3250u-8gb-256gb-ssd-156.jpg'
      },

      {
        name: 'ASUS VivoBook 15 F515JA-EJ4134 Intel Core i7',
        price: 549.00,
        stars: 5,
        reviews: 15,
        seller: 'asus',
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/1066/10665058/1694-asus-vivobook-15-f515ja-ej4134-intel-core-i7-1065g7-8gb-512gb-ssd-156.jpg'
      },

      {
        name: 'Medion Akoya E15415 Intel Core i5',
        price: 328.99,
        stars: 4.5,
        reviews: 138,
        seller: 'pccomponentes',
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/1040/10401732/1676-medion-akoya-e15415-intel-core-i5-10210u-8gb-256gb-ssd-156.jpg'
      },

      {
        name: 'HP Victus 16-e0101ns AMD Ryzen 7 5800H',
        price: 949,
        stars: 4.8,
        reviews: 125,
        seller: 'hp',
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/1039/10396660/1123-hp-victus-16-e0101ns-amd-ryzen-7-5800h-32gb-512gb-ssd-rtx-3060-161.jpg'
      },

      {
        name: 'MSI Katana GF66 12UC-082XES Intel Core i7',
        price: 1143.00,
        stars: 4,
        reviews: 153,
        seller: 'pccomponentes',
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/1001/10011004/1466-msi-katana-gf66-12ud-082xes-intel-core-i7-12700h-16gb-1tb-ssd-rtx3050-156-3b7c3f62-ac49-4155-bcd2-35f217618c49.jpg'
      },

      {
        name: 'ASUS ROG Strix G15 G513RC-HF094 AMD Ryzen 7',
        price: 1139.01,
        stars: 4.8,
        reviews: 22,
        seller: 'asus',
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/1066/10668663/1329-asus-rog-strix-g15-g513rc-hf094-amd-ryzen-7-6800h-16gb-512gb-ssd-rtx3050-156.jpg'
      },

];

function viewproducts(productList){
    products.innerHTML = ''
    productList.forEach(product=>{
        console.log(product.seller)
        const productCard = `
            <div class="carrusel-productos">
                <ul class="carrusel-fotos2">
                    <li id="producto1">
                        <a
                            href="https://www.pccomponentes.com/forgeon-sergeant-auriculares-gaming-71-pc-ps4-ps5-xbox-xbox-x-switch-negros">
                            <img
                            src="${product.image}">
                        <div class="envio-gratis"><span>Envio Gratis</span></div>
                        <div class="contenido-producto">
                            <h3>${product.name}</h3>
                            <div class="precio">
                                <span>${product.price}€</span>
                            </div>
                            <div class="valoracion-general">
                                <div class="valoracion">
                                    <div class="valoracion-positiva"></div>
                                </div>
                                <a class="reseñas" href="#"><span>(${product.reviews})</span></a>
                            </div>
                        </div>
                    </a>
                </li>`

        products.innerHTML += productCard
    });
}




sellers.addEventListener('change',()=>{
    let value = sellers.value
    const filterProducts = value ? productList.filter(product => product.seller == value):productList
    viewproducts(filterProducts)
})


search.addEventListener('click',()=>{
    let priceValue = maxPrice.value
    let sellersValue = sellers.value
    let filterProducts
    if (sellersValue) {
        filterProducts = productList.filter(product => product.price <= priceValue && product.seller == sellersValue);
    }
    else {
        filterProducts = productList.filter(product => product.price <= priceValue);
    }

    viewproducts(filterProducts)
})

cleaner.addEventListener('click',()=>{
    sellers.value = ''
    maxPrice.value = '1'
    cleanerSlider.value = '1'
    
    viewproducts(productList)
})

viewproducts(productList)