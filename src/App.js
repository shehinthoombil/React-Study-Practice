import { useState } from "react";
import Counter from "./Counter.jsx";
import Employee from "./Employee.js";

function App() {
  const [count, setCount] = useState(0)
  const addCount = () => {
    setCount(count + 1)
  }
let emp = [{name:'shehin',age:22},
{name:'adhil',age:24},
{name:'thahir',age:27},
]

return (
  <div>
    <button onClick ={addCount}>click here</button>
    {
      emp.map((obj,index)=>{
        return (
          <Employee key = {index} {...obj}/>
        )
      })
    }
  </div>
);
}
export default App;


