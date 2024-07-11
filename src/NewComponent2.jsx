import React, { useEffect, useState } from 'react'

function NewComponent2() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setheight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("event listener is removed")
        }

    }, [])
    useEffect(() => {
        document.title = `size: ${width} * ${height}`;
    }, [width, height])


    function handleResize() {
        setWidth(window.innerWidth)
        setheight(window.innerHeight)
    }

    return (
        <>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </>
    )
}

export default NewComponent2
