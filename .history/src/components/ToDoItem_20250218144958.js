import React from "react";

// item은 3가지 필드를 지님
// - id, text, done
const ToDoItem = ({ id, text, done }) => {
    return (
        <li>
            {
                done ? <del>text</del> : text
            }
        </li>
    )
}

export default ToDoItem;