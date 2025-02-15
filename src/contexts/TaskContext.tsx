import { createContext, useContext, useState, ReactNode } from "react";

type Task = {
    id: number;
    text: string;
    completed: boolean;
}

type TaskContextType = {
    tasks: Task[];
    insertTask: (text: string) => void;
    deleteTask: (id: number) => void;
    toggleTask: (id: number) => void;
}

const TaskContext = createContext<TaskContextType | "">("")

export function TaskProvider({ children }: { children: ReactNode }) {
    const [tasks, setTasks] = useState<Task[]>([])

    const [number, setNumber] = useState(0)
    const insertTask = (text: string) => {
        if (text.trim() === "") return
        setTasks([...tasks, { id: number, text, completed: false }])
        setNumber(number+1)
    }

    const deleteTask = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const toggleTask = (id: number) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        )
    }

    return (
        <TaskContext.Provider value={{ tasks, insertTask, deleteTask, toggleTask }}>
            {children}
        </TaskContext.Provider>
    )
}

export function useTasks() {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTasks deve ser usado dentro de um TaskProvider")
    }
    return context
}