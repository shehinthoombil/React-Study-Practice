import React,{useContext} from 'react'
import { UserContext } from './ComponentA'

function ComponentD() {

  const user = useContext(UserContext);

  return (
    <div className='box'>
        <h2>Component D</h2>
        <h3>{`By ${user}`}</h3>
    </div>
  )
}

export default ComponentD
