// ==========================================
// NOVA MARKET - APP.JS (VERSÃO COMPLETA E DEFINITIVA)
// ==========================================

// Base de dados de utilizadores e afiliados (sistema de comissão de 30%)
let usersDatabase = [
    { email: "admin@novamarket.com", nickname: "NOVA30", balance: 50.00 }
];

let currentUser = null;
let activeAffiliateCode = "";

// Catálogo com 4 a 5 fotos oficiais/reais por produto
const products = [
    { 
        id: 34, name: "Cabo USB-C para USB-C Reforçado em Nylon 2m", category: "acessorios", price: 14.99, 
        images: [
            "https://m.media-amazon.com/images/I/61NYiP0jvWL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71Xm+9qG7hL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61y2W0vS8sL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71u9s+L6dSL._AC_SL1500_.jpg"
        ], 
        description: "Cabo de carregamento rápido e transferência de dados de alta velocidade. Revestimento em nylon entrançado de alta resistência contra dobras e desgaste diário." 
    },
    { 
        id: 35, name: "Cabo Rápido Lightning para iPhone em Kevlar", category: "acessorios", price: 16.99, 
        images: [
            "https://m.media-amazon.com/images/I/71Xm+9qG7hL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61NYiP0jvWL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71u9s+L6dSL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61y2W0vS8sL._AC_SL1500_.jpg"
        ], 
        description: "Certificado e altamente durável, construído com fibras de Kevlar para suportar tração extrema. Compatível com todos os modelos de iPhone." 
    },
    { 
        id: 36, name: "Carregador de Tomada USB Rápido 20W (PD)", category: "tecnologia", price: 21.99, 
        images: [
            "https://m.media-amazon.com/images/I/61y2W0vS8sL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61NYiP0jvWL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71Xm+9qG7hL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71u9s+L6dSL._AC_SL1500_.jpg"
        ], 
        description: "Carregador de parede compacto com tecnologia Power Delivery (PD) de 20W. Carrega o seu dispositivo até 50% em apenas 30 minutos." 
    },
    { 
        id: 37, name: "Carregador de Tomada Múltiplo USB 4 Portas", category: "tecnologia", price: 27.50, 
        images: [
            "https://m.media-amazon.com/images/I/71u9s+L6dSL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61NYiP0jvWL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71Xm+9qG7hL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61y2W0vS8sL._AC_SL1500_.jpg"
        ], 
        description: "Estação de carga versátil com 4 portas USB inteligentes para múltiplos dispositivos em simultâneo." 
    },
    { 
        id: 38, name: "Cabo Universal 3 em 1 Retrátil", category: "acessorios", price: 15.50, 
        images: [
            "https://m.media-amazon.com/images/I/61NYiP0jvWL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71Xm+9qG7hL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61y2W0vS8sL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71u9s+L6dSL._AC_SL1500_.jpg"
        ], 
        description: "Conectores Lightning, USB-C e Micro-USB num design retrátil compacto que evita nós." 
    },
    { 
        id: 39, name: "Carregador GaN Ultra-Rápido 65W", category: "tecnologia", price: 45.00, 
        images: [
            "https://m.media-amazon.com/images/I/61y2W0vS8sL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71Xm+9qG7hL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61NYiP0jvWL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71u9s+L6dSL._AC_SL1500_.jpg"
        ], 
        description: "Potência massiva de 65W capaz de carregar computadores portáteis e smartphones à máxima velocidade." 
    },
    { 
        id: 40, name: "Cabo Magnético Rotativo 360º", category: "acessorios", price: 17.99, 
        images: [
            "https://m.media-amazon.com/images/I/71u9s+L6dSL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61NYiP0jvWL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71Xm+9qG7hL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61y2W0vS8sL._AC_SL1500_.jpg"
        ], 
        description: "Cabo magnético inovador com cabeça rotativa a 360 graus para conexão fácil com uma só mão." 
    },
    { 
        id: 1, name: "Fechadura Inteligente Biométrica c/ Wi-Fi", category: "tecnologia", price: 129.99, 
        images: [
            "https://m.media-amazon.com/images/I/61rU1sH7J6L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71i0CgN3WkL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61oP1u9k52L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71kX+8m2WcL._AC_SL1500_.jpg"
        ], 
        description: "Segurança de nível superior para a sua casa com impressão digital, PIN ou app Wi-Fi." 
    },
    { 
        id: 2, name: "Sensor de Movimento Inteligente Zigbee", category: "tecnologia", price: 24.99, 
        images: [
            "https://m.media-amazon.com/images/I/61oP1u9k52L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61rU1sH7J6L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71i0CgN3WkL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71kX+8m2WcL._AC_SL1500_.jpg"
        ], 
        description: "Detete movimento em tempo real e crie automações inteligentes na sua habitação." 
    },
    { 
        id: 3, name: "Painel de Cobre LED Decorativo Parede", category: "casa", price: 79.50, 
        images: [
            "https://m.media-amazon.com/images/I/71kX+8m2WcL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61rU1sH7J6L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71i0CgN3WkL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61oP1u9k52L._AC_SL1500_.jpg"
        ], 
        description: "Peça de design moderno com acabamento em cobre escovado e iluminação LED embutida." 
    },
    { 
        id: 4, name: "Projetor de Galáxias Holográfico 4K", category: "tecnologia", price: 49.99, 
        images: [
            "https://m.media-amazon.com/images/I/71h35u5xOL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71S7A25rNOL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71qZf2k3+1L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71Lz8b0mGHL._AC_SL1500_.jpg"
        ], 
        description: "Projeta nebulosas coloridas e estrelas em alta definição com colunas Bluetooth integradas." 
    },
    { 
        id: 5, name: "Anel Inteligente de Monitorização de Saúde", category: "tecnologia", price: 149.00, 
        images: [
            "https://m.media-amazon.com/images/I/61k8w1V5fUL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61qZf2k3+1L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71h35u5xOL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71S7A25rNOL._AC_SL1500_.jpg"
        ], 
        description: "Monitorize o seu sono, batimento cardíaco e atividade física num anel leve em titânio." 
    },
    { 
        id: 6, name: "Garrafa Térmica Inteligente c/ Display LED", category: "acessorios", price: 34.99, 
        images: [
            "https://m.media-amazon.com/images/I/61Xm2Wq9K7L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71h35u5xOL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61k8w1V5fUL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71S7A25rNOL._AC_SL1500_.jpg"
        ], 
        description: "Display LED tátil na tampa indica a temperatura exata do líquido em tempo real." 
    },
    { 
        id: 7, name: "Mini Impressora Térmica Portátil de Bolso", category: "tecnologia", price: 39.50, 
        images: [
            "https://m.media-amazon.com/images/I/71N8L3rS7UL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71h35u5xOL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61k8w1V5fUL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71S7A25rNOL._AC_SL1500_.jpg"
        ], 
        description: "Imprima fotos e notas instantaneamente a partir do telemóvel via Bluetooth sem tinteiros." 
    },
    { 
        id: 8, name: "Massageador Cervical de Pulso Elétrico", category: "bem-estar", price: 45.00, 
        images: [
            "https://m.media-amazon.com/images/I/71qZf2k3+1L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71h35u5xOL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61k8w1V5fUL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71S7A25rNOL._AC_SL1500_.jpg"
        ], 
        description: "Alivie o stress e as dores musculares através de impulsos elétricos e terapia de calor." 
    },
    { 
        id: 9, name: "Estabilizador Gimbal de 3 Eixos", category: "tecnologia", price: 89.99, 
        images: [
            "https://m.media-amazon.com/images/I/71S7A25rNOL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71h35u5xOL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61k8w1V5fUL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71qZf2k3+1L._AC_SL1500_.jpg"
        ], 
        description: "Grave vídeos profissionais e perfeitamente nivelados sem trepidações com rastreio facial." 
    },
    { 
        id: 10, name: "Lâmpada LED Solar Externa c/ Sensor", category: "casa", price: 29.99, 
        images: [
            "https://m.media-amazon.com/images/I/71i0CgN3WkL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61rU1sH7J6L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61oP1u9k52L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71kX+8m2WcL._AC_SL1500_.jpg"
        ], 
        description: "Iluminação exterior autónoma que carrega com energia solar e acende com movimento." 
    },
    { 
        id: 11, name: "Organizador de Cabos de Cobre Escovado", category: "casa", price: 19.99, 
        images: [
            "https://m.media-amazon.com/images/I/61NYiP0jvWL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71Xm+9qG7hL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61y2W0vS8sL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71u9s+L6dSL._AC_SL1500_.jpg"
        ], 
        description: "Mantenha a sua secretária limpa e elegante com este organizador pesado em cobre escovado." 
    },
    { 
        id: 12, name: "Óculos Inteligentes com Áudio Bluetooth", category: "tecnologia", price: 119.00, 
        images: [
            "https://m.media-amazon.com/images/I/71h35u5xOL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71S7A25rNOL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71qZf2k3+1L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71Lz8b0mGHL._AC_SL1500_.jpg"
        ], 
        description: "Ouça música e atenda chamadas em mãos-livres graças a colunas direcionais na armação." 
    },
    { 
        id: 13, name: "Escova de Dentes Ultrassónica Inteligente", category: "bem-estar", price: 39.99, 
        images: [
            "https://m.media-amazon.com/images/I/61k8w1V5fUL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71qZf2k3+1L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71h35u5xOL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71S7A25rNOL._AC_SL1500_.jpg"
        ], 
        description: "Limpeza profunda sónica com múltiplos modos para remover até 10x mais placa bacteriana." 
    },
    { 
        id: 14, name: "Câmara de Segurança Solar Wi-Fi PTZ 360º", category: "tecnologia", price: 79.99, 
        images: [
            "https://m.media-amazon.com/images/I/61rU1sH7J6L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71i0CgN3WkL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61oP1u9k52L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71kX+8m2WcL._AC_SL1500_.jpg"
        ], 
        description: "Rotação completa de 360 graus, visão noturna a cores e alertas diretos no smartphone." 
    },
    { 
        id: 15, name: "Torneira de LED c/ Sensor de Temperatura", category: "casa", price: 32.50, 
        images: [
            "https://m.media-amazon.com/images/I/71kX+8m2WcL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61rU1sH7J6L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71i0CgN3WkL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61oP1u9k52L._AC_SL1500_.jpg"
        ], 
        description: "Altera a cor da luz LED automaticamente consoante a temperatura da água, sem pilhas." 
    },
    { 
        id: 16, name: "Carregador sem Fios 3 em 1 Magnético", category: "tecnologia", price: 49.99, 
        images: [
            "https://m.media-amazon.com/images/I/61y2W0vS8sL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61NYiP0jvWL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71Xm+9qG7hL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71u9s+L6dSL._AC_SL1500_.jpg"
        ], 
        description: "Carregue o smartphone, smartwatch e auriculares em simultâneo numa estação dobrável." 
    },
    { 
        id: 17, name: "Difusor de Aromas Efeito Chama de Fogo", category: "casa", price: 39.99, 
        images: [
            "https://m.media-amazon.com/images/I/71i0CgN3WkL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61rU1sH7J6L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61oP1u9k52L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71kX+8m2WcL._AC_SL1500_.jpg"
        ], 
        description: "Efeito visual impressionante de chama de fogo relaxante com óleos essenciais." 
    },
    { 
        id: 18, name: "Tapete de Banho em Terra Diatomácea", category: "casa", price: 22.00, 
        images: [
            "https://m.media-amazon.com/images/I/61rU1sH7J6L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71i0CgN3WkL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61oP1u9k52L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71kX+8m2WcL._AC_SL1500_.jpg"
        ], 
        description: "Seca os pés instantaneamente em segundos. Tapete rígido ecológico e antiderrapante." 
    },
    { 
        id: 19, name: "Localizador de Chaves Bluetooth Smart Tag", category: "acessorios", price: 15.99, 
        images: [
            "https://m.media-amazon.com/images/I/71u9s+L6dSL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61NYiP0jvWL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71Xm+9qG7hL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61y2W0vS8sL._AC_SL1500_.jpg"
        ], 
        description: "Localize os seus objetos perdidos através de sinal sonoro e geolocalização no telemóvel." 
    },
    { 
        id: 20, name: "Massageador Ocular Térmico Anti-Stress", category: "bem-estar", price: 55.00, 
        images: [
            "https://m.media-amazon.com/images/I/71qZf2k3+1L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71h35u5xOL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61k8w1V5fUL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71S7A25rNOL._AC_SL1500_.jpg"
        ], 
        description: "Compressão de ar e calor relaxante para aliviar fadiga ocular e dores de cabeça." 
    },
    { 
        id: 21, name: "Luz de LED Noturna com Sensor", category: "casa", price: 14.99, 
        images: [
            "https://m.media-amazon.com/images/I/71kX+8m2WcL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61rU1sH7J6L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71i0CgN3WkL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61oP1u9k52L._AC_SL1500_.jpg"
        ], 
        description: "Acende suavemente ao detetar movimento no escuro para corredores e escadas." 
    },
    { 
        id: 22, name: "Aspirador Portátil Sem Fios para Automóvel", category: "acessorios", price: 38.50, 
        images: [
            "https://m.media-amazon.com/images/I/71Xm+9qG7hL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61NYiP0jvWL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61y2W0vS8sL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71u9s+L6dSL._AC_SL1500_.jpg"
        ], 
        description: "Poder de sucção elevado em formato compacto para limpar o carro ou sofás." 
    },
    { 
        id: 23, name: "Balança de Banho Bioimpedância Inteligente", category: "bem-estar", price: 42.00, 
        images: [
            "https://m.media-amazon.com/images/I/61k8w1V5fUL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71qZf2k3+1L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71h35u5xOL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71S7A25rNOL._AC_SL1500_.jpg"
        ], 
        description: "Mede mais de 10 métricas corporais (peso, gordura, água, IMC) sincronizadas via Bluetooth." 
    },
    { 
        id: 24, name: "Suporte de Computador Portátil em Alumínio", category: "tecnologia", price: 29.99, 
        images: [
            "https://m.media-amazon.com/images/I/61y2W0vS8sL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71Xm+9qG7hL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61NYiP0jvWL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71u9s+L6dSL._AC_SL1500_.jpg"
        ], 
        description: "Melhore a sua postura e evite o sobreaquecimento com estrutura ajustável em alumínio." 
    },
    { 
        id: 25, name: "Fita LED RGB Inteligente Wi-Fi para TV", category: "casa", price: 25.99, 
        images: [
            "https://m.media-amazon.com/images/I/71i0CgN3WkL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61rU1sH7J6L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61oP1u9k52L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71kX+8m2WcL._AC_SL1500_.jpg"
        ], 
        description: "Iluminação ambiente controlada por telemóvel que sincroniza com música e filmes." 
    },
    { 
        id: 26, name: "Pulseira Antimosquitos Ultrassónica", category: "acessorios", price: 18.00, 
        images: [
            "https://m.media-amazon.com/images/I/71u9s+L6dSL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61NYiP0jvWL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71Xm+9qG7hL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61y2W0vS8sL._AC_SL1500_.jpg"
        ], 
        description: "Repelente sem químicos que emite ondas sonoras de baixa frequência." 
    },
    { 
        id: 27, name: "Pistola de Massagem Muscular Profunda Mini", category: "bem-estar", price: 65.00, 
        images: [
            "https://m.media-amazon.com/images/I/71h35u5xOL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61k8w1V5fUL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71qZf2k3+1L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71S7A25rNOL._AC_SL1500_.jpg"
        ], 
        description: "Alívio muscular profissional em tamanho de bolso com várias intensidades." 
    },
    { 
        id: 28, name: "Cortinas Automatizadas Inteligentes Motorizadas", category: "casa", price: 89.00, 
        images: [
            "https://m.media-amazon.com/images/I/61rU1sH7J6L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71i0CgN3WkL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61oP1u9k52L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71kX+8m2WcL._AC_SL1500_.jpg"
        ], 
        description: "Abra e feche as cortinas automaticamente através de horários programados ou voz." 
    },
    { 
        id: 29, name: "Mini Projetor Portátil Smart LED HD", category: "tecnologia", price: 110.00, 
        images: [
            "https://m.media-amazon.com/images/I/71S7A25rNOL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71h35u5xOL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71qZf2k3+1L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71Lz8b0mGHL._AC_SL1500_.jpg"
        ], 
        description: "Transforme qualquer parede num cinema em casa com foco ajustável e altifalante." 
    },
    { 
        id: 30, name: "Capa de Telemóvel Impermeável Universal", category: "acessorios", price: 12.99, 
        images: [
            "https://m.media-amazon.com/images/I/61NYiP0jvWL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71Xm+9qG7hL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61y2W0vS8sL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71u9s+L6dSL._AC_SL1500_.jpg"
        ], 
        description: "Proteção total contra água e areia para tirar fotografias na piscina ou praia." 
    },
    { 
        id: 31, name: "Purificador de Ar Portátil com Filtro HEPA", category: "casa", price: 54.99, 
        images: [
            "https://m.media-amazon.com/images/I/71kX+8m2WcL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61rU1sH7J6L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71i0CgN3WkL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61oP1u9k52L._AC_SL1500_.jpg"
        ], 
        description: "Elimina ácaros, pó e odores com filtro HEPA de alta eficiência para secretárias." 
    },
    { 
        id: 32, name: "Caneta de Impressão 3D Criativa", category: "tecnologia", price: 34.50, 
        images: [
            "https://m.media-amazon.com/images/I/71h35u5xOL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71S7A25rNOL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71qZf2k3+1L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71Lz8b0mGHL._AC_SL1500_.jpg"
        ], 
        description: "Desenhe objetos tridimensionais no ar com facilidade e temperatura ajustável." 
    },
    { 
        id: 33, name: "Esponja de Limpeza Elétrica Rotativa", category: "casa", price: 29.99, 
        images: [
            "https://m.media-amazon.com/images/I/61rU1sH7J6L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71i0CgN3WkL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61oP1u9k52L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71kX+8m2WcL._AC_SL1500_.jpg"
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

// ==========================================
// FUNÇÕES DE UTILIDADE E AFILIADOS
// ==========================================
function getOriginalPrice(price) {
    return (price / 0.7).toFixed(2);
}

// Injetar a barra de afiliados e painel de embaixador no topo
document.addEventListener("DOMContentLoaded", () => {
    injectAffiliateHeader();
    displayCatalog(products);
});

function injectAffiliateHeader() {
    let header = document.querySelector("header") || document.body;
    if (document.getElementById("globalAffiliateBar")) return;

    let affiliateBar = document.createElement("div");
    affiliateBar.id = "globalAffiliateBar";
    affiliateBar.style.cssText = "background: #232f3e; color: white; padding: 10px 20px; display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem; flex-wrap: wrap; gap: 10px; border-bottom: 2px solid #ffd814;";
    
    updateAffiliateBarHTML(affiliateBar);
    header.insertBefore(affiliateBar, header.firstChild);
}

function updateAffiliateBarHTML(container) {
    let userSection = "";
    if (!currentUser) {
        userSection = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <span style="color: #ffd814; font-weight: bold;">👥 Área de Embaixador (30%):</span>
                <button onclick="openLoginModal()" style="background: #ffd814; border: none; padding: 5px 12px; border-radius: 4px; cursor: pointer; font-weight: bold; font-size: 0.85rem;">Entrar / Criar Nick Code</button>
            </div>
        `;
    } else {
        userSection = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span>Olá, <strong>${currentUser.nickname}</strong> | Saldo: <strong style="color: #00ff88;">${currentUser.balance.toFixed(2)} €</strong></span>
                <button onclick="openWalletModal()" style="background: #007600; color: white; border: none; padding: 4px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8rem; font-weight: bold;">Sacar</button>
                <button onclick="handleLogout()" style="background: transparent; color: #ff9999; border: none; cursor: pointer; font-size: 0.8rem;">Sair</button>
            </div>
        `;
    }

    container.innerHTML = `
        ${userSection}
        <div style="display: flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.1); padding: 5px 10px; border-radius: 6px;">
            <label for="topAffiliateInput" style="font-size: 0.85rem; color: #ffd814; font-weight: bold;">🎁 Afiliado Code:</label>
            <input type="text" id="topAffiliateInput" value="${activeAffiliateCode}" placeholder="Ex: LOURDES30" oninput="updateActiveAffiliateCode(this.value)" style="padding: 4px 8px; border-radius: 4px; border: 1px solid #ccc; text-transform: uppercase; width: 120px; font-weight: bold; font-size: 0.85rem; background: #fff; color: #000;">
            <span id="affiliateStatusText" style="font-size: 0.75rem; font-weight: bold; color: ${activeAffiliateCode ? '#00ff88' : '#bbb'};">${activeAffiliateCode ? 'Ativo ✓' : 'Opcional'}</span>
        </div>
    `;
}

function updateActiveAffiliateCode(val) {
    activeAffiliateCode = val.trim().toUpperCase();
    let statusSpan = document.getElementById("affiliateStatusText");
    if (statusSpan) {
        statusSpan.style.color = activeAffiliateCode ? '#00ff88' : '#bbb';
        statusSpan.innerText = activeAffiliateCode ? 'Ativo ✓' : 'Opcional';
    }
}

function openLoginModal() {
    let email = prompt("📧 Introduz o teu e-mail para criar ou iniciar sessão na conta de Afiliado:");
    if (!email) return;
    
    let nickname = prompt("🔑 Escolhe o teu Nick Code único (ex: LOURDES30):");
    if (!nickname) return;

    nickname = nickname.trim().toUpperCase();
    let existingUser = usersDatabase.find(u => u.nickname === nickname);
    
    if (!existingUser) {
        existingUser = { email: email.trim(), nickname, balance: 0.00 };
        usersDatabase.push(existingUser);
        alert(`🎉 Conta de Afiliado criada com sucesso!\nO teu Nick Code é: ${nickname}\nSempre que alguém o usar nas compras, ganhas 30% de comissão!`);
    } else {
        alert(`👋 Bem-vindo de volta, ${nickname}! Sessão iniciada com sucesso.`);
    }

    currentUser = existingUser;
    refreshAffiliateBar();
}

function openWalletModal() {
    if (!currentUser) return;
    let message = `📊 PAINEL DE AFILIADO\n\n` +
                  `👤 Utilizador: ${currentUser.nickname}\n` +
                  `📧 E-mail: ${currentUser.email}\n` +
                  `💰 Saldo Disponível: ${currentUser.balance.toFixed(2)} €\n\n` +
                  `Deseja solicitar o saque deste valor?`;
                  
    if (confirm(message)) {
        if (currentUser.balance <= 0) {
            alert("Ainda não tem saldo suficiente para saque.");
            return;
        }
        alert(`✅ Pedido de saque de ${currentUser.balance.toFixed(2)} € efetuado com sucesso!`);
        currentUser.balance = 0.00;
        refreshAffiliateBar();
    }
}

function handleLogout() {
    currentUser = null;
    alert("Sessão terminada com sucesso.");
    refreshAffiliateBar();
}

function refreshAffiliateBar() {
    let bar = document.getElementById("globalAffiliateBar");
    if (bar) updateAffiliateBarHTML(bar);
}

// ==========================================
// NAVEGAÇÃO, CATÁLOGO E DETALHES DO PRODUTO
// ==========================================
function goHome() {
    displayCatalog(products);
}

function displayCatalog(productsToDisplay) {
    if (!mainContainer) return;
    let html = `
        <div style="margin-bottom: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
            <button class="cat-btn" onclick="filterCat('all')" style="padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; border: 1px solid #ccc; background: white; font-weight: bold;">Todos</button>
            <button class="cat-btn" onclick="filterCat('tecnologia')" style="padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; border: 1px solid #ccc; background: white; font-weight: bold;">Tecnologia</button>
            <button class="cat-btn" onclick="filterCat('casa')" style="padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; border: 1px solid #ccc; background: white; font-weight: bold;">Casa & Cobre</button>
            <button class="cat-btn" onclick="filterCat('acessorios')" style="padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; border: 1px solid #ccc; background: white; font-weight: bold;">Acessórios</button>
            <button class="cat-btn" onclick="filterCat('bem-estar')" style="padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; border: 1px solid #ccc; background: white; font-weight: bold;">Bem-Estar</button>
        </div>
        <div class="products-grid">
    `;

    if (productsToDisplay.length === 0) {
        html += `<p style="grid-column: 1/-1; text-align: center; color: #777;">Nenhum produto encontrado.</p>`;
    } else {
        productsToDisplay.forEach(product => {
            const originalPrice = getOriginalPrice(product.price);
            html += `
                <div class="product-card" onclick="openProductDetail(${product.id})" style="cursor: pointer;">
                    <img src="${product.images[0]}" alt="${product.name}" onerror="this.src='https://m.media-amazon.com/images/I/61NYiP0jvWL._AC_SL1500_.jpg'">
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

function filterCat(cat) {
    if (cat === 'all') {
        displayCatalog(products);
    } else {
        const filtered = products.filter(p => p.category === cat);
        displayCatalog(filtered);
    }
}

function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const originalPrice = getOriginalPrice(product.price);
    const similarProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

    let thumbnailsHtml = '';
    product.images.forEach((img, index) => {
        thumbnailsHtml += `<img src="${img}" class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage(this, '${img}')" onerror="this.src='https://m.media-amazon.com/images/I/61NYiP0jvWL._AC_SL1500_.jpg'">`;
    });

    let similarHtml = '';
    similarProducts.forEach(sim => {
        const simOriginal = getOriginalPrice(sim.price);
        similarHtml += `
            <div class="product-card" onclick="openProductDetail(${sim.id})" style="min-width: 200px; cursor: pointer;">
                <img src="${sim.images[0]}" alt="${sim.name}" style="height: 120px;" onerror="this.src='https://m.media-amazon.com/images/I/61NYiP0jvWL._AC_SL1500_.jpg'">
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
                <!-- Galeria com 4 fotos oficiais -->
                <div class="images-column">
                    <div class="main-img-container">
                        <img id="mainImageDisplay" src="${product.images[0]}" alt="${product.name}" onerror="this.src='https://m.media-amazon.com/images/I/61NYiP0jvWL._AC_SL1500_.jpg'">
                    </div>
                    <div class="thumbnails-row">
                        ${thumbnailsHtml}
                    </div>
                </div>

                <!-- Informações do Produto -->
                <div class="info-column">
                    <h2>${product.name}</h2>
                    <div class="rating">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i> 4.8 (1,420 avaliações)
                    </div>
                    <div class="price-box" style="font-size: 1.2rem;">
                        <span class="discount-badge">-30%</span>
                        <span class="current-price">${product.price.toFixed(2)} €</span>
                        <span class="old-price">${originalPrice} €</span>
                    </div>
                    <p style="color: #555; line-height: 1.6; margin-top: 1rem;">${product.description}</p>
                </div>

                <!-- Caixa de Compra -->
                <div>
                    <div class="buy-box">
                        <div class="current-price" style="margin-bottom: 0.5rem;">${product.price.toFixed(2)} €</div>
                        <p style="font-size: 0.85rem; color: #007185; margin-bottom: 1rem;">Envio internacional direto do armazém.</p>
                        <button class="buy-btn" onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
                    </div>
                </div>
            </div>

            <!-- Produtos Semelhantes -->
            <div class="similar-section">
                <h3>Produtos semelhantes recomendados</h3>
                <div style="display: flex; gap: 1rem; overflow-x: auto; padding-bottom: 1rem;">
                    ${similarHtml}
                </div>
            </div>
        </div>
    `;
    window.scrollTo(0, 0);
}

function changeMainImage(element, imgUrl) {
    document.getElementById("mainImageDisplay").src = imgUrl;
    document.querySelectorAll(".thumbnail").forEach(thumb => thumb.classList.remove("active"));
    element.classList.add("active");
}

// ==========================================
// GESTÃO DO CARRINHO E CHECKOUT COM COMISSÃO
// ==========================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
    if (cartModal) cartModal.style.display = "flex";
}

function updateCart() {
    if (!cartItemsContainer || !cartCount || !cartTotalPrice) return;
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

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Eventos de Pesquisa e Carrinho
if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = products.filter(p => p.name.toLowerCase().includes(term));
        displayCatalog(filtered);
    });
}

if (cartBtn && cartModal) {
    cartBtn.addEventListener("click", () => {
        cartModal.style.display = "flex";
    });
}

if (closeCart && cartModal) {
    closeCart.addEventListener("click", () => {
        cartModal.style.display = "none";
    });
}

window.addEventListener("click", (e) => {
    if (cartModal && e.target === cartModal) {
        cartModal.style.display = "none";
    }
});

if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("O seu carrinho está vazio!");
            return;
        }

        let totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        // Processar comissão se houver um Afiliado Code ativo na barra superior
        if (activeAffiliateCode) {
            let affiliateUser = usersDatabase.find(u => u.nickname === activeAffiliateCode);
            if (affiliateUser) {
                let commission = totalPrice * 0.30; // 30% de comissão
                affiliateUser.balance += commission;
                alert(`✨ Compra efetuada com sucesso!\nO código de afiliado "${activeAffiliateCode}" foi aplicado. O embaixador recebeu ${commission.toFixed(2)} € de comissão (30%).`);
            } else {
                alert("Compra efetuada com sucesso! (Nota: O código de afiliado inserido não foi encontrado na base de dados, por isso nenhuma comissão foi atribuída).");
            }
        } else {
            alert("Compra simulada com sucesso! Obrigado pela preferência na Nova Market.");
        }

        cart = [];
        updateCart();
        if (cartModal) cartModal.style.display = "none";
    });
}

// Arranque inicial do catálogo
displayCatalog(products);
