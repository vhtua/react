import React, { useState, useEffect, createContext } from "react";
import "./assets/css/UseContext.css"

import UseContext2 from "./UseContext2";

export const UserContext = createContext();

function UseContext() {

    const [username, setUsername] = useState("Bro");

    return (
        <div className="box">
            <h2>useContext()</h2>
            <h2>Hi {username}</h2>

            {/* This is the provider component which provides `user` stateful value --> need a consumer (UseContext 3) */}
            <UserContext.Provider value={username}>
                <UseContext2/>
            </UserContext.Provider>

        </div>
    );
}

export default UseContext;
