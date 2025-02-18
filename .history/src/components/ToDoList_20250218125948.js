import React from "react";
import ToDoItem from "./ToDoItem";
import "./ToDoList.css"

const ToDoList = ({ items }) => {
    return (
        <ul className="list">
            { items.map((item) => {
                return (
                    <li> item.text </li>
                )
            })}
        </ul>
    )
} 

export default ToDoList;