import { useEffect } from "react";
import { deleteTasksRequest } from "../api/tasks.api";
import { useTasks } from "./TaskContext";

export default function TaskCard({ task }) {

    const { tasks, deleteTask } = useTasks();

    const handleClick = () => {
        console.log("edit");
    }

    return (
        <div className="task-card">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={handleClick}>EDIT</button>
            <button onClick={() => deleteTask(task.id)}>DELETE</button>
        </div>
    )
}