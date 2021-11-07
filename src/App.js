import './App.css';
import { tacos, tacos_precios } from './tacos.js';

const Taco = ({items}) => {
  const listItems = items.map((item) => 
    <li>{item.taco} - {item.precio}</li>
  );

  return (
    <ul>{listItems}</ul>
  )
}

function App() {
  return (
    <div className="App">
      <Taco items={tacos_precios} />
    </div>
  );
}

export default App;
