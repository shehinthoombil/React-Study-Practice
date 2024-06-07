import React, { useState, useEffect } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    useEffect(() => {
        console.log("Mounting..")
        console.log("Unmounting" +count)
        console.log("Unmounting" +count2)
    },[count,count2])
    
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>ADD</button>
            <h1>Hello mycount Component 1{count}</h1>

            <button onClick={() => setCount2(count + 1)}>ADD</button>
            <h1>Hello my count Component 2{count2}</h1>
        </div>
    )
}

export default Counter
