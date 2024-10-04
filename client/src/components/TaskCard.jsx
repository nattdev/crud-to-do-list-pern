import { useNavigate } from "react-router-dom";

import { Box, Typography, Button, Stack } from "@mui/material";
import ModalDelete from "./ModalDelete";

export default function TaskCard({ task }) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/edit/${task.id}`);
    }

    return (
        <Box border={1} m={2} p={2}>
            <Typography variant="h3">{task.title}</Typography>
            <Typography variant="body1" py={2}>{task.description}</Typography>
            <Stack direction="row" spacing={1}>
                <Button variant="contained" onClick={handleClick}>EDIT</Button>
                <ModalDelete task={task}/>
            </Stack>
        </Box>
    )
}