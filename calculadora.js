// ================================
// CALCULADORA POR PORÇÃO
// ================================
const comidaSelect = document.getElementById("comida");
const quantidadeInput = document.getElementById("quantidade");
const calcularBtn = document.getElementById("calcular");
const resAcucar = document.getElementById("res-acucar");
const resGordura = document.getElementById("res-gordura");
const resSal = document.getElementById("res-sal");

// Dados por porção
const alimentos = {
  nutella: { acucar: 22, gordura: 22, sal: 0.3 },
  milka: { acucar: 56, gordura: 30, sal: 0.3 },
  bolinho: { acucar: 25, gordura: 15, sal: 0.4 },
  achocolatado: { acucar: 22, gordura: 2, sal: 0.2 },
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

calcularBtn.addEventListener("click", () => {
  const alimento = comidaSelect.value;
  const quantidade = Number(quantidadeInput.value) || 1;

  if (!alimento) return alert("Selecione um alimento!");

  const dados = alimentos[alimento];

  resAcucar.textContent = (dados.acucar * quantidade).toFixed(1);
  resGordura.textContent = (dados.gordura * quantidade).toFixed(1);
  resSal.textContent = (dados.sal * quantidade).toFixed(1);
});

// ================================
// CALCULADORA POR GRAMA
// ================================
const comidaGramaSelect = document.getElementById("comida-grama");
const gramasInput = document.getElementById("gramas");
const calcularGramaBtn = document.getElementById("calcular-grama");
const resAcucarGrama = document.getElementById("res-acucar-grama");
const resGorduraGrama = document.getElementById("res-gordura-grama");
const resSalGrama = document.getElementById("res-sal-grama");

// Dados por 100g/ml
const alimentosGrama = {
  nutella: { acucar: 42.3, gordura: 42.3, sal: 0.6 }, // por 100g
  milka: { acucar: 56, gordura: 30, sal: 0.3 },
  bolinho: { acucar: 41.7, gordura: 25, sal: 0.7 },
  achocolatado: { acucar: 11, gordura: 1, sal: 0.1 },
  croissant1: { acucar: 22.5, gordura: 25, sal: 0.75 },
  croissant2: { acucar: 8.6, gordura: 24.3, sal: 0.71 },
  travesseiro: { acucar: 33.3, gordura: 16.7, sal: 0.33 },
  filipinos: { acucar: 45, gordura: 25, sal: 0.5 },
  pringles: { acucar: 3.3, gordura: 33.3, sal: 1.67 },
  doritos: { acucar: 3.3, gordura: 26.7, sal: 2 },
  cheetos: { acucar: 6.7, gordura: 23.3, sal: 1.33 },
  monster: { acucar: 11, gordura: 0, sal: 0.8 },
  coca: { acucar: 10.6, gordura: 0, sal: 0 }
};

calcularGramaBtn.addEventListener("click", () => {
  const alimento = comidaGramaSelect.value;
  const gramas = Number(gramasInput.value);

  if (!alimento) return alert("Selecione um alimento!");
  if (!gramas || gramas <= 0) return alert("Digite uma quantidade válida em gramas!");

  const dados = alimentosGrama[alimento];
  const fator = gramas / 100;

  resAcucarGrama.textContent = (dados.acucar * fator).toFixed(1);
  resGorduraGrama.textContent = (dados.gordura * fator).toFixed(1);
  resSalGrama.textContent = (dados.sal * fator).toFixed(1);
});
