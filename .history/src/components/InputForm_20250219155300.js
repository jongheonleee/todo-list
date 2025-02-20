import React from "react";
import "./InputForm.css";

const InputForm = ({ handleSubmit, handleTitle, handleDone }) => {
    return (
        <form 
            className="input-area"
            onSubmit={handleSubmit}
        >
            <input 
                type="text" 
                placeholder="할 일을 입력하세요" 
                onChange={handleTitle} 
            />
            <button className="add-btn">+</button>
        </form>
    );
}

export default InputForm;