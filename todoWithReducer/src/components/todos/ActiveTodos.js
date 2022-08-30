import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import List from "./List";
import {fetchTodos} from "../../actions";

function ActiveTodos() {
    const todos = useSelector(state => Object.values(state.todo.todos).filter(todo => !todo.completed));

    const dispatch = useDispatch();

    const loadToDos = () => {
        if (!todos) {
            return;
        }
        return todos.map(todo => <List todo={todo} key={todo.id}/>);
    };

    useEffect(() => {
        dispatch(fetchTodos())
    }, [todos, dispatch])

    return (
        <>
            {loadToDos()}
        </>
    );
}

export default ActiveTodos;