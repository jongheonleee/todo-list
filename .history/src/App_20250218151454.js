
import React from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import ToDoList from "./components/ToDoList";


const App = () => {
  // 기본적으로 보여줄 리스트 
  const items = [
    { 
      id : 1, 
      text : "리액트 학습",
      done : false
    },

    {
      id : 2, 
      text : "JavaScript 학습",
      done : false
    },

    {
      id : 3, 
      text : "CSS 학습",
      done : false
    }
  ];


  return (
    <div className="container">
      <div className="sub-container">
        <h2>📌 To-Do List</h2>

        {/* 입력 부분  */}
        <div className="input-area">
          <input type="text" placeholder="할 일을 입력하세요" />
          <button className="add-btn">+</button>
        </div>

        {/* <InputForm /> */}

        {/* todo-list 부분 */}
        <ul className="todo-list">
          <li>
            <div className="todo-item">
              <input type="checkbox" />
              <span>리액트 학습</span>
            </div>
            <button className="delete-btn">🗑️</button>
          </li>
          <li>
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
          </li>
        </ul>
{/* 
        <ToDoList /> */}

      </div>
    </div>
  );
}

export default App;
