import React, { useState, useEffect } from "react";

// useEffect(() => {});
// useEffect(() => {}, []);
// useEffect(() => {}, [value]);

function UseEffect() {
    const [count, setCount] = useState(0);

    // Every time the <p> </p> re-render the title will update
    useEffect(() => {
        document.title = `Count: ${count}`;
    });

    // Only update the title once
    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // }, []);

    // Update the title when the count variable is updated
    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // }, [count]);

    function addCount() {
        setCount(c => c + 1);
    }

    return(
        <div>
            <h2>useEffect()</h2>

            <p>Count: {count}</p>
            <button onClick={addCount}>Add</button>
        </div>
    );
}

export default UseEffect;