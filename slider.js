document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".slider-track");
  const prevBtn = document.querySelector(".slider-btn.prev");
  const nextBtn = document.querySelector(".slider-btn.next");

  const cards = document.querySelectorAll(".card");
  const gap = 30;
  let index = 0;

  function getCardWidth() {
    return cards[0].offsetWidth + gap;
  }

  function updateSlider() {
    const cardWidth = getCardWidth();
    const translateX = index * cardWidth;
    track.style.transform = `translateX(-${translateX}px)`;
  }

  nextBtn.addEventListener("click", () => {
    const visibleCards = Math.floor(track.parentElement.offsetWidth / getCardWidth());
    if (index < cards.length - visibleCards) {
      index++;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateSlider();
    }
  });

  // Ajusta ao redimensionar a tela
  window.addEventListener("resize", updateSlider);
});

