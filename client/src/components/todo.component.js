import React from "react";
import { Link } from "react-router-dom";

const Todo = (props) => {
    return (
        <tr>
            <td className={props.todo.todoCompleted ? "completed" : ""}>{props.todo.todoDescription}</td>
            <td className={props.todo.todoCompleted ? "completed" : ""}>{props.todo.todoResponsible}</td>
            <td className={props.todo.todoCompleted ? "completed" : ""}>{props.todo.todoPriority}</td>
            <td>
                <Link to={"/edit/" + props.todo._id}>Edit</Link>
            </td>
        </tr>
    );
};

export default Todo;