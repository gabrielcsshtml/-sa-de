// ===============================
// SAIBA MAIS & BARRAS ANIMADAS
// ===============================

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
    const width = bar.getAttribute('data-width'); 
    bar.style.width = width;
  });
}

// Função de animação suave para elementos que aparecem na tela
function fadeInOnScroll() {
  const elements = document.querySelectorAll('section, .card');
  const windowBottom = window.innerHeight + window.scrollY;

  elements.forEach(el => {
    const elTop = el.offsetTop + el.clientHeight / 4;
    if (windowBottom > elTop) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
      el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    }
  });
}

// Executa animações quando a página termina de carregar
window.addEventListener('load', () => {
  animateBars();
  fadeInOnScroll();
});

// Adiciona evento de clique a todos os botões "Saiba Mais"
document.querySelectorAll('.btn-saibamais').forEach(btn => {
  btn.addEventListener('click', () => toggleInfo(btn));
});

// Ativa animação de entrada ao rolar a página
window.addEventListener('scroll', fadeInOnScroll);
