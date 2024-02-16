import { createContext, useContext, useState } from "react";
import { deleteTasksRequest, getTasksRequest } from "../api/tasks.api";

export const TasksContext = createContext([]);

export const useTasks = () => {
    const context = useContext(TasksContext);
    if (!context) {
        throw new Error("useTasks must be used within a TaskContextProvider");
    } else {
        return context;
    }
}

export const TasksContextProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);

    const loadTasks = async () => {
        const response = await getTasksRequest();
        setTasks(response.data);
    }

    const deleteTask = async (id) => {
        try {
            const response = await deleteTasksRequest(id);
            console.log(response);
            setTasks(tasks.filter(task => id !== task.id));
        } catch (error) {
            console.error(error + "HOLA");
        }
    }

    return (
        <TasksContext.Provider value={{ tasks, loadTasks, deleteTask}}>
            {children}
        </TasksContext.Provider>
    )

}