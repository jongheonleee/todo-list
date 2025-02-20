
import React from "react";
import { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import ToDoList from "./components/ToDoList";


const App = () => {
  // 해당 컴포넌트에서 관리해야할 필드값 정의 
  
  // 기본적으로 보여줄 리스트 
  const [ id, setId ] = useState(''); // 특정 아잉템에 해당하는 id
  const [ items, setItems ] = useState([{ id : 1,   text : "리액트 학습",       done : false},
                                        { id : 2,   text : "JavaScript 학습", done : false},
                                        { id : 3,   text : "CSS 학습",        done : false}]); // 기본적으로 보여줄 items
  const [ text, setText ] = useState('');
  const [ done, setDone ] = useState(false);

  // 해당 컴포넌트에서 관리하는 필드값을 핸들링하는 함수 정의 
  
  // 삭제 버튼 누르면 해당 아이템을 삭제함
  const handleDelete = (id) => { 
    // 삭제 버튼 누르면 해당 아이템을 삭제함

    // - 사용자가 누른 아이템의 id가 현재 배열에 있는지 확인
    // - 해당 id에 대응되는 아이템이 있으면 해당 아이템을 제거한다
    const newItems = items.filter(item => item.id !== id);

    // - items를 업데이트한다 
    setItems(newItems);

    // - id를 초기화한다. 
    setId('');

  };

  const handleSubmit = (e) => {
    // 입력 폼을 입력하고 추가 버튼을 누르면 새로운 아이템을 등록함 
    
    // - 리프레시 방지
    e.preventDefault();

    // - 작성한 타이틀 유효성 검증 
    if (!isValidText(text)) {
      return;
    }

    // - 아이템 등록 처리 
    const newItem = {id : crypto.randomUUID(), text: text, done: false};

    // - 아이템 배열에 추가
    const newItems = [...items, newItem];
    setItems(newItems);

    // - 초기화
    setId('');
    setText('');
    setDone(false);
  };

  
  const handleText = (e) => {
    // todo-item 타이틀 작성시 상태 변경 
    setText(e.target.value);
  }


  const clearItems = () => {
    // 모든 아이템을 지움 
    const newItems = [];
    setItems(newItems);
  }


  // 아이템 유효성 검증
  const isValidText = (text) => {
    return text !== null && text.length > 0;
  }

  // 렌더링할 페이지 형태 
  return (
    <div className="container">
      <div className="sub-container">
        <h2>📌 To-Do List</h2>
          {/* 입력 부분  */}
          <InputForm 
            handleSubmit={handleSubmit}
            handleText={handleText}
            clearItems={clearItems}
            text={text}
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
