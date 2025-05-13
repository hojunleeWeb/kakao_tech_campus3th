// src/App.js

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, removeNumber } from "./redux/modules/counter";

const App = () => {
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const counterReducer = useSelector((state) => state.counter);
    console.log("state", counterReducer);

    return (
        <div>
            {counterReducer.number}
            <br />
            <input type="number" value={count} onChange={(e) => setCount(+e.target.value)} />
            <button
                onClick={() => {
                    dispatch(addNumber(count));
                }}
            >
                + 1
            </button>
            <button
                onClick={() => {
                    // 액션객체 디스패치
                    dispatch(removeNumber(count));
                }}
            >
                - 1
            </button>
        </div>
    );
};

export default App;
