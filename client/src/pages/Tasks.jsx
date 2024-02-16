import { useContext, useEffect, useState } from "react";

import TaskCard from "../components/TaskCard.jsx";
import { TasksContext, useTasks } from "../components/TaskContext.jsx";

export default function Tasks() {

    const { tasks, loadTasks } = useTasks();

    useEffect(() => {
        loadTasks();
    }, []);

    useEffect(() => {
        console.log("Se actualizo task");
    }, [tasks]);


    const renderTasks = () => {
        if (tasks.length !== 0) {
            return tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
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