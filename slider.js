document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".slider-track");
  const prevBtn = document.querySelector(".slider-btn.prev");
  const nextBtn = document.querySelector(".slider-btn.next");
  const cards = document.querySelectorAll(".card");
  const gap = 20;

  let index = 0;
  let autoPlayInterval;

  function getCardWidth() {
    return cards[0].offsetWidth + gap;
  }

  function updateSlider() {
    const cardWidth = getCardWidth();
    const translateX = index * cardWidth;
    track.style.transform = `translateX(-${translateX}px)`;
    track.style.transition = 'transform 0.5s ease-in-out';
  }

  // Botões manuais
  nextBtn.addEventListener("click", () => {
    stopAutoPlay();
    const visibleCards = Math.floor(track.parentElement.offsetWidth / getCardWidth());
    if (index < cards.length - visibleCards) index++;
    else index = 0; // loop infinito
    updateSlider();
    startAutoPlay();
  });

  prevBtn.addEventListener("click", () => {
    stopAutoPlay();
    if (index > 0) index--;
    else index = cards.length - Math.floor(track.parentElement.offsetWidth / getCardWidth());
    updateSlider();
    startAutoPlay();
  });

  // Ajusta ao redimensionar a tela
  window.addEventListener("resize", updateSlider);

  // ===============================
  // AUTOPLAY DO SLIDER
  // ===============================
  function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
      const visibleCards = Math.floor(track.parentElement.offsetWidth / getCardWidth());
      if (index < cards.length - visibleCards) index++;
      else index = 0;
      updateSlider();
    }, 3000); // muda a cada 3s
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  startAutoPlay();
});
