// TextMatchForm.jsx
import React, { useState } from 'react';

function NewComponent() {
    // State for the two input fields
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    // State for the match result
    const [isMatch, setIsMatch] = useState(null);

    // Handle text change for the first input
    const handleText1Change = (e) => {
        setText1(e.target.value);
    };

    // Handle text change for the second input
    const handleText2Change = (e) => {
        setText2(e.target.value);
    };

    // Check if the texts match
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submit behavior
        if (text1 === text2) {
            setIsMatch(true);
        } else {
            setIsMatch(false);
        }
    };

    return (
        <div>
            <h1>Check Text Match</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="text1">Text 1:</label>
                    <input
                        type="text"
                        id="text1"
                        value={text1}
                        onChange={handleText1Change}
                    />
                </div>
                <div>
                    <label htmlFor="text2">Text 2:</label>
                    <input
                        type="text"
                        id="text2"
                        value={text2}
                        onChange={handleText2Change}
                    />
                </div>
                <button type="submit">Check Match</button>
            </form>
            {isMatch === true && <p style={{ color: 'green' }}>Texts match!</p>}
            {isMatch === false && <p style={{ color: 'red' }}>Texts do not match.</p>}
        </div>
    );
}

export default NewComponent;
