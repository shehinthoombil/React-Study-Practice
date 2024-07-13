// ChildComponent.jsx
import React, { useState } from 'react';

function ChildComponent({ onMessageSend }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const sendMessageToParent = () => {
        onMessageSend(inputValue);
    };

    return (
        <div>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} 
                placeholder="Type a message" 
            />
            <button onClick={sendMessageToParent}>Send to Parent</button>
        </div>
    );
}

export default ChildComponent;
