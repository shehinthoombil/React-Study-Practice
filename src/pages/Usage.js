import React, { useState } from 'react';
import './Usage.css';

function Usage() {
    const [value, setValue] = useState(0)
    const [color, setColor] = useState('white')

    return (
        <div className='usage'>
            <div className='usage-items' style={{ backgroundColor: color }}>
                <button onClick={() => {
                    setValue(value + 1)
                }}>Increment</button>
                <label>{value}</label>
                <button onClick={() => {
                    setValue(value - 1)
                }}>Decrement</button>
            </div>
            <button onClick={() => {
                setColor('green')
            }}>Green</button>
            <button onClick={() => {
                setColor('yellow')
            }}>Yellow</button>
        </div>
    )
}

export default Usage;
