// Base de dados simulada de produtos - 33 Produtos de Dropshipping (Tendências 2028)
const products = [
    // --- Produtos Anteriores (Smart Home, Cobre & Inovação) ---
    { id: 1, name: "Fechadura Inteligente Biométrica c/ Wi-Fi", category: "tecnologia", price: 129.99, image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&auto=format&fit=crop&q=60" },
    { id: 2, name: "Sensor de Movimento Inteligente Zigbee", category: "tecnologia", price: 24.99, image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=500&auto=format&fit=crop&q=60" },
    { id: 3, name: "Painel de Cobre LED Decorativo Parede", category: "casa", price: 79.50, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format&fit=crop&q=60" },
    { id: 4, name: "Projetor de Galáxias Holográfico 4K", category: "tecnologia", price: 49.99, image: "https://images.unsplash.com/photo-1507499739999-097706ad8914?w=500&auto=format&fit=crop&q=60" },
    { id: 5, name: "Anel Inteligente de Monitorização de Saúde", category: "tecnologia", price: 149.00, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=60" },
    { id: 6, name: "Garrafa Térmica Inteligente c/ Display LED", category: "acessorios", price: 34.99, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60" },
    { id: 7, name: "Mini Impressora Térmica Portátil de Bolso", category: "tecnologia", price: 39.50, image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&auto=format&fit=crop&q=60" },
    { id: 8, name: "Massageador Cervical de Pulso Elétrico", category: "bem-estar", price: 45.00, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&auto=format&fit=crop&q=60" },
    { id: 9, name: "Estabilizador Gimbal de 3 Eixos para Smartphone", category: "tecnologia", price: 89.99, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60" },
    { id: 10, name: "Lâmpada LED Solar Externa c/ Sensor de Presença", category: "casa", price: 29.99, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format&fit=crop&q=60" },
    { id: 11, name: "Organizador de Cabos de Cobre Escovado", category: "casa", price: 19.99, image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=60" },
    { id: 12, name: "Óculos Inteligentes com Áudio Integrado Bluetooth", category: "tecnologia", price: 119.00, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60" },
    { id: 13, name: "Escova de Dentes Ultrassónica Inteligente", category: "bem-estar", price: 39.99, image: "https://images.unsplash.com/photo-1559595500-e14231160413?w=500&auto=format&fit=crop&q=60" },

    // --- Mais 20 Produtos Adicionados (Tendências Populares) ---
    { id: 14, name: "Câmara de Segurança Solar Wi-Fi PTZ 360º", category: "tecnologia", price: 79.99, image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=500&auto=format&fit=crop&q=60" },
    { id: 15, name: "Torneira de LED com Sensor de Temperatura", category: "casa", price: 32.50, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&auto=format&fit=crop&q=60" },
    { id: 16, name: "Carregador sem Fios 3 em 1 Magnético Dobrável", category: "tecnologia", price: 49.99, image: "https://images.unsplash.com/photo-1622445275576-7243c7d13d8d?w=500&auto=format&fit=crop&q=60" },
    { id: 17, name: "Difusor de Aromas Efeito Chama de Fogo", category: "casa", price: 39.99, image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&auto=format&fit=crop&q=60" },
    { id: 18, name: "Tapete de Banho Absorcente em Terra Diatomácea", category: "casa", price: 22.00, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&auto=format&fit=crop&q=60" },
    { id: 19, name: "Localizador de Chaves Bluetooth c/ Alarme (Smart Tag)", category: "acessorios", price: 15.99, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format&fit=crop&q=60" },
    { id: 20, name: "Massageador Ocular Térmico Anti-Stress", category: "bem-estar", price: 55.00, image: "https://images.unsplash.com/photo-1512290900722-9a707b82b9db?w=500&auto=format&fit=crop&q=60" },
    { id: 21, name: "Luz de Led Noturna Inteligente com Sensor de Presença", category: "casa", price: 14.99, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format&fit=crop&q=60" },
    { id: 22, name: "Aspirador de Pó Portátil Sem Fios para Automóvel", category: "acessorios", price: 38.50, image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500&auto=format&fit=crop&q=60" },
    { id: 23, name: "Balança de Banho Bioimpedância Inteligente", category: "bem-estar", price: 42.00, image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=60" },
    { id: 24, name: "Suporte de Computador Portátil em Alumínio Ventilado", category: "tecnologia", price: 29.99, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60" },
    { id: 25, name: "Fita LED RGB Inteligente Wi-Fi para TV e Salas", category: "casa", price: 25.99, image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&auto=format&fit=crop&q=60" },
    { id: 26, name: "Pulseira Antimosquitos Ultrassónica Inteligente", category: "acessorios", price: 18.00, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&auto=format&fit=crop&q=60" },
    { id: 27, name: "Pistola de Massagem Muscular Profunda Mini", category: "bem-estar", price: 65.00, image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&auto=format&fit=crop&q=60" },
    { id: 28, name: "Cortinas Automatizadas Inteligentes Motorizadas", category: "casa", price: 89.00, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format&fit=crop&q=60" },
    { id: 29, name: "Mini Projetor Portátil Smart LED HD", category: "tecnologia", price: 110.00, image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60" },
    { id: 30, name: "Capa de Telemóvel Impermeável Protetora Universal", category: "acessorios", price: 12.99, image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=500&auto=format&fit=crop&q=60" },
    { id: 31, name: "Purificador de Ar Portátil com Filtro HEPA", category: "casa", price: 54.99, image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60" },
    { id: 32, name: "Caneta de Impressão 3D Criativa para Crianças e Artistas", category: "tecnologia", price: 34.50, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=60" },
    { id: 33, name: "Esponja de Limpeza Elétrica Rotativa s/ Fios", category: "casa", price: 29.99, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&auto=format&fit=crop&q=60" }
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
