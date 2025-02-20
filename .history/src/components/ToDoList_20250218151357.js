import React from "react";
import ToDoItem from "./ToDoItem";
import "./ToDoList.css"

const ToDoList = ({ items }) => {
    return (
        <ul className="list">
            { items.map((item) => {
                return (
                    <ToDoItem 
                        id = {item.id}
                        text = {item.text}
                        done = {item.done}
                    /> 
                )
            })}
        </ul>
    )
} 

export default ToDoList;