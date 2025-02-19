import React from "react";
import "./InputForm.css";

const InputForm = ({ handleSubmit, handleTitle, handleDone }) => {
    return (
        <div className="input-area">
            <input type="text" placeholder="할 일을 입력하세요" />
            <button className="add-btn">+</button>
        </div>
    );
}

export default InputForm;