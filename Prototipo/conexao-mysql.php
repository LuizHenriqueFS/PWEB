<?php

class ConexaoBancoDados {
    private $host = 'localhost';
    private $usuario = 'root';  
    private $senha = '';
    private $banco = 'gerenciador_tarefas_kanban';

    public function conectar() {
        
        $conexao = new mysqli($this->host, $this->usuario, $this->senha);
        
        if ($conexao->connect_error) {
            die("Opa! Deu ruim na conexão: " . $conexao->connect_error);
        }

        // Cria banco se não existir
        $sql = "CREATE DATABASE IF NOT EXISTS {$this->banco}";
        $conexao->query($sql);

        // Seleciona o banco
        $conexao->select_db($this->banco);

        // Cria tabela de tarefas se não existir
        $sql_tabela = "CREATE TABLE IF NOT EXISTS tarefas (
            id INT AUTO_INCREMENT PRIMARY KEY,
            titulo VARCHAR(255) NOT NULL,
            descricao TEXT,
            prioridade ENUM('Baixa', 'Média', 'Alta') DEFAULT 'Média',
            vencimento DATE,
            responsavel VARCHAR(100),
            status ENUM('coluna1', 'coluna2', 'coluna3') DEFAULT 'coluna1',
            criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )";
        
        $conexao->query($sql_tabela);

        return $conexao;
    }
}
?>
