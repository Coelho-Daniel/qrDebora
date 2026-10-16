// Lista direta com as 24 personalidades
const personalities = [
  {
    id: 1,
    title: "Casual do dia",
    icon: "fa-regular fa-sun",
    image: "foto1.jpeg",
    /*desc: "Perfeito para uma caminhada descontraída pelo centro histórico ou ir tomar um café."*/
  },
  {
    id: 2,
    title: "Saída à noite",
    icon: "fa-solid fa-moon",
    image: "foto2.jpeg",
    /*desc: "Quem disse que o casaco não vai bem com vestido preto e as luzes da cidade?"*/
  },
  {
    id: 3,
    title: "Aventureira",
    icon: "fa-solid fa-mountain",
    image: "foto3.jpeg",
    //desc: "Gorrinho quente, montanha no horizonte e vontade de subir até ao cume."
  },
  {
    id: 4,
    title: "Chique",
    icon: "fa-solid fa-wine-glass",
    image: "foto4.jpeg",
    //desc: "Echarpe aconchegante, óculos escuros e glamour descontraído."
  },
  {
    id: 5,
    title: "Conforto em casa",
    icon: "fa-solid fa-mug-hot",
    image: "foto5.jpeg",
    //desc: "Uma caneca bem quente nas mãos e o melhor abraço do mundo."
  },
  {
    id: 6,
    title: "Praia (com estilo)",
    icon: "fa-solid fa-water",
    image: "foto6.jpeg",
    //desc: "O mar tem outra magia no outono e inverno quando estás bem aconchegada."
  },
  {
    id: 7,
    title: "Treino? Também!",
    icon: "fa-solid fa-dumbbell",
    image: "foto7.jpeg",
    //desc: "Com auscultadores e pronta para queimar calorias logo pela manhã."
  },
  {
    id: 8,
    title: "Turista profissional",
    icon: "fa-solid fa-camera",
    image: "foto8.jpeg",
    //desc: "Porque cada cidade merece ser explorada com estilo, curiosidade e passos sem fim."
  },
  {
    id: 9,
    title: "Happy hour",
    icon: "fa-solid fa-martini-glass-citrus",
    image: "foto9.jpeg",
    //desc: "Cocktails, amigos e boa conversa ao final da tarde."
  },
  {
    id: 10,
    title: "Leitura & casaco",
    icon: "fa-solid fa-book-open",
    image: "foto10.jpeg",
    //desc: "Mergulhar nas páginas do livro favorito no jardim ou na esplanada."
  },
  {
    id: 11,
    title: "Amiga dos patudos",
    icon: "fa-solid fa-paw",
    image: "foto11.jpeg",
    //desc: "Passear o cão nunca foi tão fofo e quente."
  }/*,
  {
    id: 12,
    title: "Modo caos",
    icon: "fa-regular fa-face-grin-tongue-wink",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80",
    desc: "Careta na cara, paz e amor com os dedos e zero paciência para o aborrecimento."
  },
  {
    id: 13,
    title: "Café de Domingo",
    icon: "fa-solid fa-mug-saucer",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=80",
    desc: "Ouvir música e beber um café quente com calma."
  },
  {
    id: 14,
    title: "Passeio à Chuva",
    icon: "fa-solid fa-cloud-rain",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=80",
    desc: "Capuz puxado e protegida de qualquer temporal."
  },
  {
    id: 15,
    title: "Jantar Romântico",
    icon: "fa-solid fa-heart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=80",
    desc: "A combinação certa de sofisticação e carinho."
  },
  {
    id: 16,
    title: "Roadtrip",
    icon: "fa-solid fa-car-side",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&auto=format&fit=crop&q=80",
    desc: "Janela aberta, vento no rosto e rota sem destino."
  },
  {
    id: 17,
    title: "Compras com pressa",
    icon: "fa-solid fa-bag-shopping",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80",
    desc: "Rápida e prática, com os bolsos cheios do essencial."
  },
  {
    id: 18,
    title: "Dia de Cinema",
    icon: "fa-solid fa-film",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&auto=format&fit=crop&q=80",
    desc: "Pipocas na mão e o aconchego ideal para uma sessão dupla."
  },
  {
    id: 19,
    title: "Look de Concerto",
    icon: "fa-solid fa-music",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&auto=format&fit=crop&q=80",
    desc: "Saltar e cantar ao som da tua banda favorita."
  },
  {
    id: 20,
    title: "Trabalho Remoto",
    icon: "fa-solid fa-laptop",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80",
    desc: "Trabalhar no café com todo o conforto e estilo."
  },
  {
    id: 21,
    title: "Pôr do Sol",
    icon: "fa-solid fa-sun",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=80",
    desc: "A melhor hora do dia com a luz dourada perfeita."
  },
  {
    id: 22,
    title: "Corrida no Parque",
    icon: "fa-solid fa-person-running",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80",
    desc: "Para o aquecimento antes do sprint."
  },
  {
    id: 23,
    title: "Sessão Fotográfica",
    icon: "fa-solid fa-camera-retro",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=80",
    desc: "A modelo perfeita e o casaco que brilha em cada pose."
  },
  {
    id: 24,
    title: "Super Diva",
    icon: "fa-solid fa-star",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80",
    desc: "Quando o casaco é apenas um detalhe do teu brilho próprio!"
  }*/
];

let currentModalIndex = 0;
const galleryGrid = document.getElementById('galleryGrid');

const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const modalImg = document.getElementById('modalImg');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const currentIndexSpan = document.getElementById('currentIndex');
const totalItemsSpan = document.getElementById('totalItems');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Renderizar Galeria Completa Direta
function renderGallery() {
  galleryGrid.innerHTML = '';

  personalities.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
      </div>
      <div class="card-label">
        <i class="${item.icon}"></i>
        <span>${item.title}</span>
      </div>
    `;
    card.addEventListener('click', () => openModal(index));
    galleryGrid.appendChild(card);
  });
}

// Modal Pop-up
function openModal(index) {
  currentModalIndex = index;
  updateModalContent();
  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

function updateModalContent() {
  const item = personalities[currentModalIndex];
  if (!item) return;

  modalImg.src = item.image;
  modalIcon.className = item.icon;
  modalTitle.textContent = item.title;
  modalDesc.textContent = item.desc;
  currentIndexSpan.textContent = currentModalIndex + 1;
  totalItemsSpan.textContent = personalities.length;
}

function prevItem() {
  if (currentModalIndex > 0) {
    currentModalIndex--;
  } else {
    currentModalIndex = personalities.length - 1;
  }
  updateModalContent();
}

function nextItem() {
  if (currentModalIndex < personalities.length - 1) {
    currentModalIndex++;
  } else {
    currentModalIndex = 0;
  }
  updateModalContent();
}

modalClose.addEventListener('click', closeModal);
prevBtn.addEventListener('click', prevItem);
nextBtn.addEventListener('click', nextItem);

modalBackdrop.addEventListener('click', (e) => {
  if (e.target === modalBackdrop) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (!modalBackdrop.classList.contains('active')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft') prevItem();
  if (e.key === 'ArrowRight') nextItem();
});

// Iniciar
renderGallery();
