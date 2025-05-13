// src/modules/counter.js

// 초기 상태값
const initialState = {
    number: 0,
};

const ADD_NUMBER = "counter/ADD_NUMBER"; // 액션 타입을 정의합니다. (상수로 정의하는 것이 좋습니다.)
export const addNumber = (payload) => {
    return {
        type: ADD_NUMBER,
        payload: payload,
    };
}; //action 객체를 생성하는 함수를 export하자. 이 함수를 action 객체를 dispatch로 전달하는데 사용한다.

const REMOVE_NUMBER = "counter/MINUS_NUMBER"; // 액션 타입을 정의합니다. (상수로 정의하는 것이 좋습니다.)
export const removeNumber = (payload) => {
    return {
        type: REMOVE_NUMBER,
        payload: payload,
    };
}; //action 객체를 생성하는 함수를 export하자. 이 함수를 action 객체를 dispatch로 전달하는데 사용한다.

// 리듀서
const counter = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NUMBER: // counter/PLUS_ONE로 변경
            return {
                number: state.number + action.payload,
            };

        // action.type이 MINUS_ONE 일 때 새로운 state 반환
        case REMOVE_NUMBER: // counter/MINUS_ONE로 변경
            return {
                number: state.number - action.payload,
            };
        default:
            return state;
    }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;
