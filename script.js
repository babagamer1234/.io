const clothesProducts = [
    {name: "T-Shirt", price: "$15", img: "https://via.placeholder.com/150?text=T-Shirt"},
    {name: "Jacket", price: "$35", img: "https://via.placeholder.com/150?text=Jacket"},
    {name: "Jeans", price: "$25", img: "https://via.placeholder.com/150?text=Jeans"},
];

const shoesProducts = [
    {name: "Sneakers", price: "$30", img: "https://via.placeholder.com/150?text=Sneakers"},
    {name: "Boots", price: "$50", img: "https://via.placeholder.com/150?text=Boots"},
    {name: "Sandals", price: "$20", img: "https://via.placeholder.com/150?text=Sandals"},
];

function displayProducts(products, elementId) {
    const container = document.getElementById(elementId);
    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        container.appendChild(div);
    });
}

displayProducts(clothesProducts, "clothes-products");
displayProducts(shoesProducts, "shoes-products");
