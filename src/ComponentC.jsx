import React,{useContext} from 'react'
import { UserContext } from './ComponentA'
import ComponentD from './ComponentD'

function ComponentC() {
  const user = useContext(UserContext)

  return (
    <div className='box'>
        <h2>Component C</h2>
        <ComponentD />
        <h3>{`Hello ${user}`}</h3>
    </div>
  )
}

export default ComponentC
