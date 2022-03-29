import React from "react";

// React.FC adds type-safety for React Functional components
// This means this function has to return JSX
// React.FC is also a generic type similar to an Array.
// - An Array needs to be given the type of the data it will hold, eg. Array<string> or Array<string | number>
// - In the same way React.FC can be told what data it can receive, eg. React.FC<{foo: string}>

type TodoProps = {
    items: string[];
    children?: React.ReactNode;
};

export const TodosAF = (props: TodoProps) => {
    return (
        <>
            <ul>list-items will go here later</ul>
            {props.children}
            <p>Arrow-function and no React.FC</p>
        </>
    );
};

export function TodosTF(props: TodoProps) {
    return (
        <>
            <ul>list-items will go here later</ul>
            {props.children}
            <p>Traditional-function and no React.FC</p>
        </>
    );
}

const Todos: React.FC = (props) => {
    return (
        <>
            <ul>list-items will go here later</ul>
            {props.children}
            <p>Arrow-function using React.FC</p>
        </>
    );
};

export default Todos;
