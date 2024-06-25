import React, { useState } from 'react'
import Child from './Child'

function Parent() {

    const [message,setMessage] = useState('')
    
    const handleMessage = (msg)=>{
        setMessage(msg)
    }

  return (
    <div>
      <h1>message from child: {message}</h1>
      <Child sendMessage ={handleMessage}/>
    </div>
  )
}

export default Parent
