import React,{useState} from 'react'

function NewComponent() {
  const [data,setData] = useState('')
  

  const handletext = ()=>{
    setData(data)
  }

  return (
    <div>
      <h1>hlo {user}</h1>
      <input type="text" value={data} />
      <input type2="text"  value ={da}/>

      <button onClick={handletext}> submit</button>
    </div>
  )
}

export default NewComponent

