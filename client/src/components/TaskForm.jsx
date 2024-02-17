import { useEffect, useRef, useState } from "react";
import { createTaskRequest, getTaskRequest, updateTaskRequest } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";

export default function TaskForm() {

    const titleRef = useRef();
    const descriptionRef = useRef();
    const submitRef = useRef();
    const params = useParams();
    const navigate = useNavigate();

    const [isSubmitting, setIsSubmitting] = useState(false);

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
            } else {
                const response = await createTaskRequest(values);
            }
           
        } catch (error) {
            console.log(error);
        } finally {
            if (params.id) {
                navigate("/tasks");
            } else {
                titleRef.current.value = "";
                descriptionRef.current.value = "";
            }
            setIsSubmitting(false);
        }
    }

    return (
        <div className="form-container">
            <form>
                <fieldset>
                    <h3>{params.id ? "Update Task" : "Create New Task"}</h3>
                    <label>Title: </label>
                    <input type="text" ref={titleRef} />
                    <label>Description: </label>
                    <textarea ref={descriptionRef} ></textarea>
                    <button ref={submitRef} type="submit" onClick={handleSubmitForm}>{isSubmitting ? "...Submitting" : "Submit"}</button>
                </fieldset>
            </form>
        </div>
    )
}