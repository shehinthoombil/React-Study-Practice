import React, { useState, useEffect } from 'react'

function Component1() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("c render");
        document.title = `you click ${count} time`;

    }, [count])

    return (
        <div>
            <p>clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}

export default Component1

