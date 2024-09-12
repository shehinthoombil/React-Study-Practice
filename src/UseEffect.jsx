import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval)

    }, []);

    return <p>time:{seconds}</p>
}

export default UseEffect
