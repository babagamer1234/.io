body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
}

header {
    background-color: #ff6f61;
    color: white;
    padding: 20px;
    text-align: center;
}

nav a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
    font-weight: bold;
}

main {
    padding: 20px;
}

.products {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.product {
    background-color: white;
    padding: 15px;
    border-radius: 10px;
    width: 180px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    transition: transform 0.2s;
}

.product:hover {
    transform: scale(1.05);
}

.product img {
    width: 100%;
    border-radius: 10px;
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
}
