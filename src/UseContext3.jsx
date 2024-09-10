import React, { useContext } from "react";
import "./assets/css/UseContext.css"

import { UserContext } from './UseContext'

function UseContext3() {
    const username = useContext(UserContext);

    return (
        <div className="box">
            <h2>useContext() 3</h2>
            <p>Bye {username}</p>
        </div>
    );
}

export default UseContext3;
