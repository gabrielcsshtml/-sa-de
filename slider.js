// Seleciona elementos
const track = document.querySelector('.slider-track');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

let scrollAmount = 0;
const cardWidth = document.querySelector('.card').offsetWidth + 20; // card + gap

// Botão avançar
nextBtn.addEventListener('click', () => {
  if (scrollAmount + track.offsetWidth < track.scrollWidth) {
    scrollAmount += cardWidth * 2; // rola 2 cards por clique
    track.style.transform = `translateX(-${scrollAmount}px)`;
  }
});

// Botão voltar
prevBtn.addEventListener('click', () => {
  if (scrollAmount > 0) {
    scrollAmount -= cardWidth * 2;
    if (scrollAmount < 0) scrollAmount = 0;
    track.style.transform = `translateX(-${scrollAmount}px)`;
  }
});

// Animação das barras
window.addEventListener('load', () => {
  document.querySelectorAll('.barra').forEach(bar => {
    const width = bar.dataset.width;
    bar.style.width = width;
  });
});

// Toggle do Saiba Mais
document.querySelectorAll('.btn-saibamais').forEach(btn => {
  btn.addEventListener('click', () => {
    const info = btn.nextElementSibling;
    info.classList.toggle('ativo');
    if (info.classList.contains('ativo')) {
      info.style.maxHeight = info.scrollHeight + 'px';
    } else {
      info.style.maxHeight = '0';
    }
  });
});
