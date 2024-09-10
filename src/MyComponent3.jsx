import React, { useState } from "react";

// Updater function (using arrow func) as an argument for the useState() 

function MyComponent3() {
    const [count, setCount] = useState(0);
    
    function decrement() {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    function increment() {
        setCount(count + 1);
    }

    function reset() { 
        setCount(0);
    }

    return (
        <div>
            <h2>Updater function</h2>
            <p>Count: {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default MyComponent3;