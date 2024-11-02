<?php
require_once 'conexao-mysql.php';

$conexao_obj = new ConexaoBancoDados();
$conexao = $conexao_obj->conectar();

$resultado = $conexao->query("SELECT * FROM tarefas ORDER BY criado_em");
$tarefas = $resultado->fetch_all(MYSQLI_ASSOC);

echo json_encode($tarefas);

$conexao->close();
?>
