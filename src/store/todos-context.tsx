import React, { useState } from "react";
import Todo from "../models/todo";

type ToDosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    deleteTodo: (id: string) => void;
};

export const TodosContext = React.createContext<ToDosContextObj>({
    items: [],
    addTodo: () => {},
    deleteTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);
        setTodos((currentTodos) => {
            return currentTodos.concat(newTodo);
        });
    };

    const deleteTodoHandler = (id: string) => {
        setTodos((currentTodos) => {
            return currentTodos.filter((todo) => todo.id !== id);
        });
    };

    const contextValue: ToDosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        deleteTodo: deleteTodoHandler,
    };

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    );
};

export default TodosContextProvider;
