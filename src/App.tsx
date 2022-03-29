import Todos from "./components/Todos";

function App() {
    const items = ["Item One", "Item Two"];
    return (
        <div>
            <Todos items={items} />
        </div>
    );
}

export default App;
