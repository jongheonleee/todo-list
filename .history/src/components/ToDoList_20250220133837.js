import React from "react";
import ToDoItem from "./ToDoItem";
import "./ToDoList.css"

const ToDoList = ({ items, handleDelete, checkDone }) => {
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
                            checkDone={checkDone}
                        />
                    )
                })
            }
        </ul>
    )
} 

export default ToDoList;