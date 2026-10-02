// Base de dados simulada de produtos
const products = [
    { id: 1, name: "Tomada Inteligente Wi-Fi", category: "tecnologia", price: 19.99, image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=500&auto=format&fit=crop&q=60" },
    { id: 2, name: "Headphones Sem Fios", category: "tecnologia", price: 59.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60" },
    { id: 3, name: "Smartwatch Desportivo", category: "tecnologia", price: 89.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60" },
    { id: 4, name: "Ténis Urbanos", category: "moda", price: 45.00, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60" },
    { id: 5, name: "Mochila Executiva", category: "acessorios", price: 39.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60" },
    { id: 6, name: "Óculos de Sol Clássicos", category: "acessorios", price: 25.50, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60" },
    { id: 7, name: "Camisola Casual de Malha", category: "moda", price: 34.00, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60" }
];

let cart = [];

// Elementos do DOM
const productsGrid = document.getElementById("productsGrid");
const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const closeCart = document.getElementById("closeCart");
const cartItemsContainer = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotalPrice = document.getElementById("cartTotalPrice");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".cat-btn");
const checkoutBtn = document.getElementById("checkoutBtn");

// Mostrar Produtos na Página
function displayProducts(productsToDisplay) {
    productsGrid.innerHTML = "";
    if (productsToDisplay.length === 0) {
        productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #777;">Nenhum produto encontrado.</p>`;
        return;
    }
    
    productsToDisplay.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <div>
                    <h3>${product.name}</h3>
                    <div class="product-price">${product.price.toFixed(2)} €</div>
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

// Adicionar ao Carrinho
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

// Atualizar Carrinho UI
function updateCart() {
    cartItemsContainer.innerHTML = "";
    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;

        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");
        cartItemDiv.innerHTML = `
            <div>
                <h4>${item.name}</h4>
                <p>${item.price.toFixed(2)} € x ${item.quantity}</p>
            </div>
            <button onclick="removeFromCart(${item.id})" style="background: #e74c3c; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer;">Remover</button>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
    });

    cartCount.innerText = totalItems;
    cartTotalPrice.innerText = totalPrice.toFixed(2) + " €";
}

// Remover do Carrinho
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Filtrar por Categoria
categoryButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        categoryButtons.forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");

        const category = e.target.getAttribute("data-category");
        if (category === "all") {
            displayProducts(products);
        } else {
            const filtered = products.filter(p => p.category === category);
            displayProducts(filtered);
        }
    });
});

// Barra de Pesquisa
searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(term));
    displayProducts(filtered);
});

// Abertura e fecho do Modal do Carrinho
cartBtn.addEventListener("click", () => {
    cartModal.style.display = "flex";
});

closeCart.addEventListener("click", () => {
    cartModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = "none";
    }
});

// Finalizar Compra
checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("O seu carrinho está vazio!");
        return;
    }
    alert("Compra simulada com sucesso! Obrigado pela preferência na Nova Market.");
    cart = [];
    updateCart();
    cartModal.style.display = "none";
});

// Inicializar página
displayProducts(products);
