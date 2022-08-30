import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import List from "./List";
import {fetchTodos} from "../../actions";

function CompletedTodos() {
    const todos = useSelector(state => Object.values(state.todo.todos).filter(todo => todo.completed));
    const dispatch = useDispatch();

    const loadToDos = () => {
        if (!todos) {
            return;
        }
        return todos.map(todo => <List todo={todo} key={todo.id}/>);
    };

    useEffect(() => {
        dispatch(fetchTodos())
    }, [todos])

    return (
        <>
            {loadToDos()}
        </>
    );
}

export default CompletedTodos;