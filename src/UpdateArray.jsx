import React, { useState } from "react";

function UpdateArray() {
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
    
    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value;

        setFoods((f) => ([...f, newFood]));
    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, indx) => indx !== index));
    }

    return (
        <div>
            <h2>List of Foods</h2>
            <p>Click specific food to remove</p>
            <ul>
                {foods.map((food, index) =>
                    <li key={index} onClick={() => handleRemoveFood(index)}> {food} </li>
                )}
            </ul>

            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={handleAddFood}>Add Food</button>
            {/* <button onClick={handleRemoveFood}>Delete Food</button> */}

                
        </div>
    );
}

export default UpdateArray; 