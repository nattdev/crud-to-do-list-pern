import { useEffect, useState } from "react";
import { getTasksRequest } from "../api/tasks.api";

export default function Tasks() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const response = await getTasksRequest();
        setTasks(response.data);
        return response.data;
    }

    const renderTasks = () => {
        if (tasks.length !== 0) {
            return tasks.map((task) => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                </div>
            ));
        } else {
            return <p>No Tasks</p>
        }
    }

    return (
        <div className="tasks-container">
            <h2>TASKS</h2>
            {renderTasks()}
        </div>
    );
}