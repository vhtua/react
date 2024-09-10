import React, {useState, createContext} from "react";
import "./assets/css/UseContext.css"

import ComponentB from "./ComponentB";

export const PasswordContext = createContext();

function ComponentA() {
    const [password, setPassword] = useState("my password from component A");


    return (
        <div className="box">
            <h4>Component A - Test createContext()</h4>
            
            <PasswordContext.Provider value={password}>
                <p>Password: <b>{password}</b></p>
                <ComponentB value={password}/>
            </PasswordContext.Provider>

        </div>
    );
}

export default ComponentA;