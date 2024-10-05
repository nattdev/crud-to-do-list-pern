import { useEffect} from "react";
import TaskCard from "./TaskCard.jsx";
import { useTasks } from "./TaskContext.jsx";

import { Box, Typography } from "@mui/material";

export default function Tasks() {

    const { tasks, loadTasks } = useTasks();

    useEffect(() => {
        loadTasks();
    }, []);

    useEffect(() => {
    }, [tasks]);

    const renderTasks = () => {
        if (tasks.length !== 0) {
            return tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ));
        } else {
            return <Typography m={3}>No Tasks</Typography>
        }
    }

    return (
        <Box mt={20}>
            <Typography variant="h2" m={2}>TASKS</Typography>
            <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {renderTasks()}
            </Box>
        </Box>
    );
}