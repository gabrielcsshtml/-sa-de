// Função para abrir/fechar o "Saiba Mais"
function toggleInfo(btn) {
  const info = btn.nextElementSibling;
  info.classList.toggle('ativo');
  if (info.classList.contains('ativo')) {
    info.style.maxHeight = info.scrollHeight + 'px';
  } else {
    info.style.maxHeight = '0';
  }
}

// Função para animar as barras de nutrientes
function animateBars() {
  const barras = document.querySelectorAll('.barra');
  barras.forEach(bar => {
    const width = bar.getAttribute('data-width'); // pega o valor definido no HTML
    bar.style.width = width;
  });
}

// Executa animação quando a página termina de carregar
window.addEventListener('load', animateBars);

// Adiciona evento de clique a todos os botões "Saiba Mais"
document.querySelectorAll('.btn-saibamais').forEach(btn => {
  btn.addEventListener('click', () => toggleInfo(btn));
});
