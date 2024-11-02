<?php
require_once 'conexao-mysql.php';

$conexao_obj = new ConexaoBancoDados();
$conexao = $conexao_obj->conectar();
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Gerenciador de Tarefas - Kanban</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Gerenciador de Tarefas - Kanban</h1>

    <div class="kanban-container">
        <div id="coluna1" class="coluna">
            <h2>A Fazer</h2>
            <button onclick="adicionarTarefa()">Nova Tarefa</button>
            <div class="tarefas"></div>
        </div>

        <div id="coluna2" class="coluna">
            <h2>Em Progresso</h2>
            <div class="tarefas"></div>
        </div>

        <div id="coluna3" class="coluna">
            <h2>Concluído</h2>
            <div class="tarefas"></div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
