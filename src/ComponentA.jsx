import { useState } from 'react'
import ComponentB from './ComponentB'

function ComponentA() {

const [user, setUserr] =useState("Shehin Thoombil")

  return (
    <div className='box'>
      <h2>Component A</h2>
      <h3>{`Hello ${user}`}</h3>
      <ComponentB user={user} />
    </div>
  )
}

export default ComponentA
