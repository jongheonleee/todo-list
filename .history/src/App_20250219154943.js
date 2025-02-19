
import React from "react";
import { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import ToDoList from "./components/ToDoList";


const App = () => {
  // 해당 컴포넌트에서 관리해야할 필드값 정의 
  
  // 기본적으로 보여줄 리스트 
  const [ id, setId ] = useState(-1); // 특정 아잉템에 해당하는 id
  const [ items, setItems ] = useState([{ id : 1, text : "리액트 학습", done : false},
                                      { id : 2, text : "JavaScript 학습", done : false},
                                      { id : 3, text : "CSS 학습", done : false}]); // 기본적으로 보여줄 items
  const [ title, setTitle ] = useState('');
  const [ done, setDone ] = useState(false);

  // 해당 컴포넌트에서 관리하는 필드값을 핸들링하는 함수 정의 
  
  // 삭제 버튼 누르면 해당 아이템을 삭제함
  const handleDelete = (id) => { 
    // 삭제 버튼 누르면 해당 아이템을 삭제함

    // - 사용자가 누른 아이템의 id가 현재 배열에 있는지 확인
    // - 해당 id에 대응되는 아이템이 있으면 해당 아이템을 제거한다
    const newItems = items.filter(item => item.id !== id);

    // 알림창 띄우기
    notify('Item deleted successfully');

    // - items를 업데이트한다 
    setItems(newItems);

    // - id를 초기화한다. 
    setId(-1);

  };

  const handleSubmit = (item) => {
    // 입력 폼을 입력하고 추가 버튼을 누르면 새로운 아이템을 등록함 
    const newItems = items.push(item);
  };

  
  const handleTitle = (e) => {
    // todo-item 타이틀 작성시 상태 변경 
    alert(e.target.value);
    setTitle(e.target.value);
  }

  const handleDone = (e) => {
    // todo-item done/undone 상태 변경
    alert(e.target.value);
    setDone(e.target.value);
  }

  const handleEdit = () => {
    // 수정 버튼을 누르면 해당 아이템의 필드값을 수정함 

  };

  const handleAlert = () => {
    // 클라이언트에게 창을 띄워서 알림을 통지함 

  };

  const clearItems = () => {
    // 모든 아이템을 지움 

  }

  // 특정 작업 수행시 알림창 띄우기
  const notify = (message) =>  {
      alert(message);
  }

  // 아이템 유효성 검증
  const isValidItem = (item) => {
    return item !== null
  }

  // 렌더링할 페이지 형태 
  return (
    <div className="container">
      <div className="sub-container">
        <h2>📌 To-Do List</h2>


        {/* 입력 부분  */}
        <InputForm 
          handleSubmit={handleSubmit}
          handleTitle={handleTitle}
          handleDone={handleDone}
        />

        {/* todo-list 부분 */}
        <ToDoList 
          items={items}
          handleDelete={handleDelete}
        />

      </div>
    </div>
  );
}

export default App;
