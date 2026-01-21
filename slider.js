// ===============================
// FUNÇÃO "SAIBA MAIS" SEM CORTE
// ===============================
function toggleInfo(btn) {
  const info = btn.nextElementSibling;
  if(info.style.display === 'block') {
    info.style.display = 'none';
  } else {
    info.style.display = 'block';
  }
}

// ===============================
// DEFINIÇÃO DAS BARRAS CHEIAS
// ===============================
function setFullBars() {
  const barras = document.querySelectorAll('.barra');

  barras.forEach(bar => {
    const width = bar.getAttribute('data-width') || '100%';
    bar.style.width = width;
    bar.style.opacity = '1';
  });
}

// ===============================
// EVENTO DOS BOTÕES "SAIBA MAIS"
// ===============================
document.querySelectorAll('.btn-saibamais').forEach(btn => {
  btn.addEventListener('click', () => toggleInfo(btn));
});

// ===============================
// EXECUTA AO CARREGAR A PÁGINA
// ===============================
window.addEventListener('load', () => {
  setFullBars();
  updateSlider();
});

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
  const visibleWidth = track.parentElement.offsetWidth;
  const maxIndex = cards.length - Math.floor(visibleWidth / cardWidth);

  // loop infinito
  if(currentIndex > maxIndex) currentIndex = 0;
  if(currentIndex < 0) currentIndex = maxIndex;

  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
}

// ===============================
// EVENTOS DAS SETAS
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
// AJUSTE AO REDIMENSIONAR A TELA
// ===============================
window.addEventListener('resize', updateSlider);

// ===============================
// MICROANIMAÇÃO NAS SETAS
// ===============================
[prevBtn, nextBtn].forEach(btn => {
  btn.addEventListener('mouseenter', () => btn.style.transform = "translateY(-50%) scale(1.1)");
  btn.addEventListener('mouseleave', () => btn.style.transform = "translateY(-50%) scale(1)");
});
