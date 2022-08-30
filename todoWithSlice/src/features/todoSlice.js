import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import todo from "../apis/todo";
import _ from "lodash";
import {toast} from "react-toastify";

const setError = (state, action) => {
    state.loading = false;
    state.todos = [];
    state.error = action.error.message
    toast.error(action.error.message);
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        loading: false,
        todos: [],
        error: null
    },
    reducers: {
        createTodo: (state, action) => {
            return {...state, todos: {...state.todos, [action.payload.id]: action.payload}};
        }
    },
    extraReducers: builder => {

        builder.addCase(fetchToDos.pending, state => {
            state.loading = true;
        });

        builder.addCase(fetchToDos.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = {...state.todos, ..._.mapKeys(action.payload, 'id')};
            state.error = ''
        });

        builder.addCase(updateToDo.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = {...state.todos, [action.payload.id]: action.payload};
            state.error = ''
        });

        builder.addCase(deleteToDo.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = _.omit(state.todos, action.payload)
            state.error = ''
        });


        builder.addCase(fetchToDos.rejected, setError);
        builder.addCase(fetchToDo.rejected, setError);
        builder.addCase(createNewToDo.rejected, setError);
        builder.addCase(updateToDo.rejected, setError);
        builder.addCase(deleteToDo.rejected, setError);
    }
});


export const fetchToDos = createAsyncThunk(
    'todo/fetchToDos',
    async (data, thunkAPI) => {
        const response = await todo.get('/todos');
        return response.data;
    }
);

export const fetchToDo = createAsyncThunk(
    'todo/fetchToDo',
    async (id, thunkAPI) => {
        const response = await todo.get(`/todos/${id}`);
        thunkAPI.dispatch(createTodo(response.data));
        return response.data;
    }
);

export const createNewToDo = createAsyncThunk(
    'todo/createNewToDo',
    async (data, thunkAPI) => {
        const response = await todo.post('/todos', data);
        thunkAPI.dispatch(createTodo(response.data));
        return response.data;
    }
);

export const deleteToDo = createAsyncThunk(
    'todo/deleteToDo',
    async (id, thunkAPI) => {
        const response = await todo.delete(`/todos/${id}`);
        return id;
    }
);

export const updateToDo = createAsyncThunk(
    'todo/updateToDo',
    async (id, thunkAPI) => {
        const response = await todo.patch(`/todos/${id}`, {
            completed: !thunkAPI.getState().todo.todos[id].completed
        });
        return response.data;
    }
);

export const {createTodo} = todoSlice.actions;

export const getLoading = (state) => state.todo.loading;
export const selectToDos = (state) => state.todo.todos;
export const getActiveTodos = (state) => Object.values(state.todo.todos).filter(todo => !todo.completed);
export const getCompletedTodos = (state) => Object.values(state.todo.todos).filter(todo => todo.completed);

export default todoSlice.reducer;