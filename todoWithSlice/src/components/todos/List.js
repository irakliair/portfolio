import React, {useEffect, useState} from 'react';
import {updateToDo} from "../../features/todoSlice";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

function List({todo}) {

    const dispatch = useDispatch();

    const [check, setCheck] = useState(false);

    const handleCheck = () => {
        setCheck(!check);
        dispatch(updateToDo(todo.id));
    };

    useEffect(() => {
        setCheck(todo.completed);
    }, [todo]);

    return (
        <div className="todo-list">
            <div className={`todo-item ${check ? 'complete' : ''}`}>
                <div className="checker">
                    <span className="">
                        <input type="checkbox" checked={check} onChange={handleCheck}/>
                    </span>
                </div>
                <span className="todo-item-title">{todo.title}</span>
                <Link to={`/delete/${todo.id}`} className="float-right">
                    <i className="fa-solid fa-trash"></i>
                </Link>
            </div>
        </div>
    );
}

export default List;