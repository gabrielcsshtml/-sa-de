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

// ===============================
// CALCULADORA DE NUTRIENTES
// ===============================
const alimentos = {
  nutella: { acucar: 22, gordura: 22, sal: 0.3 },
  milka: { acucar: 56, gordura: 30, sal: 0.3 },
  bolinho: { acucar: 25, gordura: 15, sal: 0.4 },
  achocolatado: { acucar: 22, gordura: 2, sal: 0.2 },
  croissant1: { acucar: 18, gordura: 20, sal: 0.6 },
  croissant2: { acucar: 6, gordura: 17, sal: 0.5 },
  travesseiro: { acucar: 30, gordura: 15, sal: 0.3 },
  filipinos: { acucar: 45, gordura: 25, sal: 0.5 },
  pringles: { acucar: 1, gordura: 10, sal: 0.5 },
  doritos: { acucar: 1, gordura: 8, sal: 0.6 },
  cheetos: { acucar: 2, gordura: 7, sal: 0.4 },
  monster: { acucar: 55, gordura: 0, sal: 0.4 },
  coca: { acucar: 35, gordura: 0, sal: 0 }
};

const calcularBtn = document.getElementById('calcular');

calcularBtn.addEventListener('click', () => {
  const comida = document.getElementById('comida').value;
  const quantidade = Number(document.getElementById('quantidade').value);

  if(!comida || quantidade <= 0) {
    alert("Escolha uma comida válida e quantidade maior que 0!");
    return;
  }

  const dados = alimentos[comida];
  document.getElementById('res-acucar').innerText = (dados.acucar * quantidade).toFixed(1);
  document.getElementById('res-gordura').innerText = (dados.gordura * quantidade).toFixed(1);
  document.getElementById('res-sal').innerText = (dados.sal * quantidade).toFixed(1);
});
