// ================================
// DADOS NUTRICIONAIS POR PORÇÃO
// ================================
const dadosComidas = {
  nutella: { acucar: 22, gordura: 22, sal: 0.3 },
  milka: { acucar: 56, gordura: 30, sal: 0.3 },
  bolinho: { acucar: 25, gordura: 15, sal: 0.4 },
  achocolatado: { acucar: 21.5, gordura: 2, sal: 0.2 },
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

// ================================
// ELEMENTOS
// ================================
const comidaSelect = document.getElementById("comida");
const quantidadeInput = document.getElementById("quantidade");
const calcularBtn = document.getElementById("calcular");

const resAcucar = document.getElementById("res-acucar");
const resGordura = document.getElementById("res-gordura");
const resSal = document.getElementById("res-sal");

// ================================
// CALCULADORA POR PORÇÃO
// ================================
calcularBtn.addEventListener("click", () => {
  const comida = comidaSelect.value;
  const quantidade = parseFloat(quantidadeInput.value);

  if (!comida || isNaN(quantidade) || quantidade <= 0) {
    alert("Selecione uma comida e informe uma quantidade válida!");
    return;
  }

  const dados = dadosComidas[comida];

  resAcucar.textContent = (dados.acucar * quantidade).toFixed(1);
  resGordura.textContent = (dados.gordura * quantidade).toFixed(1);
  resSal.textContent = (dados.sal * quantidade).toFixed(2);
});

// ================================
// CALCULADORA POR GRAMA
// ================================
const comidaGramaSelect = document.getElementById("comida-grama");
const gramasInput = document.getElementById("quantidade-grama");
const calcularGramaBtn = document.getElementById("calcular-grama");

const resAcucarGrama = document.getElementById("res-acucar-grama");
const resGorduraGrama = document.getElementById("res-gordura-grama");
const resSalGrama = document.getElementById("res-sal-grama");

calcularGramaBtn.addEventListener("click", () => {
  const comida = comidaGramaSelect.value;
  const gramas = parseFloat(gramasInput.value);

  if (!comida || isNaN(gramas) || gramas <= 0) {
    alert("Selecione uma comida e informe uma quantidade válida!");
    return;
  }

  const dados = dadosComidas[comida];

  // Porção padrão para cada alimento
  const porcoes = {
    nutella: 52, milka: 100, bolinho: 60, achocolatado: 200,
    croissant1: 80, croissant2: 70, travesseiro: 90, filipinos: 100,
    pringles: 30, doritos: 30, cheetos: 30, monster: 500, coca: 330
  };

  const fator = gramas / porcoes[comida];

  resAcucarGrama.textContent = (dados.acucar * fator).toFixed(1);
  resGorduraGrama.textContent = (dados.gordura * fator).toFixed(1);
  resSalGrama.textContent = (dados.sal * fator).toFixed(2);
});

