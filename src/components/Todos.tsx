import React from "react";

// React.FC adds type-safety for React Functional components
// This means this function has to return JSX
// React.FC is also a generic type similar to an Array.
// - An Array needs to be given the type of the data it will hold, eg. Array<string> or Array<string | number>
// - In the same way React.FC can be told what data it can receive, eg. React.FC<{foo: string}>
const Todos: React.FC = (props) => {
    return <ul>{}</ul>;
};

export default Todos;
