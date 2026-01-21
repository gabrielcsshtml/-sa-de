// ===============================
// Função para abrir/fechar "Saiba Mais" com transição suave
// ===============================
function toggleInfo(btn) {
  const info = btn.nextElementSibling;
  info.classList.toggle('ativo');
  if(info.classList.contains('ativo')) {
    info.style.maxHeight = info.scrollHeight + 'px';
  } else {
    info.style.maxHeight = '0';
  }
}

// ===============================
// Função para animar as barras de nutrientes (0g com barra mínima)
// ===============================
function animateBars() {
  const barras = document.querySelectorAll('.barra');

  barras.forEach((bar, index) => {
    const width = bar.getAttribute('data-width');
    const valorNumerico = parseFloat(width);

    setTimeout(() => {
      if(valorNumerico === 0) {
        bar.style.width = "12%";
        bar.style.opacity = "0.6";
      } else {
        bar.style.width = width;
        bar.style.opacity = "1";
      }
    }, index * 100); // efeito cascata
  });
}

// ===============================
// Adiciona evento aos botões "Saiba Mais"
// ===============================
document.querySelectorAll('.btn-saibamais').forEach(btn => {
  btn.addEventListener('click', () => toggleInfo(btn));
});

// ===============================
// Executa animação quando a página termina de carregar
// ===============================
window.addEventListener('load', animateBars);

// ===============================
// SLIDER FUNCIONAL COM LOOP INFINITO
// ===============================
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
const track = document.querySelector('.slider-track');
const cards = track.querySelectorAll('.card');
const gap = 25;

let currentIndex = 0;

function getCardWidth() {
  return cards[0].offsetWidth + gap;
}

function updateSlider() {
  const cardWidth = getCardWidth();
  const totalWidth = track.scrollWidth;
  const visibleWidth = track.parentElement.offsetWidth;

  // Loop infinito: se passar do último, volta ao início
  if(currentIndex > cards.length - Math.floor(visibleWidth / cardWidth)) {
    currentIndex = 0;
  }
  if(currentIndex < 0) {
    currentIndex = cards.length - Math.floor(visibleWidth / cardWidth);
  }

  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
}

// ===============================
// Eventos das setas
// ===============================
nextBtn.addEventListener('click', () => {
  currentIndex++;
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  currentIndex--;
  updateSlider();
});

// ===============================
// Ajuste ao redimensionar a tela
// ===============================
window.addEventListener('resize', updateSlider);

// ===============================
// Microanimação nas setas ao passar o mouse
// ===============================
[prevBtn, nextBtn].forEach(btn => {
  btn.addEventListener('mouseenter', () => btn.style.transform = "translateY(-50%) scale(1.1)");
  btn.addEventListener('mouseleave', () => btn.style.transform = "translateY(-50%) scale(1)");
});
