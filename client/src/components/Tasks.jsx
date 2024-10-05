import { useEffect} from "react";
import TaskCard from "./TaskCard.jsx";
import { useTasks } from "./TaskContext.jsx";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { Box, Typography } from "@mui/material";

export default function Tasks() {

    const { tasks, loadTasks } = useTasks();
    const [parent, tasksDrag, setTasksDrag] = useDragAndDrop([]);

    useEffect(() => {
        loadTasks();
    }, []);

    useEffect(() => {
      setTasksDrag(tasks)
    }, [tasks]);
    
    const renderTasks = () => {
        if (tasks.length !== 0) {
            return tasksDrag.map((task) => (
                <TaskCard key={task.id} task={task} />
            ));
        } else {
            return <Typography m={3}>No Tasks</Typography>
        }
    }

    return (
      <Box mt={6}>
        <Typography variant="h2" m={2}>
          TASKS
        </Typography>
        <Box
			  ref={parent}
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {renderTasks()}
        </Box>
      </Box>
    );
}