/* ===============================
   SLIDER DE CARDS
================================ */

const sliderTrack = document.querySelector(".slider-track");
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");

let slideIndex = 0;

// Calcula o tamanho do slide visível
function getSlideWidth() {
  const card = document.querySelector(".slider-track .card");
  if (!card) return 0;
  return card.offsetWidth + 25; // width + gap
}

// Atualiza a posição do slider
function updateSlider() {
  const slideWidth = getSlideWidth();
  sliderTrack.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

// Botão próximo
nextBtn.addEventListener("click", () => {
  const cards = document.querySelectorAll(".slider-track .card").length;
  const visibleCards = Math.floor(document.querySelector(".slider-container").offsetWidth / getSlideWidth());
  if (slideIndex < cards - visibleCards) {
    slideIndex++;
    updateSlider();
  }
});

// Botão anterior
prevBtn.addEventListener("click", () => {
  if (slideIndex > 0) {
    slideIndex--;
    updateSlider();
  }
});

// Atualiza slider ao redimensionar a tela
window.addEventListener("resize", updateSlider);

// ===============================
// BOTÃO “SAIBA MAIS” NOS CARDS
// ===============================
const btnsSaibaMais = document.querySelectorAll(".btn-saibamais");

btnsSaibaMais.forEach(btn => {
  btn.addEventListener("click", () => {
    const info = btn.closest(".card").querySelector(".info-extra");
    info.classList.toggle("ativo");
  });
});
