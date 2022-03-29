import Todos, { TodosAF, TodosTF } from "./components/Todos";

function App() {
    return (
        <div>
            <Todos>
                <p>Children for React.FC</p>
            </Todos>
            <hr />
            <TodosAF items={[]}>
                <p>Children for Arrow funcion</p>
            </TodosAF>
            <hr />
            <TodosTF items={[]}>
                <p>Children for Traditional funcion</p>
            </TodosTF>
        </div>
    );
}

export default App;
