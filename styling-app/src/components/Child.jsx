// src > components > Child.jsx
import React from "react";

const Child = ({ count, setCount }) => {
    const handleAddCound = () => {
        // ??
        setCount(count + 1);
    };
    return (
        <div>
            <h1>여기는 자식컴포넌트입니다.</h1>
            <span>현재 카운트 : {count}</span>
            <button onClick={handleAddCound}>증가</button>;
        </div>
    );
};
export default Child;
