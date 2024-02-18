import { useNavigate } from "react-router-dom";
import { useTasks } from "./TaskContext";

import { Box, Typography, Button, Stack } from "@mui/material";

export default function TaskCard({ task }) {

    const navigate = useNavigate();

    const { tasks, deleteTask } = useTasks();

    const handleClick = () => {
        navigate(`/edit/${task.id}`);
    }

    return (
        <Box border={1} m={2} p={2}>
            <Typography variant="h3">{task.title}</Typography>
            <Typography variant="body1" py={2}>{task.description}</Typography>
            <Stack direction="row" spacing={1}>
                <Button variant="contained" onClick={handleClick}>EDIT</Button>
                <Button color={"warning"} variant="contained" onClick={() => deleteTask(task.id)}>DELETE</Button>
            </Stack>
        </Box>
    )
}