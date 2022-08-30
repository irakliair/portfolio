import React, {useRef} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import './App.css';
import Card from "./components/Card";
import Input from "./components/Input";
import Nav from "./components/Nav";
import AllTodos from "./components/todos/AllTodos";
import {useDispatch} from "react-redux";
import {createTodo} from "./actions";
import ActiveTodos from "./components/todos/ActiveTodos";
import CompletedTodos from "./components/todos/CompletedTodos";
import DeleteTodo from "./components/todos/DeleteTodo";

function App() {

    const dispatch = useDispatch();
    const inputRef = useRef();

    const onSubmit = (value) => {
        if (!value) {
            return;
        }
        dispatch(createTodo(value));
        inputRef.current.value = '';
    };

    return (
        <>
            <Card>
                <BrowserRouter>
                    <Input type="text" className="form-control add-task" placeholder="New Task..." onSubmit={onSubmit} inputRef={inputRef}/>
                    <Nav/>
                    <Switch>
                        <Route path="/" exact component={AllTodos}/>
                        <Route path="/active" exact component={ActiveTodos}/>
                        <Route path="/completed" exact component={CompletedTodos}/>
                        <Route path="/delete/:id" exact component={DeleteTodo}/>
                    </Switch>
                </BrowserRouter>
            </Card>
        </>
    );
}

export default App;
