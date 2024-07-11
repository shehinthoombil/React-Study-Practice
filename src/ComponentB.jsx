import ComponentC from './ComponentC'

function ComponentB(props) {
  return (
    <div className='box'>
       <h2>Component B</h2>
      <ComponentC user={props.user}/>
    </div>
  )
}

export default ComponentB
