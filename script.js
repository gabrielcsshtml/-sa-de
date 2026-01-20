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
// Função para animar as barras de nutrientes
// ===============================
function animateBars() {
  const barras = document.querySelectorAll('.barra');
  barras.forEach((bar, index) => {
    const width = bar.getAttribute('data-width');
    setTimeout(() => {
      bar.style.width = width;
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
// SLIDER FUNCIONAL
// ===============================
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
const track = document.querySelector('.slider-track');

let currentIndex = 0;

function updateSlider() {
  const cardWidth = track.querySelector('.card').offsetWidth + 20; // card + gap
  track.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) currentIndex--;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  const maxIndex = track.children.length - Math.floor(track.parentElement.offsetWidth / (track.querySelector('.card').offsetWidth + 20));
  if (currentIndex < maxIndex) currentIndex++;
  updateSlider();
});

window.addEventListener('resize', updateSlider);
