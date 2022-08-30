import React, {useEffect} from 'react';
import List from "./List";
import {useDispatch, useSelector} from "react-redux";
import {fetchTodos} from "../../actions";

function AllTodos() {
    const todos = useSelector(state => Object.values(state.todo.todos));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos())
    }, [todos, dispatch])

    const loadToDos = () => {
        if (!todos) {
            return;
        }
        return todos.map(todo => <List todo={todo} key={todo.id}/>);
    };

    return (
        <>
            {loadToDos()}
        </>
    );
}

export default AllTodos;