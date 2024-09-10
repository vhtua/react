import React, { useState } from "react";

function UpdateArrayOfObject() {
    const [cars, setCars] = useState([]);   // Array of objects
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")

    function handleAddCar() {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        }
        setCars(c => [...c, newCar]);

        // Reset the input field
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index) {
        setCars(cars.filter((_, indx) => indx !== index))
    }

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }

    function handleModelChange(event) {
        setCarModel(event.target.value);
    }


    return (

        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((element, index) => 
                    <li key={index} onClick={() => handleRemoveCar(index)}> {element.year} {element.make} {element.model} </li>
                )}
            </ul>
            
            <input type="number" value={carYear} onChange={handleYearChange}/> <br/>
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make"/> <br/>
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model"/> <br/>
        
            <button onClick={handleAddCar}>Add a car</button>
        
        </div>
    );
}

export default UpdateArrayOfObject;