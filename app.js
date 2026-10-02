// Base de dados simulada de produtos - 40 Produtos com Descrições Detalhadas
const products = [
    // --- Cabos e Carregadores ---
    { id: 34, name: "Cabo USB-C para USB-C Reforçado em Nylon 2m", category: "acessorios", price: 14.99, image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=60", description: "Cabo de carregamento rápido e transferência de dados de alta velocidade. Revestimento em nylon entrançado de alta resistência contra dobras e desgaste diário. Comprimento ideal de 2 metros." },
    { id: 35, name: "Cabo Rápido Lightning para iPhone em Kevlar", category: "acessorios", price: 16.99, image: "https://images.unsplash.com/photo-1585338107529-13afc5f02c86?w=500&auto=format&fit=crop&q=60", description: "Certificado e altamente durável, construído com fibras de Kevlar para suportar tração extrema. Compatível com todos os modelos de iPhone com entrada Lightning." },
    { id: 36, name: "Carregador de Tomada USB Rápido 20W (PD)", category: "tecnologia", price: 21.99, image: "https://images.unsplash.com/photo-1619946794135-7bc917a27793?w=500&auto=format&fit=crop&q=60", description: "Carregador de parede compacto com tecnologia Power Delivery (PD) de 20W. Carrega o seu dispositivo até 50% em apenas 30 minutos com total segurança contra sobreaquecimento." },
    { id: 37, name: "Carregador de Tomada Múltiplo USB 4 Portas", category: "tecnologia", price: 27.50, image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=500&auto=format&fit=crop&q=60", description: "Estação de carga versátil com 4 portas USB inteligentes. Permite carregar múltiplos dispositivos em simultâneo numa única tomada, ideal para viagens e secretárias organizadas." },
    { id: 38, name: "Cabo Universal 3 em 1 Retrátil (iPhone / Tipo-C / Micro-USB)", category: "acessorios", price: 15.50, image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=500&auto=format&fit=crop&q=60", description: "O cabo definitivo para todas as ocasiões. Possui conectores Lightning, USB-C e Micro-USB num design retrátil compacto que evita nós e confusão de cabos." },
    { id: 39, name: "Carregador de Tomada GaN Ultra-Rápido 65W", category: "tecnologia", price: 45.00, image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=500&auto=format&fit=crop&q=60", description: "Tecnologia avançada de Nitreto de Gálio (GaN). Potência massiva de 65W capaz de carregar computadores portáteis, tablets e smartphones à máxima velocidade num tamanho ultracompacto." },
    { id: 40, name: "Cabo Magnético Rotativo 360º para Carregamento", category: "acessorios", price: 17.99, image: "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?w=500&auto=format&fit=crop&q=60", description: "Cabo magnético inovador com cabeça rotativa a 360 graus. Facilita a conexão com uma só mão e protege a entrada do seu telemóvel contra acumulação de pó e danos." },

    // --- Smart Home, Cobre & Inovação ---
    { id: 1, name: "Fechadura Inteligente Biométrica c/ Wi-Fi", category: "tecnologia", price: 129.99, image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&auto=format&fit=crop&q=60", description: "Segurança de nível superior para a sua casa. Acesso por impressão digital ultra-rápida, código PIN, cartão RFID ou remotamente via aplicação Wi-Fi no telemóvel." },
    { id: 2, name: "Sensor de Movimento Inteligente Zigbee", category: "tecnologia", price: 24.99, image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=500&auto=format&fit=crop&q=60", description: "Detete movimento em tempo real e crie automações inteligentes na sua habitação. Baixo consumo energético e fácil instalação em qualquer parede ou canto." },
    { id: 3, name: "Painel de Cobre LED Decorativo Parede", category: "casa", price: 79.50, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format&fit=crop&q=60", description: "Peça de design moderno com acabamento em cobre escovado e iluminação LED embutida. Transforma qualquer ambiente numa sala sofisticada e contemporânea." },
    { id: 4, name: "Projetor de Galáxias Holográfico 4K", category: "tecnologia", price: 49.99, image: "https://images.unsplash.com/photo-1507499739999-097706ad8914?w=500&auto=format&fit=crop&q=60", description: "Crie um ambiente estelar deslumbrante no seu quarto. Projeta nebulosas coloridas e estrelas em alta definição com colunas Bluetooth integradas." },
    { id: 5, name: "Anel Inteligente de Monitorização de Saúde", category: "tecnologia", price: 149.00, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=60", description: "Monitorize o seu sono, batimento cardíaco, oxigénio no sangue e atividade física 24/7 num anel elegante, leve e resistente à água em titânio." },
    { id: 6, name: "Garrafa Térmica Inteligente c/ Display LED", category: "acessorios", price: 34.99, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60", description: "Mantenha as suas bebidas quentes ou frias durante horas. O display LED tátil na tampa indica a temperatura exata do líquido com um simples toque." },
    { id: 7, name: "Mini Impressora Térmica Portátil de Bolso", category: "tecnologia", price: 39.50, image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&auto=format&fit=crop&q=60", description: "Imprima fotos, notas, autocolantes e recibos instantaneamente a partir do telemóvel via Bluetooth, sem necessidade de tinteiros." },
    { id: 8, name: "Massageador Cervical de Pulso Elétrico", category: "bem-estar", price: 45.00, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&auto=format&fit=crop&q=60", description: "Alivie o stress e as dores musculares no pescoço através de impulsos elétricos de baixa frequência e terapia de calor suave." },
    { id: 9, name: "Estabilizador Gimbal de 3 Eixos para Smartphone", category: "tecnologia", price: 89.99, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60", description: "Grave vídeos profissionais e perfeitamente nivelados sem trepidações. Inclui rastreio inteligente de rosto e modos criativos automáticos." },
    { id: 10, name: "Lâmpada LED Solar Externa c/ Sensor de Presença", category: "casa", price: 29.99, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format&fit=crop&q=60", description: "Iluminação exterior potente totalmente autónoma. Carrega durante o dia com energia solar e acende automaticamente ao detetar movimento à noite." },
    { id: 11, name: "Organizador de Cabos de Cobre Escovado", category: "casa", price: 19.99, image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=60", description: "Mantenha a sua secretária limpa e elegante com este organizador pesado em cobre escovado. Evita que os cabos caiam para o chão." },
    { id: 12, name: "Óculos Inteligentes com Áudio Integrado Bluetooth", category: "tecnologia", price: 119.00, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60", description: "Ouça música e atenda chamadas em mãos-livres sem colocar auscultadores nos ouvidos, graças às colunas direcionais discretas incorporadas na armação." },
    { id: 13, name: "Escova de Dentes Ultrassónica Inteligente", category: "bem-estar", price: 39.99, image: "https://images.unsplash.com/photo-1559595500-e14231160413?w=500&auto=format&fit=crop&q=60", description: "Limpeza profunda sónica com múltiplos modos de escovagem. Remove até 10x mais placa bacteriana do que uma escova manual convencional." },
    { id: 14, name: "Câmara de Segurança Solar Wi-Fi PTZ 360º", category: "tecnologia", price: 79.99, image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=500&auto=format&fit=crop&q=60", description: "Câmara rotativa sem fios alimentada por energia solar. Rotação completa de 360 graus, visão noturna a cores e alertas diretos no smartphone." },
    { id: 15, name: "Torneira de LED com Sensor de Temperatura", category: "casa", price: 32.50, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&auto=format&fit=crop&q=60", description: "Altera a cor da luz LED automaticamente consoante a temperatura da água (azul para frio, verde para morno e vermelho para quente), sem pilhas." },
    { id: 16, name: "Carregador sem Fios 3 em 1 Magnético Dobrável", category: "tecnologia", price: 49.99, image: "https://images.unsplash.com/photo-1622445275576-7243c7d13d8d?w=500&auto=format&fit=crop&q=60", description: "Carregue o seu smartphone, smartwatch e auriculares em simultâneo numa elegante estação dobrável e portátil para viagens." },
    { id: 17, name: "Difusor de Aromas Efeito Chama de Fogo", category: "casa", price: 39.99, image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&auto=format&fit=crop&q=60", description: "Combina névoa ultrassónica com luzes LED para criar um efeito visual impressionante de chama de fogo relaxante. Aceita óleos essenciais." },
    { id: 18, name: "Tapete de Banho Absorcente em Terra Diatomácea", category: "casa", price: 22.00, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&auto=format&fit=crop&q=60", description: "Seca os pés instantaneamente em segundos. Um tapete rígido inovador, ecológico e antiderrapante que evita a acumulação de humidade e bactérias." },
    { id: 19, name: "Localizador de Chaves Bluetooth c/ Alarme (Smart Tag)", category: "acessorios", price: 15.99, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format&fit=crop&q=60", description: "Nunca mais perca as suas chaves, mala ou carteira. Localize os seus objetos perdidos através de sinal sonoro e geolocalização no telemóvel." },
    { id: 20, name: "Massageador Ocular Térmico Anti-Stress", category: "bem-estar", price: 55.00, image: "https://images.unsplash.com/photo-1512290900722-9a707b82b9db?w=500&auto=format&fit=crop&q=60", description: "Óculos de massagem com compressão de ar, vibração e calor relaxante. Alivia fadiga ocular, dores de cabeça e olheiras." },
    { id: 21, name: "Luz de Led Noturna Inteligente com Sensor de Presença", category: "casa", price: 14.99, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format&fit=crop&q=60", description: "Acende suavemente ao detetar movimento no escuro. Ideal para corredores, escadas e quartos de crianças, garantindo segurança a caminhar de noite." },
    { id: 22, name: "Aspirador de Pó Portátil Sem Fios para Automóvel", category: "acessorios", price: 38.50, image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500&auto=format&fit=crop&q=60", description: "Poder de sucção elevado num formato compacto sem fios. Perfeito para limpar rapidamente o interior do carro, sofás e cantos difíceis." },
    { id: 23, name: "Balança de Banho Bioimpedância Inteligente", category: "bem-estar", price: 42.00, image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=60", description: "Mede mais de 10 métricas corporais essenciais (peso, massa muscular, gordura visceral, água, IMC) e sincroniza tudo via Bluetooth com a app." },
    { id: 24, name: "Suporte de Computador Portátil em Alumínio Ventilado", category: "tecnologia", price: 29.99, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60", description: "Melhore a sua postura e evite o sobreaquecimento do seu portátil. Estrutura robusta em alumínio ajustável e totalmente dobrável." },
    { id: 25, name: "Fita LED RGB Inteligente Wi-Fi para TV e Salas", category: "casa", price: 25.99, image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&auto=format&fit=crop&q=60", description: "Iluminação ambiente imersiva controlada por telemóvel ou comando de voz. Sincroniza cores e efeitos com música e filmes." },
    { id: 26, name: "Pulseira Antimosquitos Ultrassónica Inteligente", category: "acessorios", price: 18.00, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&auto=format&fit=crop&q=60", description: "Repelente de insetos seguro, ecológico e sem químicos. Emite ondas sonoras de baixa frequência que afastam mosquitos de forma eficaz." },
    { id: 27, name: "Pistola de Massagem Muscular Profunda Mini", category: "bem-estar", price: 65.00, image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&auto=format&fit=crop&q=60", description: "Alívio muscular profissional em tamanho de bolso. Ideal para recuperar após o treino ou relaxar músculos doridos com várias intensidades." },
    { id: 28, name: "Cortinas Automatizadas Inteligentes Motorizadas", category: "casa", price: 89.00, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format&fit=crop&q=60", description: "Abra e feche as suas cortinas automaticamente através de horários programados, comando à distância ou assistentes de voz." },
    { id: 29, name: "Mini Projetor Portátil Smart LED HD", category: "tecnologia", price: 110.00, image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60", description: "Transforme qualquer parede num cinema em casa. Projetor compacto com foco ajustável, leitor multimédia e altifalante integrado." },
    { id: 30, name: "Capa de Telemóvel Impermeável Protetora Universal", category: "acessorios", price: 12.99, image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=500&auto=format&fit=crop&q=60", description: "Proteção total contra água, areia e neve. Permite tirar fotografias e usar o ecrã tátil submerso na piscina ou praia sem preocupações." },
    { id: 31, name: "Purificador de Ar Portátil com Filtro HEPA", category: "casa", price: 54.99, image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60", description: "Elimina ácaros, pó, odores e poluentes do ar à sua volta. Perfeito para secretárias, quartos ou pequenos escritórios com filtro HEPA de alta eficiência." },
    { id: 32, name: "Caneta de Impressão 3D Criativa para Crianças e Artistas", category: "tecnologia", price: 34.50, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=60", description: "Desenhe objetos tridimensionais no ar com facilidade. Temperatura ajustável e design ergonómico para estimular a criatividade artística." },
    { id: 33, name: "Esponja de Limpeza Elétrica Rotativa s/ Fios", category: "casa", price: 29.99, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&auto=format&fit=crop&q=60", description: "Limpeza profunda sem esforço físico. Cabeças rotativas intercambiáveis para remover gordura difícil na cozinha, azulejos e banheiros." }
];

let cart = [];
let currentSelectedProduct = null;

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

// Elementos do Modal de Detalhes
const productModal = document.getElementById("productModal");
const closeProductModal = document.getElementById("closeProductModal");
const modalProductImg = document.getElementById("modalProductImg");
const modalProductName = document.getElementById("modalProductName");
const modalProductPrice = document.getElementById("modalProductPrice");
const modalProductDesc = document.getElementById("modalProductDesc");
const modalAddToCartBtn = document.getElementById("modalAddToCartBtn");

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
        // Ao clicar no cartão abre os detalhes do produto
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <div>
                    <h3>${product.name}</h3>
                    <div class="product-price">${product.price.toFixed(2)} €</div>
                </div>
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">Adicionar ao Carrinho</button>
            </div>
        `;
        card.addEventListener("click", () => openProductDetails(product));
        productsGrid.appendChild(card);
    });
}

// Abrir Detalhes do Produto
function openProductDetails(product) {
    currentSelectedProduct = product;
    modalProductImg.src = product.image;
    modalProductName.innerText = product.name;
    modalProductPrice.innerText = product.price.toFixed(2) + " €";
    modalProductDesc.innerText = product.description;
    productModal.style.display = "flex";
}

// Fechar Modal de Detalhes
closeProductModal.addEventListener("click", () => {
    productModal.style.display = "none";
});

// Botão Adicionar no Modal de Detalhes
modalAddToCartBtn.addEventListener("click", () => {
    if (currentSelectedProduct) {
        addToCart(currentSelectedProduct.id);
        productModal.style.display = "none";
    }
});

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

// Fechar modais ao clicar fora
window.addEventListener("click", (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = "none";
    }
    if (e.target === productModal) {
        productModal.style.display = "none";
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
