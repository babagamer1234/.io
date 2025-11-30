// Generate 100 clothes + 100 shoes
const clothingTypes = ["T-Shirt", "Jeans", "Hoodie", "Jacket", "Shirt", "Sweater", "Skirt", "Dress"];
const shoeTypes = ["Sneakers", "Boots", "Sandals", "Running Shoes", "Loafers", "Flip-Flops"];

let products = [];
let cart = [];

// Generate products
for (let i = 1; i <= 100; i++) {
    const type = clothingTypes[Math.floor(Math.random() * clothingTypes.length)];
    const price = Math.floor(Math.random() * 50 + 10);
    const img = `https://source.unsplash.com/200x200/?${type.replace(" ", "")},clothes&sig=${i}`;
    products.push({id: `c${i}`, name: `${type} #${i}`, price, img, category: 'clothes'});
}
for (let i = 1; i <= 100; i++) {
    const type = shoeTypes[Math.floor(Math.random() * shoeTypes.length)];
    const price = Math.floor(Math.random() * 70 + 20);
    const img = `https://source.unsplash.com/200x200/?${type.replace(" ", "")},shoes&sig=${i}`;
    products.push({id: `s${i}`, name: `${type} #${i}`, price, img, category: 'shoes'});
}

// Display products
function displayProducts(list) {
    const container = document.getElementById("productsContainer");
    container.innerHTML = "";
    list.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <img src="${product.img}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart('${product.id}')">Add to Cart</button>
        `;
        container.appendChild(div);
    });
}

displayProducts(products);

// Filter
function filterCategory(cat) {
    if (cat === 'all') displayProducts(products);
    else displayProducts(products.filter(p => p.category === cat));
}

// Search
document.getElementById("searchBar").addEventListener("input", e => {
    const query = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    displayProducts(filtered);
});

// Cart
function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    updateCart();
}

// Update cart modal
function updateCart() {
    document.getElementById("cartCount").innerText = cart.length;
    const container = document.getElementById("cartItems");
    container.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const div = document.createElement("div");
        div.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button>`;
        container.appendChild(div);
    });
    document.getElementById("cartTotal").innerText = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    if(cart.length === 0) alert("Cart is empty!");
    else {
        alert(`Thank you for your purchase! Total: $${cart.reduce((sum,i)=>sum+i.price,0)}`);
        cart = [];
        updateCart();
        closeModal();
    }
}

// Modal logic
const modal = document.getElementById("cartModal");
const btn = document.getElementById("cartBtn");
const span = document.querySelector(".close");

btn.onclick = () => modal.style.display = "block";
span.onclick = () => modal.style.display = "none";
window.onclick = e => { if(e.target === modal) modal.style.display = "none"; }
