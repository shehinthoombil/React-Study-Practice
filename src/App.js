import { useState } from "react";
import Counter from "./Counter.jsx";

function App() {
  const [count, setCount] = useState(0)
  const addCount = () => {
    setCount(count + 1)
  }

return (
  <div>
    <button onClick ={addCount}>click here</button>
   <Counter count = {count} />
  </div>
);
}
export default App;


