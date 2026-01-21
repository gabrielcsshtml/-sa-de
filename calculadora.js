/* ===============================
   CALCULADORA POR PORÇÃO
================================ */
const comidaSelect = document.getElementById("comida");
const quantidadeInput = document.getElementById("quantidade");
const calcularBtn = document.getElementById("calcular");
const resAcucar = document.getElementById("res-acucar");
const resGordura = document.getElementById("res-gordura");
const resSal = document.getElementById("res-sal");
const resCaloria = document.getElementById("res-caloria");

const alimentos = {
  nutella: { acucar: 22, gordura: 22, sal: 0.3, caloria: 280 },
  milka: { acucar: 56, gordura: 30, sal: 0.3, caloria: 540 },
  bolinho: { acucar: 25, gordura: 15, sal: 0.4, caloria: 300 },
  achocolatado: { acucar: 22, gordura: 2, sal: 0.2, caloria: 90 },
  croissant1: { acucar: 18, gordura: 20, sal: 0.6, caloria: 330 },
  croissant2: { acucar: 6, gordura: 17, sal: 0.5, caloria: 270 },
  travesseiro: { acucar: 30, gordura: 15, sal: 0.3, caloria: 350 },
  filipinos: { acucar: 45, gordura: 25, sal: 0.5, caloria: 450 },
  pringles: { acucar: 1, gordura: 10, sal: 0.5, caloria: 150 },
  doritos: { acucar: 1, gordura: 8, sal: 0.6, caloria: 140 },
  cheetos: { acucar: 2, gordura: 7, sal: 0.4, caloria: 130 },
  monster: { acucar: 55, gordura: 0, sal: 0.4, caloria: 210 },
  coca: { acucar: 35, gordura: 0, sal: 0, caloria: 140 }
};

calcularBtn.addEventListener("click", () => {
  const alimento = comidaSelect.value;
  const quantidade = Number(quantidadeInput.value) || 1;
  if (!alimento) return alert("Selecione um alimento!");
  const dados = alimentos[alimento];
  resAcucar.textContent = (dados.acucar * quantidade).toFixed(1);
  resGordura.textContent = (dados.gordura * quantidade).toFixed(1);
  resSal.textContent = (dados.sal * quantidade).toFixed(1);
  resCaloria.textContent = (dados.caloria * quantidade).toFixed(0);
});

/* ===============================
   CALCULADORA POR GRAMA
================================ */
const comidaGramaSelect = document.getElementById("comida-grama");
const gramasInput = document.getElementById("gramas");
const calcularGramaBtn = document.getElementById("calcular-grama");
const resAcucarGrama = document.getElementById("res-acucar-grama");
const resGorduraGrama = document.getElementById("res-gordura-grama");
const resSalGrama = document.getElementById("res-sal-grama");
const resCaloriaGrama = document.getElementById("res-caloria-grama");

const alimentosGrama = {
  nutella: { acucar: 42.3, gordura: 42.3, sal: 0.6, caloria: 540 },
  milka: { acucar: 56, gordura: 30, sal: 0.3, caloria: 540 },
  bolinho: { acucar: 41.7, gordura: 25, sal: 0.7, caloria: 500 },
  achocolatado: { acucar: 11, gordura: 1, sal: 0.1, caloria: 45 },
  croissant1: { acucar: 22.5, gordura: 25, sal: 0.75, caloria: 412 },
  croissant2: { acucar: 8.6, gordura: 24.3, sal: 0.71, caloria: 386 },
  travesseiro: { acucar: 33.3, gordura: 16.7, sal: 0.33, caloria: 389 },
  filipinos: { acucar: 45, gordura: 25, sal: 0.5, caloria: 450 },
  pringles: { acucar: 3.3, gordura: 33.3, sal: 1.67, caloria: 536 },
  doritos: { acucar: 3.3, gordura: 26.7, sal: 2, caloria: 502 },
  cheetos: { acucar: 6.7, gordura: 23.3, sal: 1.33, caloria: 493 },
  monster: { acucar: 11, gordura: 0, sal: 0.8, caloria: 42 },
  coca: { acucar: 10.6, gordura: 0, sal: 0, caloria: 42 }
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
  resCaloriaGrama.textContent = (dados.caloria * fator).toFixed(0);
});
