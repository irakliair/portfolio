import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchToDos, getActiveTodos, getCompletedTodos} from "../../features/todoSlice";
import List from "./List";

function CompletedTodos() {
    const todos = useSelector(getCompletedTodos);
    const dispatch = useDispatch();

    const loadToDos = () => {
        if (!todos) {
            return;
        }
        return todos.map((todo, index) => <List todo={todo} key={index}/>);
    };

    useEffect(() => {
        dispatch(fetchToDos())
    }, [])

    return (
        <>
            {loadToDos()}
        </>
    );
}

export default CompletedTodos;