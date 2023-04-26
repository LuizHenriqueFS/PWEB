let totalIdade = 0;
let maiorIdade = 0;
let menorIdade = 200;
let qtdPessimo = 0;
let qtdOtimoBom = 0;
let qtdMulheres = 0;
let qtdHomens = 0;

for (let i = 0; i < 45; i++) {
  let idade = parseInt(prompt("Informe a idade da pessoa " + (i + 1) + ":"));
  let sexo = prompt("Informe o sexo da pessoa " + (i + 1) + " (M/F):").toUpperCase();
  let opiniao = parseInt(prompt("Informe a opiniao da pessoa " + (i + 1) + " (1=Pessimo, 2=Regular, 3=Bom, 4=Otimo):"));

  totalIdade += idade;
  if (idade > maiorIdade) {
    maiorIdade = idade;
  }
  if (idade < menorIdade) {
    menorIdade = idade;
  }

  if (opiniao === 1) {
    qtdPessimo++;
  } else if (opiniao === 3 || opiniao === 4) {
    qtdOtimoBom++;
  }

  if (sexo === "M") {
    qtdHomens++;
  } else if (sexo === "F") {
    qtdMulheres++;
  }
}

let mediaIdade = totalIdade / 45;
let porcentagemOtimoBom = (qtdOtimoBom / 45) * 100;

alert("Media de idade das pessoas que responderam: " + mediaIdade.toFixed(2) + "\n" +
      "Idade da pessoa mais velha: " + maiorIdade + "\n" +
      "Idade da pessoa mais nova: " + menorIdade + "\n" +
      "Quantidade de pessoas que responderam pessimo: " + qtdPessimo + "\n" +
      "Porcentagem de pessoas que responderam otimo e bom: " + porcentagemOtimoBom.toFixed(2) + "%\n" +
      "Numero de mulheres que responderam: " + qtdMulheres + "\n" +
      "Numero de homens que responderam: " + qtdHomens);
