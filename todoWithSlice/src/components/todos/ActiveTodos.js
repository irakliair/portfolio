import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchToDos, getActiveTodos} from "../../features/todoSlice";
import List from "./List";

function ActiveTodos() {
    const todos = useSelector(getActiveTodos);
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

export default ActiveTodos;