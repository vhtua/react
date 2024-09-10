import React, {useState, useEffect} from "react";

function UseEffect2() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        // unmount the component, clean up it from the DOM
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED")
        }
    }, []);

    useEffect(() => {
        document.title = `Size ${width} x ${height}`;
    }, [width, height])

    // Without useEffect()
    // window.addEventListener("resize", handleResize);
    // console.log("EVENT LISTENER ADDED");

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    
    return (
        <div>
            <p>Windows width: {width}px</p>
            <p>Windows height: {height}px</p>
        </div>
    );
}

export default UseEffect2;