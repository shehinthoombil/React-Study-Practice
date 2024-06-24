import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const incCount = () => {
        setCount(count + 1);
    };

    const decCount = () => {
        setCount(count - 1);
    };
    
    const resetCount = () => {
        setCount(0);
    };

    return (
        <div className='counter-container'>
            <p className='count-display'>{count}</p>
            <button className='counter-button' onClick={incCount}>Increment</button>
            <button className='counter-button' onClick={decCount}>Decrement</button>
            <button className='counter-button' onClick={resetCount}>Reset</button>
        </div>
    );
}

export default Counter;
