import React from 'react'

function Child({sendMessage}) {

    const handleClick = ()=>{
        sendMessage('Hello From child!')
    }

  return (
    <div>
      <button onClick={handleClick}>Send message to Parent</button>
    </div>
  )
}

export default Child
