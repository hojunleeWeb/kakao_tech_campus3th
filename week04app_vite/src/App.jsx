import React from "react";

const App = () => {
    return (
        //jsx 문법 상에서는 return 아래의 단 하나의 태그만 존재해야한다 동일한 level의 태그가 하나 더 추가되면 오류 발생
        <div>
            <input type="text"></input>
        </div>
    );
};

export default App;
