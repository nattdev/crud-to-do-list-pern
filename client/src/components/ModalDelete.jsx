import { useState } from 'react';
import { useTasks } from "./TaskContext";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs: 200, sm: 400},
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    zIndex: 900,
};

function ModalDelete({ task }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { deleteTask } = useTasks();

    return (
        <div>
            <Button color={"warning"} variant="contained" onClick={handleOpen}>DELETE</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    Are you sure you want to delete this task? This action cannot be undone.
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    This action cannot be undone.
                    </Typography>
                    <Button sx={{mt : 2}} color={"warning"} variant="contained" onClick={() => deleteTask(task.id)}>DELETE</Button>
                </Box>
            </Modal>
        </div>
    )
}

export default ModalDelete;