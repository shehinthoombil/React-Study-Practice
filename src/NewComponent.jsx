import React, { useState } from 'react'

function NewComponent() {
    const [user,setUser] = useState('')
    const [loggedIn,setLoggedIn] = useState(false)
    const handleClick = () => {
      if (!loggedIn) {
        setUser('welcome user');
      } else {
        setUser('');
      }
      setLoggedIn(!loggedIn);
    };

    

  return (
    <div>
        <p>{user}</p>
        <button onClick={handleClick} >{loggedIn ? "logout":"login"} </button>
    </div>
  )
}

export default NewComponent
