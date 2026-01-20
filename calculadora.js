/* ===============================
   CALCULADORA DE NUTRIENTES
================================ */

// Dados nutricionais de exemplo (por porção padrão)
const alimentos = {
  "Chocolate":       { acucar: 30, gordura: 20, sal: 0.1, calorias: 300 },
  "Pizza":           { acucar: 3,  gordura: 12, sal: 1.2, calorias: 285 },
  "Hamburguer":      { acucar: 5,  gordura: 18, sal: 1.5, calorias: 354 },
  "Salgadinho":      { acucar: 1,  gordura: 15, sal: 1.0, calorias: 280 },
  "Refrigerante":    { acucar: 35, gordura: 0,  sal: 0,   calorias: 150 },
  "Maçã":            { acucar: 10, gordura: 0,  sal: 0,   calorias: 52 },
  "Banana":          { acucar: 12, gordura: 0,  sal: 0,   calorias: 89 },
  "Cenoura":         { acucar: 5,  gordura: 0,  sal: 0,   calorias: 41 },
  "Ovo":             { acucar: 0.5,gordura: 5,  sal: 0.1, calorias: 78 },
  "Leite":           { acucar: 12, gordura: 3.5,sal: 0.1, calorias: 60 }
};

// ===============================
// CALCULAR POR PORÇÃO
// ===============================
function calcular() {
  const alimento = document.querySelector("#calculadora select").value;
  const porcao = parseFloat(document.querySelector("#calculadora input[type='number']").value);

  if (!alimento || isNaN(porcao) || porcao <= 0) {
    alert("Por favor, selecione um alimento e insira uma quantidade válida!");
    return;
  }

  const dados = alimentos[alimento];

  const acucar = (dados.acucar * porcao).toFixed(1);
  const gordura = (dados.gordura * porcao).toFixed(1);
  const sal = (dados.sal * porcao).toFixed(2);
  const calorias = (dados.calorias * porcao).toFixed(0);

  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = `
    <p><strong>Alimento:</strong> ${alimento}</p>
    <p><strong>Porções:</strong> ${porcao}</p>
    <p><strong>Açúcar:</strong> ${acucar} g</p>
    <p><strong>Gordura:</strong> ${gordura} g</p>
    <p><strong>Sal:</strong> ${sal} g</p>
    <p><strong>Calorias:</strong> ${calorias} kcal</p>
  `;
}

// ===============================
// CALCULAR POR GRAMA
// ===============================
function calcularPorGrama() {
  const alimento = document.querySelector("#calculadora-grama select").value;
  const gramas = parseFloat(document.querySelector("#calculadora-grama input[type='number']").value);

  if (!alimento || isNaN(gramas) || gramas <= 0) {
    alert("Por favor, selecione um alimento e insira uma quantidade válida!");
    return;
  }

  const dados = alimentos[alimento];

  // Supondo que os dados originais são por 100g
  const acucar = ((dados.acucar / 100) * gramas).toFixed(1);
  const gordura = ((dados.gordura / 100) * gramas).toFixed(1);
  const sal = ((dados.sal / 100) * gramas).toFixed(2);
  const calorias = ((dados.calorias / 100) * gramas).toFixed(0);

  const resultado = document.querySelector("#resultado-grama");
  resultado.innerHTML = `
    <p><strong>Alimento:</strong> ${alimento}</p>
    <p><strong>Quantidade:</strong> ${gramas} g</p>
    <p><strong>Açúcar:</strong> ${acucar} g</p>
    <p><strong>Gordura:</strong> ${gordura} g</p>
    <p><strong>Sal:</strong> ${sal} g</p>
    <p><strong>Calorias:</strong> ${calorias} kcal</p>
  `;
}
