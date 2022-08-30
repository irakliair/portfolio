import {CREATE_TODO, DELETE_TODO, EDIT_TODO, FETCH_TODO, FETCH_TODOS} from "../actions/types";
import _ from "lodash";

const INITIAL_STATE = {
    loading: false,
    todos: [],
    error: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_TODOS:
            return {...state, todos: {...state.todos, ..._.mapKeys(action.payload, 'id')}};
        case CREATE_TODO:
            return {...state, todos: {...state.todos, [action.payload.id]: action.payload}};
        case FETCH_TODO:
            return {...state, todos: {...state.todos, [action.payload.id]: action.payload}};
        case EDIT_TODO:
            return {...state, todos: {...state.todos, [action.payload.id]: action.payload}};
        case DELETE_TODO:
            return {...state, todos: _.omit(state.todos, action.payload)}
        default:
            return state;
    }
}