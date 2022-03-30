import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
    const todos = [
        new Todo("Complete the course"),
        new Todo("Create a pet project"),
    ];

    // This function is declared in the App.tsx and passed as a prop to the NewTodo component
    // The reason it is defined here and not inside the NewTodo component, is because all the todos-state is managed here
    const onAddTodo = () => {};

    return (
        <div>
            <NewTodo onAddTodo={onAddTodo} />
            <Todos items={todos} />
        </div>
    );
}

export default App;
