// ===============================
// MODAL SAIBA MAIS
// ===============================

const modal = document.getElementById("modal-produto");
const modalImg = document.getElementById("modal-img");
const modalTitulo = document.getElementById("modal-titulo");
const modalTexto = document.getElementById("modal-texto");
const fecharModal = document.querySelector(".fechar-modal");

document.querySelectorAll(".btn-saibamais").forEach(btn => {

  // ignora os botões da calculadora
  if(btn.id === "calcular" || btn.id === "calcular-grama") return;

  btn.addEventListener("click", () => {

    const card = btn.closest(".card");

    const img = card.querySelector(".card-img").src;
    const titulo = card.querySelector("h3").textContent;
    const texto = card.querySelector(".info-extra").textContent;

    modalImg.src = img;
    modalTitulo.textContent = titulo;
    modalTexto.textContent = texto;

    modal.classList.add("ativo");
  });

});

fecharModal.addEventListener("click", () => {
  modal.classList.remove("ativo");
});

modal.addEventListener("click", (e) => {
  if(e.target === modal){
    modal.classList.remove("ativo");
  }
});
