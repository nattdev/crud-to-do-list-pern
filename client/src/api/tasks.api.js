import axios from 'axios';

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

export const getTasksRequest = async () => {
    return await axios.get(`${URL}/tasks`);
}

export const deleteTasksRequest = async (id) => {
    return await axios.delete(`${URL}/tasks/${id}`);
}

export const createTaskRequest = async (task) => {
    return await axios.post(`${URL}/tasks`, task);
}

export const getTaskRequest = async (id) => {
    return await axios.get(`${URL}/tasks/${id}`); 
}

export const updateTaskRequest = async (id, task) => {
    return await axios.put(`${URL}/tasks/${id}`, task);
}