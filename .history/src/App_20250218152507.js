
import React from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import ToDoList from "./components/ToDoList";


const App = () => {
  // 해당 컴포넌트에서 관리해야할 필드값 정의 

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

  // 해당 컴포넌트에서 관리하는 필드값을 핸들링하는 함수 정의 


  // 렌더링할 페이지 형태 
  return (
    <div className="container">
      <div className="sub-container">
        <h2>📌 To-Do List</h2>
        {/* 입력 부분  */}
        <InputForm />

        {/* todo-list 부분 */}
        <ToDoList 
          items={items}
        />

      </div>
    </div>
  );
}

export default App;
