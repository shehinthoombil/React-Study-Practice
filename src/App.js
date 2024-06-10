import Counter from "./Counter.js";
import Usage from "./pages/Usage.js";
import "./pages/Usage.css";
import { useState } from "react";
function App() {
  const [state, setState] = useState(false)
  return (
    <div className="App">
      <h1 onClick={() => setState(!state)}>Hello shehin</h1>
      {state && <Counter />}
      <Usage/>
    </div>
  )
}
export default App;


