/* ===============================
   BOTÕES "SAIBA MAIS"
================================ */
function toggleSaibaMais(btn) {
  const info = btn.closest(".card").querySelector(".info-extra");
  info.classList.toggle("ativo");
  if(info.classList.contains("ativo")) {
    info.style.maxHeight = info.scrollHeight + "px";
  } else {
    info.style.maxHeight = "0";
  }
}

document.querySelectorAll(".btn-saibamais").forEach(btn => {
  btn.addEventListener("click", () => toggleSaibaMais(btn));
});

/* ===============================
   ANIMAÇÃO DAS BARRAS
================================ */
function animateBars() {
  const barras = document.querySelectorAll('.barra');
  barras.forEach((bar, index) => {
    const width = bar.getAttribute('data-width');
    setTimeout(() => {
      bar.style.width = width;
    }, index * 100);
  });
}

window.addEventListener('load', animateBars);
