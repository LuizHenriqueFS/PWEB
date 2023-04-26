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
    numeros.sort(function(a, b){return a - b});
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