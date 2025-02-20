import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ items }) => {
    return (
        <ul className="list">
            { items.map((item) => console.log(item.text))}
        </ul>
    )
} 

export default ToDoList;