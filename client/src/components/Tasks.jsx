import { useContext, useEffect, useState } from "react";
import TaskCard from "./TaskCard.jsx";
import { TasksContext, useTasks } from "./TaskContext.jsx";

import { Box, Typography } from "@mui/material";

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
            return <Typography m={3}>No Tasks</Typography>
        }
    }

    return (
        <Box mt={20}>
            <Typography variant="h2" m={2}>TASKS</Typography>
            {renderTasks()}
        </Box>
    );
}