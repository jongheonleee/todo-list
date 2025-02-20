import React from "react";
import ToDoItem from "./ToDoItem";
import "./ToDoList.css"

const ToDoList = ({ items, handleDelete }) => {
    return (
        <ul className="todo-list">
            {
                items.map(item => {
                    return (
                        <ToDoItem 
                            id={item.id}
                            text={item.text}
                            done={item.done}
                            handleDelete={handleDelete}
                        />
                    )
                })
            }
        </ul>
    )
} 

export default ToDoList;