// Sample products data
const products = [{
        id: 1,
        name: 'Product 1',
        price: 100,
        image: 'product1.jpg'
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200,
        image: 'product2.jpg'
    },
    {
        id: 3,
        name: 'Product 3',
        price: 300,
        image: 'product3.jpg'
    }
];

// Function to create a product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    card.appendChild(img);

    const name = document.createElement('h3');
    name.textContent = product.name;
    card.appendChild(name);

    const price = document.createElement('p');
    price.textContent = `$${product.price}`;
    card.appendChild(price);

    return card;
}

// Function to load products
function loadProducts() {
    const productsSection = document.getElementById('products');
    products.forEach(product => {
        const card = createProductCard(product);
        productsSection.appendChild(card);
    });
}

// Call the loadProducts function when the page loads
window.onload = loadProducts;