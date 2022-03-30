import React, { useContext } from "react";
// Components
import TodoItem from "./TodoItem";
// Context
import { TodosContext } from "../store/todos-context";
// Styles
import classes from "./Todos.module.css";

// React.FC adds type-safety for React Functional components
// This means this function has to return JSX
// React.FC is also a generic type similar to an Array.
// - An Array needs to be given the type of the data it will hold, eg. Array<string> or Array<string | number>
// - In the same way React.FC can be told what data it can receive, eg. React.FC<{foo: string}>
const Todos: React.FC = () => {
    const todoCtx = useContext(TodosContext);

    return (
        <ul className={classes.todos}>
            {todoCtx.items.map((item) => (
                <TodoItem
                    key={item.id}
                    text={item.text}
                    onDeleteTodo={todoCtx.deleteTodo.bind(null, item.id)}
                />
            ))}
        </ul>
    );
};

export default Todos;
