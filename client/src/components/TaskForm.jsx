import { useEffect, useRef, useState } from "react";
import { createTaskRequest, getTaskRequest, updateTaskRequest } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";

import { Box, TextField, Container, Typography, Button, Alert } from '@mui/material'

export default function TaskForm() {

    const titleRef = useRef();
    const descriptionRef = useRef();
    const submitRef = useRef();
    const params = useParams();
    const navigate = useNavigate();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        if (params.id) {
            console.log("paramsid")
            async function loadTask() {
                const response = await getTaskRequest(params.id);
                titleRef.current.value = response.data[0].title;
                descriptionRef.current.value = response.data[0].description;
            }
            loadTask();
        }
    }, []);


    const handleSubmitForm = async (e) => {
        e.preventDefault();

        setIsSubmit(false);

        if (isSubmitting) {
            return;
        }
        setIsSubmitting(true);
        try {
            const values = {
                "title": titleRef.current.value,
                "description": descriptionRef.current.value
            }

            if (params.id) {
                console.log("Params: ", params.id);
                const response = await updateTaskRequest(params.id, values);
                response.status == 200 && setIsSubmit(true);
            } else {
                const response = await createTaskRequest(values);
                response.status == 200 && setIsSubmit(true);
            }

        } catch (error) {
            console.log(error);
        } finally {
            if (params.id) {
                
            } else {
                titleRef.current.value = "";
                descriptionRef.current.value = "";
            }
            setIsSubmitting(false);
        }
    }

    const alertRender = () => {
            if(isSubmit) {
                return <Alert severity="success">
                {`The task was ${params.id ? "update" : "created"} successfully.`}
              </Alert>
            }
    }

    return (
        <Box mt={20}>
            <Container component="main" maxWidth="xs">
                <form onSubmit={handleSubmitForm}>
                    <fieldset>
                        <Typography variant="h2" textAlign={"center"} p={2}>
                            {params.id ? "Update Task" : "Create New Task"}
                        </Typography>
                        <Box mt={2}>
                            <TextField
                                label="Title"
                                type="text"
                                fullWidth
                                inputRef={titleRef}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Box>
                        <Box mt={2}>
                            <TextField
                                label="Description"
                                multiline
                                fullWidth
                                rows={4}
                                inputRef={descriptionRef}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Box>
                        <Box mt={2}>
                            <Button type="submit" fullWidth variant="contained" color="primary">
                                {isSubmitting ? "...Submitting" : "Submit"}
                            </Button>
                        </Box>
                        {alertRender()}
                    </fieldset>
                </form>
            </Container>
        </Box>
    )
}