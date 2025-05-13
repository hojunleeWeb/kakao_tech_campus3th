import { useSelector } from "react-redux";

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    console.log("todos", todos);

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>{todo.title}</div>
            ))}
        </div>
    );
};

export default TodoList;
