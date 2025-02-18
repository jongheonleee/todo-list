
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
    <>
      {/* 입력 영역 */}
      <InputForm />
    
      {/* to-do list 영역 */}
      <ToDoList items={items}/>
    </>
  );
}

export default App;
