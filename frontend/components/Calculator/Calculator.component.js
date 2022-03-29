import { useCallback, useRef } from 'react';

export default function  CalculatorComponent() {
    const inputRef = useRef();
    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        const value = event.target.input.value;
        result2 = value;
    }, []);

    const handleClick = useCallback(() => {
        const val = inputRef.current.value;
        const date = new Date(val);
        const now = new Date();
        result = (now - date)/(3600*24*364*1000);
    }, [inputRef]);

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input id="input" type="text" />
                <button>Enter</button>
            </form>
            <input ref={ inputRef }/>
            <button onClick={ handleClick }>Submit</button>
        </div>
    );
}
