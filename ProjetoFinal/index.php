<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kanban Tarefas Pessoais: Luiz Henrique</title>
    <style>
        :root {
    --primary-color: #6366f1;
    --todo-color: #fef2f2;
    --doing-color: #fff7ed;
    --done-color: #f0fdf4;
    --card-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --transition: all 0.3s ease;
    --spacing: 1.25rem;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    line-height: 1.6;
    padding: var(--spacing);
    background: #f8fafc;
    min-height: 100vh;
}

header {
    background: var(--primary-color);
    color: white;
    padding: 1.5rem var(--spacing);
    border-radius: 1rem;
    margin-bottom: 2rem;
    box-shadow: var(--card-shadow);
    text-align: center;
}

header h1 {
    font-size: 1.875rem;
    font-weight: 600;
    letter-spacing: -0.025em;
}

main {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1rem;
}

.task-form {
    background: white;
    padding: 1.5rem;
    border-radius: 1rem;
    margin-bottom: 2rem;
    box-shadow: var(--card-shadow);
}

.form-group {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

input, select, button {
    padding: 0.75rem 1rem;
    border: 2px solid #e2e8f0;
    border-radius: 0.75rem;
    font-size: 0.975rem;
    transition: var(--transition);
}

input[type="text"] {
    flex: 1;
    min-width: 250px;
}

input[type="text"]:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

select {
    min-width: 140px;
    background-color: white;
    cursor: pointer;
}

button {
    background: var(--primary-color);
    color: white;
    border: none;
    font-weight: 500;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    transition: var(--transition);
}

button:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
}

.kanban-board {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
    min-height: 600px;
}

.column {
    background: white;
    padding: 1.5rem;
    border-radius: 1rem;
    box-shadow: var(--card-shadow);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: var(--transition);
}

.column[data-status="todo"] { 
    background: var(--todo-color);
    border-top: 4px solid #ef4444;
}
.column[data-status="doing"] { 
    background: var(--doing-color);
    border-top: 4px solid #f97316;
}
.column[data-status="done"] { 
    background: var(--done-color);
    border-top: 4px solid #22c55e;
}

.column-header {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e293b;
    padding-bottom: 1rem;
    border-bottom: 2px solid rgba(0, 0, 0, 0.06);
    margin-bottom: 0.5rem;
}

.task {
    background: white;
    padding: 1.25rem;
    border-radius: 0.75rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    cursor: move;
    position: relative;
    transition: var(--transition);
    animation: fadeIn 0.3s ease-in-out;
}

.task:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.task[data-priority="high"] { 
    border-left: 4px solid #ef4444;
}
.task[data-priority="medium"] { 
    border-left: 4px solid #f97316;
}
.task[data-priority="low"] { 
    border-left: 4px solid #22c55e;
}

.delete-btn {
    position: absolute;
    right: 0.75rem;
    top: 0.75rem;
    background: #fee2e2;
    color: #ef4444;
    border: none;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    line-height: 24px;
    font-size: 1.25rem;
    text-align: center;
    padding: 0;
    opacity: 0;
    transition: var(--transition);
}

.task:hover .delete-btn {
    opacity: 1;
}

.delete-btn:hover {
    background: #ef4444;
    color: white;
    transform: rotate(90deg);
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .task {
        touch-action: none;
        user-select: none;
    }
    
    .task::after {
        content: '⋮';
        position: absolute;
        right: 2.5rem;
        top: 0.75rem;
        font-size: 1.25rem;
        color: #64748b;
    }
    
    .delete-btn {
        opacity: 1;
    }
    
    .kanban-board {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
}
    </style>
</head>
<body>
    <?php
    // Database connection
    $conn = new mysqli('mysql.webcindario.com', 'luizhfs', 'Foicembora102030@', 'luizhfs');
    
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    // Create table if not exists
    $conn->query("CREATE TABLE IF NOT EXISTS tasks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        priority ENUM('low', 'medium', 'high') NOT NULL,
        status ENUM('todo', 'doing', 'done') NOT NULL DEFAULT 'todo',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )");
    
    // Handle form submissions
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if ($_POST['action'] === 'add') {
            $stmt = $conn->prepare("INSERT INTO tasks (title, priority) VALUES (?, ?)");
            $stmt->bind_param("ss", $_POST['title'], $_POST['priority']);
            $stmt->execute();
            header('Location: ' . $_SERVER['PHP_SELF']);
            exit();
        }
        
        if ($_POST['action'] === 'update') {
            $stmt = $conn->prepare("UPDATE tasks SET status = ? WHERE id = ?");
            $stmt->bind_param("si", $_POST['status'], $_POST['id']);
            $stmt->execute();
            exit();
        }
        
        if ($_POST['action'] === 'delete') {
            $stmt = $conn->prepare("DELETE FROM tasks WHERE id = ?");
            $stmt->bind_param("i", $_POST['id']);
            $stmt->execute();
            header('Location: ' . $_SERVER['PHP_SELF']);
            exit();
        }
    }
    
    // Fetch tasks
    $tasks = [];
    $result = $conn->query("SELECT * FROM tasks ORDER BY created_at DESC");
    while ($row = $result->fetch_assoc()) {
        $tasks[$row['status']][] = $row;
    }
    ?>

    <header>
        <h1>Kanban Tarefas Pessoais: Luiz Henrique</h1>
    </header>

    <main>
        <section class="task-form">
            <form method="POST" class="form-group">
                <input type="hidden" name="action" value="add">
                <input type="text" name="title" placeholder="Nova tarefa" required>
                <select name="priority">
                    <option value="low">Baixa</option>
                    <option value="medium">Média</option>
                    <option value="high">Alta</option>
                </select>
                <button type="submit">Adicionar</button>
            </form>
        </section>

        <section class="kanban-board">
            <?php
            $columns = [
                'todo' => 'A Fazer',
                'doing' => 'Em Andamento',
                'done' => 'Concluído'
            ];
            
            foreach ($columns as $status => $title): ?>
                <div class="column" data-status="<?= $status ?>">
                    <h2 class="column-header"><?= $title ?></h2>
                    <?php if (!empty($tasks[$status])): foreach ($tasks[$status] as $task): ?>
                        <div class="task" 
                             data-id="<?= $task['id'] ?>" 
                             data-priority="<?= $task['priority'] ?>">
                            <?= htmlspecialchars($task['title']) ?>
                            <form method="POST" style="display:inline;">
                                <input type="hidden" name="action" value="delete">
                                <input type="hidden" name="id" value="<?= $task['id'] ?>">
                                <button type="submit" class="delete-btn">×</button>
                            </form>
                        </div>
                    <?php endforeach; endif; ?>
                </div>
            <?php endforeach; ?>
        </section>
    </main>

    <script>
    document.addEventListener('DOMContentLoaded', function () {
        let draggedTask = null;

        // Função para definir comportamento de arrastar
        function initializeDraggable(task) {
            task.setAttribute('draggable', true);

            task.addEventListener('dragstart', (e) => {
                draggedTask = task;
                e.dataTransfer.setData('text/plain', task.dataset.id);
                task.style.opacity = '0.5';
            });

            task.addEventListener('dragend', () => {
                draggedTask.style.opacity = '1';
                draggedTask = null;
            });
        }

        // Inicializar todas as tarefas como arrastáveis
        document.querySelectorAll('.task').forEach(initializeDraggable);

        // Configurar as colunas para permitir o drop
        document.querySelectorAll('.column').forEach(column => {
            column.addEventListener('dragover', (e) => {
                e.preventDefault(); // Permitir que o item seja solto
            });

            column.addEventListener('drop', (e) => {
                e.preventDefault();

                if (!draggedTask) return;

                const newStatus = column.dataset.status;
                column.appendChild(draggedTask);

                // Atualizar status no servidor
                const formData = new FormData();
                formData.append('action', 'update');
                formData.append('id', draggedTask.dataset.id);
                formData.append('status', newStatus);

                fetch(window.location.href, {
                    method: 'POST',
                    body: formData
                });
            });
        });
    });
</script>

</body>
</html>
