FUNÇAO 1	

function adicao(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  if (b === 0) {
    return "Erro: divisão por zero";
  }
  return a / b;
}

let numero1 = Number(prompt("Digite um número: "));
let numero2 = Number(prompt("Digite outro número: "));

let operacao = prompt("Digite a operação desejada (adicao, subtracao, multiplicacao, divisao):");
let resultado;

switch (operacao.toLowerCase()) {
  case "+":
  case "soma":
  case "adição":
  case "adicao":
  case "adiçao":
    resultado = adicao(numero1, numero2);
    break;

  case "-":
  case "subtracao":
  case "subtração":
    resultado = subtracao(numero1, numero2);
    break;

  case "*":
  case "multiplicacao":
  case "multiplicação":
    resultado = multiplicacao(numero1, numero2);
    break;

  case "/":
  case "divisao":
  case "divisão":
    resultado = divisao(numero1, numero2);
    break;

  default:
    resultado = "Operação inválida";
    break;
}

console.log("Resultado:", resultado);
