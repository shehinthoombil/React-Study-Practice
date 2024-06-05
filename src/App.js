import './App.css'
import Header from './components/Header.js';
function App() {
  const data = "fortune kitchen" 
  return (
    <div>
       <Header data ={data} />
      <p> This is react js</p>
    </div>
  );
}

export default App;


