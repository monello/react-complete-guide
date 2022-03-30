import React from "react";
// Components
import TodoItem from "./TodoItem";
// Models
import Todo from "../models/todo";
// Styles
import classes from "./Todos.module.css";

// React.FC adds type-safety for React Functional components
// This means this function has to return JSX
// React.FC is also a generic type similar to an Array.
// - An Array needs to be given the type of the data it will hold, eg. Array<string> or Array<string | number>
// - In the same way React.FC can be told what data it can receive, eg. React.FC<{foo: string}>
const Todos: React.FC<{ items: Todo[]; onDeleteTodo: (id: string) => void }> = (
    props
) => {
    return (
        <ul className={classes.todos}>
            {props.items.map((item) => (
                <TodoItem
                    key={item.id}
                    text={item.text}
                    onDeleteTodo={props.onDeleteTodo.bind(null, item.id)}
                />
            ))}
        </ul>
    );
};

export default Todos;
