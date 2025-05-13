const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload: payload,
    };
};

const initialState = [
    {
        id: 1,
        title: "리액트를 배워봅시다",
    },
    {
        id: 2,
        title: "redux를 배워봅시다",
    },
];

const todos = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload];
        case "REMOVE_TODO":
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
};
export default todos;
