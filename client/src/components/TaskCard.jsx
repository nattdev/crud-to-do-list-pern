import { useNavigate } from "react-router-dom";
import { useTasks } from "./TaskContext";

export default function TaskCard({ task }) {

    const navigate = useNavigate();

    const { tasks, deleteTask } = useTasks();

    const handleClick = () => {
        navigate(`/edit/${task.id}`);
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