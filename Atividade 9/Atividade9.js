// Função que encontra o maior número entre três valores
function encontrarMaior(num1, num2, num3) {
  let maior = num1;
  if (num2 > maior) {
      maior = num2;
  }
  if (num3 > maior) {
      maior = num3;
  }
  return maior;
}

// Função que ordena três valores em ordem crescente
function ordenarCrescente(num1, num2, num3) {
  let numeros = [num1, num2, num3];
  numeros.sort(function(a, b) { return a - b });
  return numeros;
}

// Função para exibir o resultado da maior número em um alert
function exibirMaior() {
  // Pedir ao usuário para digitar os três números
  let num1 = parseInt(prompt("Digite o primeiro número: "));
  let num2 = parseInt(prompt("Digite o segundo número: "));
  let num3 = parseInt(prompt("Digite o terceiro número: "));

  // Encontrar o maior número e exibir o resultado em um alert
  let maiorNumero = encontrarMaior(num1, num2, num3);
  alert("O maior número é: " + maiorNumero);
}

// Função para exibir o resultado dos números ordenados em um alert
function exibirOrdenados() {
  // Pedir ao usuário para digitar os três números
  let num1 = parseInt(prompt("Digite o primeiro número: "));
  let num2 = parseInt(prompt("Digite o segundo número: "));
  let num3 = parseInt(prompt("Digite o terceiro número: "));

  // Ordenar os números em ordem crescente e exibir o resultado em um alert
  let numerosOrdenados = ordenarCrescente(num1, num2, num3);
  alert("Os números em ordem crescente são: " + numerosOrdenados.join(", "));
}

// Função para verificar se uma string é um palíndromo
function verificarPalindromo() {
  let str = prompt("Digite uma palavra ou frase:").toUpperCase(); // Converte para maiúsculas
  alert("Você digitou: " + str); // Mostra a palavra em um alert
  str = str.replace(/[^A-Z]/g, ""); // Remove caracteres não alfabéticos
  let reversa = str.split('').reverse().join(''); // Inverte a string
  if (str === reversa) {
      alert("A string é um palíndromo.");
  } else {
      alert("A string não é um palíndromo.");
  }

// Função para verificar se três valores formam um triângulo e identificar o tipo
function verificarTriangulo() {
  let lado1 = parseFloat(prompt("Digite o comprimento do primeiro lado:"));
  let lado2 = parseFloat(prompt("Digite o comprimento do segundo lado:"));
  let lado3 = parseFloat(prompt("Digite o comprimento do terceiro lado:"));

  // Verifica se os lados formam um triângulo
  if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
      let tipo;
      if (lado1 === lado2 && lado2 === lado3) {
          tipo = "Equilátero"; // Todos os lados são iguais
      } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
          tipo = "Isósceles"; // Dois lados são iguais
      } else {
          tipo = "Escaleno"; // Todos os lados são diferentes
      }
      alert("Os valores formam um triângulo " + tipo + ".");
  } else {
      alert("Os valores não formam um triângulo.");
  }
}
}
