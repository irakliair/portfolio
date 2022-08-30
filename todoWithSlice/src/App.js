import React, {useRef} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import './App.css';
import ActiveTodos from "./components/todos/ActiveTodos";
import {useDispatch} from "react-redux";
import {createNewToDo} from "./features/todoSlice";
import Card from "./components/Card";
import Input from "./components/Input";
import Nav from "./components/Nav";
import AllTodos from "./components/todos/AllTodos";
import CompletedTodos from "./components/todos/CompletedTodos";
import DeleteTodo from "./components/todos/DeleteTodo";
import Spin from "./components/Spin";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

    const dispatch = useDispatch();

    const inputRef = useRef();

    const onSubmit = (value) => {
        if (!value) {
            return;
        }
        dispatch(createNewToDo({title: value, completed: false}));

        inputRef.current.value = '';
    };

    return (
        <>
            <Spin/>
            <ToastContainer />
            <Card>
                <BrowserRouter>
                    <Input type="text" className="form-control add-task" placeholder="New Task..." onSubmit={onSubmit}
                           inputRef={inputRef}/>
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
