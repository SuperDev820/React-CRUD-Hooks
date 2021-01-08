import React from "react";
import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodoList from "./components/todos-list.component";

import logo from "./logo.png";

function App() {
    return (
        <Router provider={BrowserRouter}>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
                        <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
                    </a>
                    <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
                    <div className="collpase nav-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link">Todos</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/create" className="nav-link">Create Todo</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br></br>
                <Route path="/" exact component={TodoList} />
                <Route path="/edit/:id" component={EditTodo} />
                <Route path="/create" component={CreateTodo} />
            </div>
        </Router>
    );
}

export default App;
