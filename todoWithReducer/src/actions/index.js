import {CREATE_TODO, DELETE_TODO, EDIT_TODO, FETCH_TODO, FETCH_TODOS} from "./types";
import todo from "../apis/todo";

export const createTodo = data => async dispatch => {
    const response = await todo.post('/todos', {
        title: data,
        completed: false
    });
    dispatch({type: CREATE_TODO, payload: response.data});
    // history.push('/');
};

export const fetchTodos = () => async dispatch => {
    const response = await todo.get('/todos');
    dispatch({type: FETCH_TODOS, payload: response.data});
}

export const fetchTodo = id => async dispatch => {
    const response = await todo.get(`/todos/${id}`);
    dispatch({type: FETCH_TODO, payload: response.data});
}

export const editTodo = (data, id) => async dispatch => {
    const response = await todo.patch(`/todos/${id}`, data);
    dispatch({type: EDIT_TODO, payload: response.data});
}

export const deleteTodo = id => async dispatch => {
    await todo.delete(`/todos/${id}`);
    dispatch({type: DELETE_TODO, payload: id});
}