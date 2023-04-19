function jogar(jogadaDoUsuario) {
  // Escolher jogada aleatória para o computador
  var jogadas = ['pedra', 'papel', 'tesoura'];
  var jogadaDoComputador = jogadas[Math.floor(Math.random() * jogadas.length)];

  // Exibir jogadas na tela
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "Jogou: " + jogadaDoUsuario + ".<br> Computador jogou: " + jogadaDoComputador + ".<br><br>";

  // Verificar quem ganhou
  if (jogadaDoUsuario == jogadaDoComputador) {
    resultado.innerHTML += "Empate!";
  } else if (jogadaDoUsuario == 'pedra' && jogadaDoComputador == 'tesoura' ||
    jogadaDoUsuario == 'papel' && jogadaDoComputador == 'pedra' ||
    jogadaDoUsuario == 'tesoura' && jogadaDoComputador == 'papel') {
    resultado.innerHTML += "Vitoria";
  } else {
    resultado.innerHTML += "Derrota!";
  }

  // Realizar apenas 3 rodadas
  var contador = parseInt(localStorage.getItem('contador')) || 0;
  contador++;
  localStorage.setItem('contador', contador);
  if (contador == 3) {
    // Desabilitar botões
    document.getElementsByTagName('button')[0].disabled = true;
    document.getElementsByTagName('button')[1].disabled = true;
    document.getElementsByTagName('button')[2].disabled = true;

    // Mostrar resultado final
    var totalPontosUsuario = parseInt(localStorage.getItem('totalPontosUsuario')) || 0;
    var totalPontosComputador = parseInt(localStorage.getItem('totalPontosComputador')) || 0;
    if (resultado.innerHTML.indexOf("Empate") !== -1) {
      resultado.innerHTML += "<br><br>Empate!";
    } else if (resultado.innerHTML.indexOf("ganhou") !== -1) {
      totalPontosUsuario++;
      localStorage.setItem('totalPontosUsuario', totalPontosUsuario);
      resultado.innerHTML += "<br><br>Voce Ganhou";
    } else {
      totalPontosComputador++;
      localStorage.setItem('totalPontosComputador', totalPontosComputador);
      resultado.innerHTML += "<br><br>Voce Perdeu";
    }

    // Reiniciar o jogo
    localStorage.setItem('contador', 0);
    setTimeout(function() {
      window.location.reload();
    }, 5000);
  }
}