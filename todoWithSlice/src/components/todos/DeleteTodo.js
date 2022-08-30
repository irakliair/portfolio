import React, {useEffect} from 'react';
import Modal from "../Modal";
import {Link, useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteToDo, fetchToDo, selectToDos} from "../../features/todoSlice";

function DeleteTodo() {

    const history = useHistory();
    const dispatch = useDispatch();
    const todos = useSelector(selectToDos);

    const todoId = useParams();

    useEffect(() => {
        dispatch(fetchToDo(todoId.id))
    }, [dispatch]);

    const onDismiss = () => {
        history.push('/');
    };

    const renderContent = () => {
        if (!todos[todoId.id]) {
            return 'Are you sure you want to delete this stream?';
        }

        return `Are you sure you want to delete this stream with title ${todos[todoId.id].title}`;
    };

    const onDelete = () => {
        dispatch(deleteToDo(todoId.id));
        history.push('/');
    };

    const renderActions = () => {
        return (
            <>
                <Link to="/" type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</Link>
                <button type="button" className="btn btn-primary" onClick={onDelete}>Delete</button>
            </>
        );
    };

    return (
        <Modal
            title="Delete Todo"
            content={renderContent()}
            actions={renderActions()}
            onDismiss={onDismiss}
        />
    );
}

export default DeleteTodo;