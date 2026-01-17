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
