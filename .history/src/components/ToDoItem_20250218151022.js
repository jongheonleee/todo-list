import React from "react";
import "./ToDoItem.css"

// item은 3가지 필드를 지님
// - id, text, done
const ToDoItem = ({ id, text, done }) => {
    return (
        <li className="todo-list li">
            <div className="todo-item">
                <input type="checkbox" />
                <span>리액트 학습</span>
            </div>
            <button className="delete-btn">🗑️</button>
        </li>
    )
}

export default ToDoItem;