import React from 'react'

function ComponentD(props) {
  return (
    <div className='box'>
        <h2>Component D</h2>
        <h3>{`By ${props.user}`}</h3>
    </div>
  )
}

export default ComponentD
