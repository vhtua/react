import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
    switch (action) {
        case "Increase":
            return state + 1;
        case "Decrease":
            return state - 1
        case "Clean":
            return 0;
        default:
            return state;
    }
}

const reducerObject = (state, action) => {
    switch (action.type) {
        case 'increase':
            return state + action.value;
        
        case 'reset':
            return 0;
        default:
            return state;
    }
}

const initState = {
    loading: false,
    data: [],
    error: null
}

const userReducer = (state, action) => {
    switch (action.type) {
        case "GET_USER_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "GET_USER_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.data
            }

        case "GET_USER_FAIL":
            return {
                ...state,
                error: action.data
            }
        
        default:
            break;
    }
}


function ReducerSample() {
    const [count, dispatch] = useReducer(reducer, 0);
    const [count2, dispatch2] = useReducer(reducerObject, 0);
    const [user, userDispatch] = useReducer(userReducer, initState);



    const getUsers = () => {   
        userDispatch({
            type: "GET_USER_REQUEST"
        })
        
        //  Because this is a fake API so that the response time is really fast. Therefore, I created a setTimeout func

        setTimeout(() => {}, 2000);

        fetch("https://reqres.in/api/users")
        .then(res => res.json())
        .then(res => { 
            userDispatch({
                type: "GET_USER_SUCCESS",
                data: res
            })
            console.log(res);
        })
        .catch(error => {
            userDispatch({
                type: "GET_USER_SUCCESS",
                data: error
            })
        }) 
    }


    return(
        <div>
            <h2>useReducer()</h2>

            <h4>Action is a string</h4>
            <p>Count: {count}</p>
            <button onClick={() => dispatch("Increase")}>Increase</button>
            <button onClick={() => dispatch("Decrease")}>Decrease</button>
            <button onClick={() => dispatch("Clean")}>Clean</button>

            <h4>Action is an object</h4>
            <p>Count2: {count2}</p>
            <button onClick={() => dispatch2({ type: "increase", value: 1 })}>Increase</button>
            <button onClick={() => dispatch2({ type: "reset", value: 0 })}>Reset</button>


            <h4>Request API</h4>
            {user.loading ? <p>Loading...</p> : <p>user: {JSON.stringify(user)}</p> } 
            <button onClick={getUsers}>GET USERS</button>
        </div>
    );
}


export default ReducerSample;
