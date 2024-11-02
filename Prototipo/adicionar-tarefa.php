<?php
require_once 'conexao-mysql.php';

$conexao_obj = new ConexaoBancoDados();
$conexao = $conexao_obj->conectar();

$titulo = $_POST['titulo'] ?? '';
$status = $_POST['status'] ?? 'coluna1';

$stmt = $conexao->prepare("INSERT INTO tarefas (titulo, status) VALUES (?, ?)");
$stmt->bind_param("ss", $titulo, $status);

$resposta = ['sucesso' => false];

if ($stmt->execute()) {
    $resposta['sucesso'] = true;
}

echo json_encode($resposta);
$stmt->close();
$conexao->close();
?>
