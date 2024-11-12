const products = [
    { id: 1, name: "Product 1", price: 20, img: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: 25, img: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: 30, img: "https://via.placeholder.com/150" },
];

let cart = [];

document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.getElementById("products");
    const cartButton = document.getElementById("cartButton");
    const cartModal = document.getElementById("cartModal");
    const closeModal = document.querySelector(".close");
    const cartCount = document.getElementById("cartCount");
    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");

    // Load products dynamically
    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productDiv);
    });

    // Update cart count
    const updateCartCount = () => {
        cartCount.innerText = cart.length;
    };

    // Show cart items in modal
    const showCartItems = () => {
        cartItems.innerHTML = "";
        let total = 0;
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(li);
            total += item.price;
        });
        totalPrice.textContent = `Total Price: $${total}`;
    };

    // Open/Close cart modal
    cartButton.onclick = () => {
        showCartItems();
        cartModal.style.display = "block";
    };

    closeModal.onclick = () => {
        cartModal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = "none";
        }
    };

    // Add product to cart
    window.addToCart = (id) => {
        const product = products.find(p => p.id === id);
        if (product) {
            cart.push(product);
            updateCartCount();
        }
    };
});
