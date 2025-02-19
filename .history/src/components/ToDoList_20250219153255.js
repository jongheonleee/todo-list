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
            {/* <li>
                <div className="todo-item">
                    <input type="checkbox" />
                    <span>리액트 학습</span>
                </div>
                <button className="delete-btn">🗑️</button>
            </li> */}
          {/* <li>
            <div className="todo-item">
              <input type="checkbox" />
              <span>JavaScript 학습</span>
            </div>
            <button className="delete-btn">🗑️</button>
          </li>
          <li>
            <div className="todo-item">
              <input type="checkbox" />
              <span>CSS 학습</span>
            </div>
            <button className="delete-btn">🗑️</button>
          </li> */}
        </ul>
    )
} 

export default ToDoList;