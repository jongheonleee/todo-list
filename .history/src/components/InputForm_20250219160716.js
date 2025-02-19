import React from "react";
import "./InputForm.css";

const InputForm = ({ handleSubmit, handleText }) => {
    return (
        <form 
            className="input-area"
            onSubmit={handleSubmit}
        >
            <input 
                type="text" 
                placeholder="할 일을 입력하세요" 
                onChange={handleText} 
            />
            <button 
                type="submit"
                className="add-btn"
            >
            +
            </button>
        </form>
    );
}

export default InputForm;