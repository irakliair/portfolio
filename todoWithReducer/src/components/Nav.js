import React from 'react';
import {Link} from "react-router-dom";


function Nav() {
    return (
        <ul className="nav nav-pills todo-nav">
            <li role="presentation" className="nav-item all-task active">
                <Link to={'/'} className="nav-link">All</Link>
            </li>
            <li role="presentation" className="nav-item active-task">
                <Link to={'/active'} className="nav-link">Active</Link>
            </li>
            <li role="presentation" className="nav-item completed-task">
                <Link to={'/completed'} className="nav-link">Completed</Link>
            </li>
        </ul>
    );
}

export default Nav;