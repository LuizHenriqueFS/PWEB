// Script adaptado para comunicar com PHP via AJAX

function adicionarTarefa() {
    const titulo = prompt("Digite o título da tarefa:");
    if (!titulo) return;

    fetch('adicionar-tarefa.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `titulo=${encodeURIComponent(titulo)}&status=coluna1`
    })
    .then(response => response.json())
    .then(data => {
        if (data.sucesso) {
            renderizarTarefas();
        }
    });
}

function renderizarTarefas() {
    fetch('carregar-tarefas.php')
    .then(response => response.json())
    .then(tarefas => {
        // Limpa colunas
        document.querySelectorAll(".tarefas").forEach(coluna => coluna.innerHTML = "");

        tarefas.forEach(tarefa => {
            const tarefaElemento = document.createElement("div");
            tarefaElemento.classList.add("tarefa");
            tarefaElemento.innerText = tarefa.titulo;

            document.getElementById(tarefa.status).querySelector(".tarefas").appendChild(tarefaElemento);
        });
    });
}


