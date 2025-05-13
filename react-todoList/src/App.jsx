import "./App.css";
import AddForm from "./components/AddForm";
import TodoList from "./components/TodoList";

const App = () => {
    return (
        <>
            <div>
                <h1>Redux TODO APP</h1>
                <AddForm />
                <TodoList />
            </div>
        </>
    );
};

export default App;
