function calculate() {
  const inputOp1 = document.querySelector("input[name=op1]");
  const inputOp2 = document.querySelector("input[name=op2]");
  const inputOperacao = document.querySelector("input[name=operacao]");

  let resultado = 0;

  const value1 = Number(inputOp1.value);
  const value2 = Number(inputOp2.value);

  if(inputOperacao.value !== ''){
    switch (inputOperacao.value) {
        case "+":
        resultado = value1 + value2;
        break;

        case "-":
        resultado = value1 - value2;
        break;

        case "*":
        resultado = value1 * value2;
        break;

        case "/":
        resultado = value1 / value2;
        break;

        default: resultado = undefined;
    }

    document.querySelector('#resultado').innerText = `
        Resultado: ${resultado}
    `;

    if(resultado == undefined){
        document.querySelector('#resultado').innerText = 'Erro';
    }
    } else{
        document.querySelector('#resultado').innerText = 'Aguardando operação...';
    }

  // console.log(inputOp1);
}

function calculateByRadioButton() {
    const inputOp1 = document.querySelector("input[name=op1]");
    const inputOp2 = document.querySelector("input[name=op2]");
    
    const inputOperacao = document.querySelectorAll("input[name=operacao]");

    let operacao = '';
    inputOperacao.forEach( (e) => {
        if(e.checked === true) operacao = e.value;
    })
  
    let resultado = 0;
  
    const value1 = Number(inputOp1.value);
    const value2 = Number(inputOp2.value);
  
    if(operacao !== ''){
      switch (operacao) {
          case "+":
          resultado = value1 + value2;
          break;
  
          case "-":
          resultado = value1 - value2;
          break;
  
          case "*":
          resultado = value1 * value2;
          break;
  
          case "/":
          resultado = value1 / value2;
          break;
  
          default: resultado = undefined;
      }
  
      document.querySelector('#resultado').innerText = `
          Resultado: ${resultado}
      `;
  
      if(resultado == undefined){
          document.querySelector('#resultado').innerText = 'Erro';
      }
      } else{
          document.querySelector('#resultado').innerText = 'Aguardando operação...';
      }
  
    // console.log(inputOp1);
  }

document.querySelectorAll('input[name=operacao]').forEach(
    (e) => {
        e.addEventListener('click', () => {
            calculateByRadioButton();
        })
})