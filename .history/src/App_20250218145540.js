
import React from "react";
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
    <div>
      <div class="container">
        <h2>📌 To-Do List</h2>
        <div class="input-area">
          <input type="text" placeholder="할 일을 입력하세요" />
          <button class="add-btn">+</button>
        </div>
        <ul class="todo-list">
          <li>
            <div class="todo-item">
              <input type="checkbox" />
              <span>리액트 학습</span>
            </div>
            <button class="delete-btn">🗑️</button>
          </li>
          <li>
            <div class="todo-item">
              <input type="checkbox" />
              <span>JavaScript 학습</span>
            </div>
            <button class="delete-btn">🗑️</button>
          </li>
          <li>
            <div class="todo-item">
              <input type="checkbox" />
              <span>CSS 학습</span>
            </div>
            <button class="delete-btn">🗑️</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
