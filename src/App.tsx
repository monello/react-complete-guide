import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
    // Note: The useState() hook always expects an initial valus
    // We know that the todos will be an array, so it might be very tempting to set the initial valus as an empty array:
    //  useState([])
    // This is a mistake (well sortof, more like "not enough"), because if we do this we are actually setting the Type for the todos list as an empty array, meaning that
    //  if we try to add new elements to the array TS won't allow it... we said the todos must be an empty array ie. the shape is set to always
    //  be an empty array. TS got nothing else to specify the shape of the data except the `[]` empty array, so Type inferrence applies
    // Generics to the rescue again:
    //  - useState is an Generig, which means we can give that additional information about the shape of the todos with the angle-bracket syntax
    //  - We tell React the shape of the todos data, will be an Array of Todo's (as we defined in the `Todo` model = Custom Type/Class),
    //      and now the the intial value of '[]' does not force TS to infer a and set the Type as a hard empty array,
    //      but simply the initial value
    // The added benefit is that we now get proper type-checking: Whenever we try to add a new todo element to the array
    //  it MUST confirm to the shape we described in the Todo model!
    const [todos, setTodos] = useState<Todo[]>([]);

    // This function is declared in the App.tsx and passed as a prop to the NewTodo component
    // The reason it is defined here and not inside the NewTodo component, is because all the todos-state is managed here
    const onAddTodo = (todoText: string) => {
        // We use the Todo-model here as a class (as apose to how we used it inside the useState generic, a Custom Type),
        //  to ensure the "shape" of the newTodo is as expected
        const newTodo = new Todo(todoText);

        // Now Update the todo array (state), by using the Dispatch function that the useState() hook provided for us
        // Standard React rules for using a state-dispatch function is that if you want to update your state, based on
        //  the existing data in the state (in other words not overwrite the data we already have in state), we must use
        //  the function-syntax as the argument to the setTodos() state-dispatch function.
        //  - With this, React promises that we get the lastest version of the state as an argument to this function
        setTodos((currentTodos) => {
            // Concat is a standard JS array-method that combines 2 arrays and returns a brand new array
            // We want to return a new array as we do indeed want to replace the entire old state, but this way we ensure
            //  that we retain the old data and add the new data at the end.
            return currentTodos.concat(newTodo);
        });
    };

    const onDeleteTodoHandler = (id: string) => {
        setTodos((currentTodos) => {
            return currentTodos.filter((todo) => todo.id !== id);
        });
    };

    return (
        <div>
            <NewTodo onAddTodo={onAddTodo} />
            <Todos items={todos} onDeleteTodo={onDeleteTodoHandler} />
        </div>
    );
}

export default App;
