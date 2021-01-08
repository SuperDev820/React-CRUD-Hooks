import React, { useState } from "react";
import axios from "axios";

function CreateTodo() {
    const [todoDescription, setTodoDescription] = useState("");
    const [todoResponsible, setTodoResponsible] = useState("");
    const [todoPriority, setTodoPriority] = useState("Low");
    const [todoCompleted, setTodoCompleted] = useState(false);

    const onChangeTodoDescription = (event) => setTodoDescription(event.target.value);
    const onChangeTodoResponsible = (event) => setTodoResponsible(event.target.value);
    const onChangeTodoPriority = (event) => setTodoPriority(event.target.value);

    const onSubmit = (event) => {
        event.preventDefault();

        console.log("Form submitted:");
        console.log(`Todo Description: ${todoDescription}`);
        console.log(`Todo Responsible: ${todoResponsible}`);
        console.log(`Todo Priority: ${todoPriority}`);

        const newTodo = {
            todoDescription: todoDescription,
            todoResponsible: todoResponsible,
            todoPriority: todoPriority,
            todoCompleted: todoCompleted
        };

        axios.post("http://localhost:4000/todos/add", newTodo)
            .then(res => console.log(res.data));
        
        setTodoDescription("");
        setTodoResponsible("");
        setTodoPriority("Low");
        setTodoCompleted(false);
    }
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Create New Todo</h3>
            <form onSubmit={(e) => onSubmit(e)}>
                <div calssName="form-group">
                    <label>Description:</label>
                    <input type="text"
                        className="form-control"
                        value={todoDescription}
                        onChange={(e) => onChangeTodoDescription(e)}
                    />
                </div>
                <div calssName="form-group">
                    <label>Responsible:</label>
                    <input type="text"
                        className="form-control"
                        value={todoResponsible}
                        onChange={(e) => onChangeTodoResponsible(e)}
                    />
                </div>
                <div calssName="form-group">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="radio"
                            name="priorityOptions"
                            id="priorityLow"
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
                            id="priorityMedium"
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
                            id="priorityHigh"
                            value="High"
                            checked={todoPriority === "High"}
                            onChange={(e) => onChangeTodoPriority(e)}
                        />
                        <label className="form-check-label">High</label>
                    </div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Todo" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}

export default CreateTodo;