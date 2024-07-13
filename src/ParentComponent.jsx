// ParentComponent.jsx
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
    const [message, setMessage] = useState('');

    // Callback function to receive data from the child
    const handleReceiveMessage = (childData) => {
        setMessage(childData);
    };

    return (
        <div>
            <h1>Message from Child: {message}</h1>
            <ChildComponent onMessageSend={handleReceiveMessage} />
        </div>
    );
}

export default ParentComponent;
