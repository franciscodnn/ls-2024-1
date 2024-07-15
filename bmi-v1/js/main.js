console.log('Aplicação IMC ativada!');

document.querySelector("#calc-imc-btn").addEventListener("click", () => {
  const altura = Number(document.querySelector("#altura").value);
  const peso = Number(document.querySelector("#peso").value);

  const sexo = document.querySelector("#masculino").checked == true ? "M" : "F";

  const imc = peso / (altura ** 2);

  let result = "";

  if (sexo == "M") {
    if (imc < 20.7) result = "Abaixo do peso";
    else if (imc >= 20.7 && imc < 26.4) result = "Peso normal";
    else if (imc >= 26.4 && imc < 27.8) result = "Marginalmente acima do peso";
    else if (imc >= 27.8 && imc < 31.1) result = "Acima do peso ideal";
    else result = "Obeso";
  } else {
    // Sexo Feminino
    if (imc < 19.1) result = "Abaixo do peso";
    else if (imc >= 19.1 && imc < 25.8) result = "Peso normal";
    else if (imc >= 25.8 && imc < 27.3) result = "Marginalmente acima do peso";
    else if (imc >= 27.3 && imc < 32.3) result = "Acima do peso ideal";
    else result = "Obeso";
  }

  // console.log(result);
  document.querySelector('#imc').value = result;
});
