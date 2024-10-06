import { useNavigate } from "react-router-dom";

import { Box, Typography, Button, Stack, Checkbox } from "@mui/material";
import ModalDelete from "./ModalDelete";
import { useState } from "react";

export default function TaskCard({ task }) {

    const [taskComplete, setTaskComplete] = useState(false);

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
    const label = { inputProps: { 'aria-label': 'Task Complete' } };

    return (
        <Box border={1} m={2} p={2} sx={{maxWidth : {xs: "100%", lg: 250}, minWidth : {xs: 30, lg: 250}, width : {xs: 140, sm: 150}, flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            <Checkbox checked={taskComplete} onChange={() => setTaskComplete(!taskComplete)} {...label} color="success" />
            <Box sx={{textDecoration: taskComplete ? "line-through" : "none"}}>
            <Box sx={{display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "auto"}}>
            <Typography variant="body1" sx={{textWrap: "nowrap", fontSize: {xs: "1rem"}}}>Task #{task.id}</Typography>
            <Typography  mb={{xs: 1}} sx={{textAlign: "left", fontSize: {xs: "0.7rem"}}} variant="caption">{formattedDate}</Typography>
            </Box>
            <Typography sx={{fontSize: {xs: "1rem"}, fontWeight: "500"}} variant="h3">{task.title}</Typography>
            <Typography sx={{fontSize: {xs: "0.8rem"}}} variant="body1" py={2}>{task.description}</Typography>
            </Box>
            <Stack sx={{display : "flex"}} direction="row" spacing={1}>
                <Button sx={{padding : "0.2px!important"}} variant="contained" onClick={handleClick}>EDIT</Button>
                <ModalDelete task={task}/>
            </Stack>
        </Box>
    )
}