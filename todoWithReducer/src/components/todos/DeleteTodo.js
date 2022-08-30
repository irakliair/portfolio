import React, {useEffect} from 'react';
import Modal from "../Modal";
import {Link, useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo, fetchTodo} from "../../actions";

function DeleteTodo() {

    const history = useHistory();
    const dispatch = useDispatch();
    const todoId = useParams();

    const todo = useSelector(state => state.todo.todos[todoId.id]);

    useEffect(() => {
        dispatch(fetchTodo(todoId.id))
    }, []);

    const onDismiss = () => {
        history.push('/');
    };

    const renderContent = () => {

        if (!todo) {
            return 'Are you sure you want to delete this todo?';
        }

        return `Are you sure you want to delete this todo with title ${todo.title}`;
    };

    const onDelete = () => {
        dispatch(deleteTodo(todoId.id));
        history.push('/')
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