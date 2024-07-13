import React, { useState } from 'react'

function NewFile() {

    const [color, setColor] = useState("green")

    function handleColorChange(event) {
        setColor(event.target.value)
    }


    return (
        <div>
            <p>color:{color}</p>
            <button onClick={handleColorChange} >Click Me</button>
            

            

        </div>



    )
}

export default NewFile
