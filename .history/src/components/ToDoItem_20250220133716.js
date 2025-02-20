import React from "react";
import "./ToDoItem.css"

// item은 3가지 필드를 지님
// - id, text, done
const ToDoItem = ({ id, text, done, handleDelete, checkDone }) => {
    return (
        <li>
            <div 
                id={id} 
                className="todo-item"
            >
                <input 
                    type="checkbox"
                    onClick={() => checkDone(id)}
                />
                <span>{done ? <del>text</del> : text}</span>
            </div>
            <button className="delete-btn" onClick={() => handleDelete(id)}>🗑️</button>
        </li>
    )
}

export default ToDoItem;