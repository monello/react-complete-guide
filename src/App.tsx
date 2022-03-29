import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
    const todos = [
        new Todo("Complete the course"),
        new Todo("Create a pet project"),
    ];
    return (
        <div>
            <Todos items={todos} />
        </div>
    );
}

export default App;
