import { Container, Grid, Typography, Box } from "@mui/material"

export default function HomePage() {
    return (
        <Box textAlign={"center"} marginX={5} >
            <Typography variant={"body2"} mt={5}> <b>Welcome!!</b> to PERN CRUD To Do 📝 a space to allows you to plan your tasks</Typography>
            <Box>
                <Typography mt={5} variant="subtitle1">📅 Organize your task</Typography>
                <Typography variant="subtitle1">✏️ Edit existing tasks easily</Typography>
                <Typography variant="subtitle1">🗑️ Delete tasks you no longer need</Typography>
                <Typography variant="subtitle1">📊 View your tasks in a clean interface</Typography>
            </Box>
        </ Box>
    )
}