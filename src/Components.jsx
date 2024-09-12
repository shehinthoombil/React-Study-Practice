import { useState } from "react";


function Components() {
    const [count,setCount] =useState(0)
  return (
    <div>
        <p>count:{count}</p>
      <button onClick={()=>setCount(count+1)}>increase</button><br/>
      <button onClick={()=>setCount(count-1)}>deccrease</button>
    </div>
  )
} 

export default Components
