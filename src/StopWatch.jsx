import React, {useState, useEffect, useRef} from "react";

function StopWatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);
    
    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => 
                setElapsedTime(Date.now()- startTimeRef.current) 
            , 10)
        }

        // clean up function
        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        return `${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds)}`;
    }

    function padZero(number) { return Math.log10(number) < 1 ? `0${number}` : number }

    return(
        <div>
            <h2>Stop Watch app</h2>
            <div className="stopwatch">
                <div className="display">{formatTime()}</div>
                <div className="controls">
                    <button className="start-stopwatch" onClick={start}>start</button>
                    <button className="stop-stopwatch" onClick={stop}>stop</button>
                    <button className="reset-stopwatch" onClick={reset}>reset</button>
                </div>
            </div>
        </div>
    );
}

export default StopWatch;