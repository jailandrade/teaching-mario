import './App.css';
import { tacos, tacos_precios } from './tacos.js';

function App() {
  return (
    <div className="App">
      <ul>
        {tacos.map((taco) => 
          <li>{taco}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
