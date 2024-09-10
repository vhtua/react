import React, { useState, useEffect } from "react";

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => { setTime(new Date()) }, 1000) // after 1000ms = 1s, we will create a new Date object of the current time
        
        // clean up
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function formatTime() {
        let hour = time.getHours();
        let minute = time.getMinutes();
        let second = time.getSeconds();

        const meridiem = hour >= 12 ? "PM" : "AM";

        hour = hour % 12 || 12;

        return `${padZero(hour)}:${padZero(minute)}:${padZero(second)} ${meridiem}`

    }

    function padZero(number) {
        return Math.log10(number) < 1 ? `0${number}` : number;
    }
    
    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>

            </div>

        </div>
    );
}

export default DigitalClock;