import React, {useState} from "react";

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Spongebob");
    }

    const incrementAge = () => { 
        setAge(age + 1); 
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return (
        <> 
            <h2>useState()</h2>
            <p>useState() creates variable and its setter function (use callback func in html)</p>
            <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>

                <p>Age: {age}</p>
                <button onClick={incrementAge}>Increment Age</button>

                <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
                <button onClick={toggleEmployedStatus}>Toggle Employed Status</button>

            </div>  
        </>
    );
}

export default MyComponent;


