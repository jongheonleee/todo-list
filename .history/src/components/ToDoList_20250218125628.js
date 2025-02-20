import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ items }) => {
    return (
        <div>
            { items.map((item) => console.log(item.text))}
        </div>
    )
} 

export default ToDoList;