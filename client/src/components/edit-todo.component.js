import React, { useState, useEffect } from "react";
import axios from "axios";

function EditTodo(props) {
    const [todoDescription, setTodoDescription] = useState("");
    const [todoResponsible, setTodoResponsible] = useState("");
    const [todoPriority, setTodoPriority] = useState("Low");
    const [todoCompleted, setTodoCompleted] = useState(false);

    const onChangeTodoDescription = (event) => setTodoDescription(event.target.value);
    const onChangeTodoResponsible = (event) => setTodoResponsible(event.target.value);
    const onChangeTodoPriority = (event) => setTodoPriority(event.target.value);
    const onChangeTodoCompleted = (event) => {
        setTodoCompleted((prev) => !prev);
        console.log(todoCompleted);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        console.log("Form submitted:");
        console.log(`Todo Description: ${todoDescription}`);
        console.log(`Todo Responsible: ${todoResponsible}`);
        console.log(`Todo Priority: ${todoPriority}`);

        const updateTodo = {
            todoDescription: todoDescription,
            todoResponsible: todoResponsible,
            todoPriority: todoPriority,
            todoCompleted: todoCompleted
        };

        axios.post("http://localhost:4000/todos/update/" + props.match.params.id, updateTodo)
            .then(res => console.log(res.data));
        
        props.history.push("/");
        window.location.reload();
    }

    useEffect(() => {
        axios.get("http://localhost:4000/todos/" + props.match.params.id)
            .then(response => {
                setTodoDescription(response.data.todoDescription);
                setTodoResponsible(response.data.todoResponsible);
                setTodoPriority(response.data.todoPriority);
                setTodoCompleted(response.data.todoCompleted);
            })
            .catch(function (err) {
                console.log(err);
            });
            console.log(props);
    }, []);
    
    return (
        <div>
            <h3 align="center">Update Todo</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text"
                        className="form-control"
                        value={todoDescription}
                        onChange={(e) => onChangeTodoDescription(e)}
                    />
                </div>
                <div className="form-group">
                    <label>Responsible: </label>
                    <input type="text"
                        className="form-control"
                        value={todoResponsible}
                        onChange={(e) => onChangeTodoResponsible(e)}
                    />
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="radio"
                            name="priorityOptions"
                            value="Low"
                            checked={todoPriority === "Low"}
                            onChange={(e) => onChangeTodoPriority(e)}
                        />
                        <label className="form-check-label">Low</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="radio"
                            name="priorityOptions"
                            value="Medium"
                            checked={todoPriority === "Medium"}
                            onChange={(e) => onChangeTodoPriority(e)}
                        />
                        <label className="form-check-label">Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="radio"
                            name="priorityOptions"
                            value="High"
                            checked={todoPriority === "High"}
                            onChange={(e) => onChangeTodoPriority(e)}
                        />
                        <label className="form-check-label">High</label>
                    </div>
                </div>
                <div className="form-check">
                    <input className="form-check-input"
                        id="completedCheckbox"
                        type="checkbox"
                        name="completedCheckbox"
                        onChange={(e) => onChangeTodoCompleted(e)}
                        checked={todoCompleted}
                        value={todoCompleted}
                    />
                    <label className="form-check-label" htmlFor="completedCheckbox">
                        Completed
                    </label>
                </div>
                <br />
                <div className="form-group">
                    <input type="submit" value="Update Todo" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}

export default EditTodo;