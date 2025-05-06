// src > App.jsx
import { useState } from "react";
import Child from "./components/Child.jsx";

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>여기는 부모컴포넌트입니다.</h1>
            <span>현재 카운트 : {count}</span>
            <Child count={count} setCount={setCount} /> {/* 여기에 어떤 props를 넘겨줘야 할까요? */}
        </div>
    );
};

export default App;
