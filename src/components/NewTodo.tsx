import { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
    // here we need to use a Generic to tell useRef the exact type of HTML element we are referencing.
    // This will then allo TS to do the proper type-checking and valid property and method checks when we use the ref on the HTML element (below)
    // userRef() need a default value, we use 'null' in this case as we want the input element to be empty on-load
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        /*
        You ALWAYS get the value of a ref through the "current" property. React promises that at anytime the will be the most current value
        So don't do "todoTextInputRef.value", if might work in most cases, but you could get a headache later on if you cannot figure out
         why it's not giving you the latest value, due to the asynchronous nature of React
        Using "current" also adds the correct auto-completion and appropriate, required TS type checking
        By default the editor might automatically add a '? (optional-operator) directly after "current", this is because
         TS knows that an input field might not always have a value (especially when a blank form is potentially renderd)
        We can confidently set it to the "!" non-null assertion-operator because it's being used inside the "submitHandler()" method here
         and we KNOW (and will ensure) that it has a value at this stage, this tells TS not to do any checks and warn of potentially undefined valuess
        */
        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;
