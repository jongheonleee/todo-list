import React from "react";
import "./InputForm.css";

const InputForm = ({ handleSubmit, handleText, clearItems, text }) => {
    return (
        <form 
            className="input-area"
            onSubmit={handleSubmit}
        >
            <input 
                type="text" 
                placeholder="할 일을 입력하세요" 
                onChange={handleText} 
                value={text}
            />
            {/* 아이템 추가 처리 */}
            <button 
                type="submit"
                className="add-btn"
            >
            +
            </button>
            {/* 모두 삭제 처리 */}
            <button 
                onClick={clearItems}
                className="clear-btn"
            >
            Clear All
            </button>
        </form>
    );
}

export default InputForm;