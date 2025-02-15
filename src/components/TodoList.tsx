import { useState } from "react";
import { useTasks } from "../contexts/TaskContext";
import './TodoList.css';

export default function TodoList() {
    const { tasks, insertTask, deleteTask, toggleTask } = useTasks()

    const [newTask, setNewTask] = useState("")

    return (
        <div className="tasks">
            <h1>Lista de Tarefas</h1>
            <div className="input-container">
                <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Digite o Nome da sua Tarefa..."/>
                <button className="insert-task-btn" onClick={() => { insertTask(newTask)
                    setNewTask("") }}>
                    <p>Adicionar</p>
                </button>
            </div>
            <div className="divider"></div>
            <div>
                {tasks.map((task) => (
                    <div key={task.id} className={`task ${task.completed ? "completed" : ""}`}>
                        <h2>{task.text}</h2>
                        <div className="buttons">
                            <button onClick={() => deleteTask(task.id)}>
                                Excluir
                            </button>
                            <input type="checkbox" onChange={() => toggleTask(task.id)}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}