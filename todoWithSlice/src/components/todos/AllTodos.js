import React, {useEffect} from 'react';
import List from "./List";
import {fetchToDos, selectToDos} from "../../features/todoSlice";
import {useDispatch, useSelector} from "react-redux";

function AllTodos() {
    const todos = useSelector(selectToDos);
    const dispatch = useDispatch();

    const loadToDos = () => {
        if (!todos) {
            return;
        }
        return Object.values(todos).map((todo, index) => <List todo={todo} key={index}/>);
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

export default AllTodos;