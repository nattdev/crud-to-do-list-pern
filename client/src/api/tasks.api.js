import axios from 'axios';

export const getTasksRequest = async () => {
    return await axios.get("http://localhost:4000/tasks");
}