import React from "react";
import "./InputForm.css";

const InputForm = ({ handleSubmit, handleTitle, handleDone }) => {
    return (
        <form className="input-area">
            <input type="text" placeholder="할 일을 입력하세요" />
            <button className="add-btn">+</button>
        </form>
    );
}

export default InputForm;