import React, { useState } from "react"

function MyComponent() {

    const [name, setName] = useState("Thirunavaya");
    const [age, setAge] = useState(0)
    const [isEmployed, setIsEmployed] = useState(false)
    const updateName = () => {
        setName("Shehin Thoombil")
    }
    const updateAge = ()=>{
        setAge(age+1)
    }

    const updateIsEmployee = ()=>{
        setIsEmployed(!isEmployed)
    }

    return (
        <div>
            <p>Name : {name}</p>
            <button onClick={updateName}>Click Meeee</button>

            <p>Age : {age}</p>
            <button onClick={updateAge}>Increment Age</button>
           
            <p>isEmployee : {isEmployed ? "Yes" : "No"}</p>
            <button onClick={updateIsEmployee}>Status</button>
        </div>
    )
}

export default MyComponent
