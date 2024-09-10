import React, {useState, useContext} from "react";
import "./assets/css/UseContext.css"

import { PasswordContext } from "./ComponentA"

function ComponentB() {
    const password = useContext(PasswordContext);

    return (
        <div className="box">   
            <h4>Component B - Test useContext()</h4>

            <p>Received password: {password}</p>
        </div>
    );
}

export default ComponentB;