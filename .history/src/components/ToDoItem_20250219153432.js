import React from "react";
import "./ToDoItem.css"

// item은 3가지 필드를 지님
// - id, text, done
const ToDoItem = ({ id, text, done, handleDelete }) => {
    return (
        <li>
            <div 
                id={id} 
                className="todo-item"
            >
                <input type="checkbox" />
                <span>{done ? <del>text</del> : text}</span>
            </div>
            <button className="delete-btn" onClick={handleDelete(id)}>🗑️</button>
        </li>
    )
}

export default ToDoItem;