import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "./features/todoSlice";
import thunk from "redux-thunk";

export default configureStore({
    reducer: {
        todo: todoSlice,
    },
    middleware: [thunk],
    devTools: process.env.NODE_ENV !== 'production',
})