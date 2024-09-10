import React, {useState, useContext, useRef, useEffect} from "react";

function Reference() {
    // let [number, setNumber] = useState(0);
    const inputRef = useRef(null);

    console.log(inputRef);

    useEffect(() => {
        console.log("Component rendered");
    });

    function handleClick() {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "green";
    }

    return (
        <div>
            <h2>useRef()</h2>
            <button onClick={handleClick}>
                Click me!
            </button>

            <input type="text" ref={inputRef}/>
        </div>
    );
}

export default Reference;