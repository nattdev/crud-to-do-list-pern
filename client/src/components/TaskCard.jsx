import { useNavigate } from "react-router-dom";

import { Box, Typography, Button, Stack } from "@mui/material";
import ModalDelete from "./ModalDelete";

export default function TaskCard({ task }) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/edit/${task.id}`);
    }

    const isoDateString = task.datecreated;
    const date = new Date(isoDateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const formattedDate = date.toLocaleString("en-EN", options);

    return (
        <Box border={1} m={2} p={2} sx={{maxWidth : {xs: 200, lg: 250}}}>
            <Box sx={{display: "flex", flexDirection: "column", gap: "1rem"}}>
            <Typography variant="body1" sx={{textWrap: "nowrap"}}>Task #{task.id}</Typography>
            <Typography  mb={1} sx={{textAlign: "left"}} variant="caption">{formattedDate}</Typography>
            </Box>
            <Typography sx={{fontSize: {xs: "1.5rem"}}} variant="h3">{task.title}</Typography>
            <Typography sx={{fontSize: {xs: "1rem"}}} variant="body1" py={2}>{task.description}</Typography>
            <Stack direction="row" spacing={1}>
                <Button variant="contained" onClick={handleClick}>EDIT</Button>
                <ModalDelete task={task}/>
            </Stack>
        </Box>
    )
}