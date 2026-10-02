// Base de dados simulada com múltiplas imagens e preços para todos os 40 produtos
const products = [
    { 
        id: 34, name: "Cabo USB-C para USB-C Reforçado em Nylon 2m", category: "acessorios", price: 14.99, 
        images: [
            "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1585338107529-13afc5f02c86?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Cabo de carregamento rápido e transferência de dados de alta velocidade. Revestimento em nylon entrançado de alta resistência contra dobras e desgaste diário." 
    },
    { 
        id: 35, name: "Cabo Rápido Lightning para iPhone em Kevlar", category: "acessorios", price: 16.99, 
        images: [
            "https://images.unsplash.com/photo-1585338107529-13afc5f02c86?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Certificado e altamente durável, construído com fibras de Kevlar para suportar tração extrema. Compatível com todos os modelos de iPhone." 
    },
    { 
        id: 36, name: "Carregador de Tomada USB Rápido 20W (PD)", category: "tecnologia", price: 21.99, 
        images: [
            "https://images.unsplash.com/photo-1619946794135-7bc917a27793?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Carregador de parede compacto com tecnologia Power Delivery (PD) de 20W. Carrega o seu dispositivo até 50% em apenas 30 minutos." 
    },
    { 
        id: 37, name: "Carregador de Tomada Múltiplo USB 4 Portas", category: "tecnologia", price: 27.50, 
        images: [
            "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1619946794135-7bc917a27793?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Estação de carga versátil com 4 portas USB inteligentes para múltiplos dispositivos em simultâneo." 
    },
    { 
        id: 38, name: "Cabo Universal 3 em 1 Retrátil", category: "acessorios", price: 15.50, 
        images: [
            "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Conectores Lightning, USB-C e Micro-USB num design retrátil compacto que evita nós." 
    },
    { 
        id: 39, name: "Carregador GaN Ultra-Rápido 65W", category: "tecnologia", price: 45.00, 
        images: [
            "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1619946794135-7bc917a27793?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Potência massiva de 65W capaz de carregar computadores portáteis e smartphones à máxima velocidade." 
    },
    { 
        id: 40, name: "Cabo Magnético Rotativo 360º", category: "acessorios", price: 17.99, 
        images: [
            "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Cabo magnético inovador com cabeça rotativa a 360 graus para conexão fácil com uma só mão." 
    },
    { 
        id: 1, name: "Fechadura Inteligente Biométrica c/ Wi-Fi", category: "tecnologia", price: 129.99, 
        images: [
            "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Segurança de nível superior para a sua casa com impressão digital, PIN ou app Wi-Fi." 
    },
    { 
        id: 2, name: "Sensor de Movimento Inteligente Zigbee", category: "tecnologia", price: 24.99, 
        images: [
            "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Detete movimento em tempo real e crie automações inteligentes na sua habitação." 
    },
    { 
        id: 3, name: "Painel de Cobre LED Decorativo Parede", category: "casa", price: 79.50, 
        images: [
            "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Peça de design moderno com acabamento em cobre escovado e iluminação LED embutida." 
    },
    { 
        id: 4, name: "Projetor de Galáxias Holográfico 4K", category: "tecnologia", price: 49.99, 
        images: [
            "https://images.unsplash.com/photo-1507499739999-097706ad8914?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Projeta nebulosas coloridas e estrelas em alta definição com colunas Bluetooth integradas." 
    },
    { 
        id: 5, name: "Anel Inteligente de Monitorização de Saúde", category: "tecnologia", price: 149.00, 
        images: [
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Monitorize o seu sono, batimento cardíaco e atividade física num anel leve em titânio." 
    },
    { 
        id: 6, name: "Garrafa Térmica Inteligente c/ Display LED", category: "acessorios", price: 34.99, 
        images: [
            "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Display LED tátil na tampa indica a temperatura exata do líquido em tempo real." 
    },
    { 
        id: 7, name: "Mini Impressora Térmica Portátil de Bolso", category: "tecnologia", price: 39.50, 
        images: [
            "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Imprima fotos e notas instantaneamente a partir do telemóvel via Bluetooth sem tinteiros." 
    },
    { 
        id: 8, name: "Massageador Cervical de Pulso Elétrico", category: "bem-estar", price: 45.00, 
        images: [
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1512290900722-9a707b82b9db?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Alivie o stress e as dores musculares através de impulsos elétricos e terapia de calor." 
    },
    { 
        id: 9, name: "Estabilizador Gimbal de 3 Eixos", category: "tecnologia", price: 89.99, 
        images: [
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Grave vídeos profissionais e perfeitamente nivelados sem trepidações com rastreio facial." 
    },
    { 
        id: 10, name: "Lâmpada LED Solar Externa c/ Sensor", category: "casa", price: 29.99, 
        images: [
            "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Iluminação exterior autónoma que carrega com energia solar e acende com movimento." 
    },
    { 
        id: 11, name: "Organizador de Cabos de Cobre Escovado", category: "casa", price: 19.99, 
        images: [
            "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Mantenha a sua secretária limpa e elegante com este organizador pesado em cobre escovado." 
    },
    { 
        id: 12, name: "Óculos Inteligentes com Áudio Bluetooth", category: "tecnologia", price: 119.00, 
        images: [
            "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Ouça música e atenda chamadas em mãos-livres graças a colunas direcionais na armação." 
    },
    { 
        id: 13, name: "Escova de Dentes Ultrassónica Inteligente", category: "bem-estar", price: 39.99, 
        images: [
            "https://images.unsplash.com/photo-1559595500-e14231160413?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Limpeza profunda sónica com múltiplos modos para remover até 10x mais placa bacteriana." 
    },
    { 
        id: 14, name: "Câmara de Segurança Solar Wi-Fi PTZ 360º", category: "tecnologia", price: 79.99, 
        images: [
            "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Rotação completa de 360 graus, visão noturna a cores e alertas diretos no smartphone." 
    },
    { 
        id: 15, name: "Torneira de LED c/ Sensor de Temperatura", category: "casa", price: 32.50, 
        images: [
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Altera a cor da luz LED automaticamente consoante a temperatura da água, sem pilhas." 
    },
    { 
        id: 16, name: "Carregador sem Fios 3 em 1 Magnético", category: "tecnologia", price: 49.99, 
        images: [
            "https://images.unsplash.com/photo-1622445275576-7243c7d13d8d?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1619946794135-7bc917a27793?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Carregue o smartphone, smartwatch e auriculares em simultâneo numa estação dobrável." 
    },
    { 
        id: 17, name: "Difusor de Aromas Efeito Chama de Fogo", category: "casa", price: 39.99, 
        images: [
            "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Efeito visual impressionante de chama de fogo relaxante com óleos essenciais." 
    },
    { 
        id: 18, name: "Tapete de Banho em Terra Diatomácea", category: "casa", price: 22.00, 
        images: [
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Seca os pés instantaneamente em segundos. Tapete rígido ecológico e antiderrapante." 
    },
    { 
        id: 19, name: "Localizador de Chaves Bluetooth Smart Tag", category: "acessorios", price: 15.99, 
        images: [
            "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Localize os seus objetos perdidos através de sinal sonoro e geolocalização no telemóvel." 
    },
    { 
        id: 20, name: "Massageador Ocular Térmico Anti-Stress", category: "bem-estar", price: 55.00, 
        images: [
            "https://images.unsplash.com/photo-1512290900722-9a707b82b9db?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Compressão de ar e calor relaxante para aliviar fadiga ocular e dores de cabeça." 
    },
    { 
        id: 21, name: "Luz de LED Noturna com Sensor", category: "casa", price: 14.99, 
        images: [
            "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Acende suavemente ao detetar movimento no escuro para corredores e escadas." 
    },
    { 
        id: 22, name: "Aspirador Portátil Sem Fios para Automóvel", category: "acessorios", price: 38.50, 
        images: [
            "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Poder de sucção elevado em formato compacto para limpar o carro ou sofás." 
    },
    { 
        id: 23, name: "Balança de Banho Bioimpedância Inteligente", category: "bem-estar", price: 42.00, 
        images: [
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1559595500-e14231160413?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Mede mais de 10 métricas corporais (peso, gordura, água, IMC) sincronizadas via Bluetooth." 
    },
    { 
        id: 24, name: "Suporte de Computador Portátil em Alumínio", category: "tecnologia", price: 29.99, 
        images: [
            "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Melhore a sua postura e evite o sobreaquecimento com estrutura ajustável em alumínio." 
    },
    { 
        id: 25, name: "Fita LED RGB Inteligente Wi-Fi para TV", category: "casa", price: 25.99, 
        images: [
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Iluminação ambiente controlada por telemóvel que sincroniza com música e filmes." 
    },
    { 
        id: 26, name: "Pulseira Antimosquitos Ultrassónica", category: "acessorios", price: 18.00, 
        images: [
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Repelente sem químicos que emite ondas sonoras de baixa frequência." 
    },
    { 
        id: 27, name: "Pistola de Massagem Muscular Profunda Mini", category: "bem-estar", price: 65.00, 
        images: [
            "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Alívio muscular profissional em tamanho de bolso com várias intensidades." 
    },
    { 
        id: 28, name: "Cortinas Automatizadas Inteligentes Motorizadas", category: "casa", price: 89.00, 
        images: [
            "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Abra e feche as cortinas automaticamente através de horários programados ou voz." 
    },
    { 
        id: 29, name: "Mini Projetor Portátil Smart LED HD", category: "tecnologia", price: 110.00, 
        images: [
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1507499739999-097706ad8914?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Transforme qualquer parede num cinema em casa com foco ajustável e altifalante." 
    },
    { 
        id: 30, name: "Capa de Telemóvel Impermeável Universal", category: "acessorios", price: 12.99, 
        images: [
            "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Proteção total contra água e areia para tirar fotografias na piscina ou praia." 
    },
    { 
        id: 31, name: "Purificador de Ar Portátil com Filtro HEPA", category: "casa", price: 54.99, 
        images: [
            "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Elimina ácaros, pó e odores com filtro HEPA de alta eficiência para secretárias." 
    },
    { 
        id: 32, name: "Caneta de Impressão 3D Criativa", category: "tecnologia", price: 34.50, 
        images: [
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Desenhe objetos tridimensionais no ar com facilidade e temperatura ajustável." 
    },
    { 
        id: 33, name: "Esponja de Limpeza Elétrica Rotativa", category: "casa", price: 29.99, 
        images: [
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60"
        ], 
        description: "Cabeças rotativas intercambiáveis para remover gordura difícil na cozinha e banheiros." 
    }
];

let cart = [];
const mainContainer = document.getElementById("mainContainer");
const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const closeCart = document.getElementById("closeCart");
const cartItemsContainer = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotalPrice = document.getElementById("cartTotalPrice");
const searchInput = document.getElementById("searchInput");
const checkoutBtn = document.getElementById("checkoutBtn");

// Função auxiliar para calcular o preço original inflacionado (falso desconto de 30%)
function getOriginalPrice(price) {
    return (price / 0.7).toFixed(2);
}

// Voltar à página inicial (Catálogo)
function goHome() {
    displayCatalog(products);
}

// Exibir Catálogo com Preços e Descontos Falsos
function displayCatalog(productsToDisplay) {
    let html = `
        <div style="margin-bottom: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
            <button class="cat-btn" onclick="filterCat('all')" style="padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; border: 1px solid #ccc; background: white;">Todos</button>
            <button class="cat-btn" onclick="filterCat('tecnologia')" style="padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; border: 1px solid #ccc; background: white;">Tecnologia</button>
            <button class="cat-btn" onclick="filterCat('casa')" style="padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; border: 1px solid #ccc; background: white;">Casa & Cobre</button>
            <button class="cat-btn" onclick="filterCat('acessorios')" style="padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; border: 1px solid #ccc; background: white;">Acessórios</button>
            <button class="cat-btn" onclick="filterCat('bem-estar')" style="padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; border: 1px solid #ccc; background: white;">Bem-Estar</button>
        </div>
        <div class="products-grid">
    `;

    if (productsToDisplay.length === 0) {
        html += `<p style="grid-column: 1/-1; text-align: center; color: #777;">Nenhum produto encontrado.</p>`;
    } else {
        productsToDisplay.forEach(product => {
            const originalPrice = getOriginalPrice(product.price);
            html += `
                <div class="product-card" onclick="openProductDetail(${product.id})">
                    <img src="${product.images[0]}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <div class="price-box">
                        <span class="discount-badge">-30%</span>
                        <span class="current-price">${product.price.toFixed(2)} €</span>
                        <span class="old-price">${originalPrice} €</span>
                    </div>
                    <button class="buy-btn" onclick="event.stopPropagation(); addToCart(${product.id})">Adicionar ao Carrinho</button>
                </div>
            `;
        });
    }
    html += `</div>`;
    mainContainer.innerHTML = html;
}

// Filtrar Categorias
function filterCat(cat) {
    if (cat === 'all') {
        displayCatalog(products);
    } else {
        const filtered = products.filter(p => p.category === cat);
        displayCatalog(filtered);
    }
}

// Abrir Página de Detalhes do Produto (Estilo Amazon)
function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    const originalPrice = getOriginalPrice(product.price);
    
    // Selecionar produtos semelhantes da mesma categoria
    const similarProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

    let thumbnailsHtml = '';
    product.images.forEach((img, index) => {
        thumbnailsHtml += `<img src="${img}" class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage(this, '${img}')">`;
    });

    let similarHtml = '';
    similarProducts.forEach(sim => {
        const simOriginal = getOriginalPrice(sim.price);
        similarHtml += `
            <div class="product-card" onclick="openProductDetail(${sim.id})" style="min-width: 200px;">
                <img src="${sim.images[0]}" alt="${sim.name}" style="height: 120px;">
                <h3 style="font-size: 0.85rem;">${sim.name}</h3>
                <div class="price-box">
                    <span class="current-price" style="font-size: 1rem;">${sim.price.toFixed(2)} €</span>
                    <span class="old-price">${simOriginal} €</span>
                </div>
            </div>
        `;
    });

    mainContainer.innerHTML = `
        <div class="product-detail-page">
            <button onclick="goHome()" style="background: none; border: none; color: #007185; cursor: pointer; margin-bottom: 1rem; font-weight: bold;"><i class="fa-solid fa-arrow-left"></i> Voltar aos resultados</button>
            <div class="detail-grid">
                <!-- Coluna 1: Galeria de Fotos -->
                <div class="images-column">
                    <div class="main-img-container">
                        <img id="mainImageDisplay" src="${product.images[0]}" alt="${product.name}">
                    </div>
                    <div class="thumbnails-row">
                        ${thumbnailsHtml}
                    </div>
                </div>

                <!-- Coluna 2: Informações e Descrição -->
                <div class="info-column">
                    <h2>${product.name}</h2>
                    <div class="rating">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i> 4.7 (1,240 avaliações)
                    </div>
                    <div class="price-box" style="font-size: 1.2rem;">
                        <span class="discount-badge">-30%</span>
                        <span class="current-price">${product.price.toFixed(2)} €</span>
                        <span class="old-price">${originalPrice} €</span>
                    </div>
                    <p style="color: #555; line-height: 1.6; margin-top: 1rem;">${product.description}</p>
                </div>

                <!-- Coluna 3: Caixa de Compra -->
                <div>
                    <div class="buy-box">
                        <div class="current-price" style="margin-bottom: 0.5rem;">${product.price.toFixed(2)} €</div>
                        <p style="font-size: 0.85rem; color: #007185; margin-bottom: 1rem;">Entrega GRÁTIS em 24 horas.</p>
                        <button class="buy-btn" onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
                    </div>
                </div>
            </div>

            <!-- Produtos Semelhantes -->
            <div class="similar-section">
                <h3>Produtos semelhantes que os clientes compram</h3>
                <div style="display: flex; gap: 1rem; overflow-x: auto; padding-bottom: 1rem;">
                    ${similarHtml}
                </div>
            </div>
        </div>
    `;
    window.scrollTo(0, 0);
}

// Mudar imagem principal ao clicar nas miniaturas
function changeMainImage(element, imgUrl) {
    document.getElementById("mainImageDisplay").src = imgUrl;
    document.querySelectorAll(".thumbnail").forEach(thumb => thumb.classList.remove("active"));
    element.classList.add("active");
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
    cartModal.style.display = "flex";
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
                <h4 style="font-size: 0.9rem;">${item.name}</h4>
                <p>${item.price.toFixed(2)} € x ${item.quantity}</p>
            </div>
            <button onclick="removeFromCart(${item.id})" style="background: #cc0c39; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer;">Remover</button>
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

// Barra de Pesquisa
searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(term));
    displayCatalog(filtered);
});

// Abertura e fecho do Carrinho
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
displayCatalog(products);
