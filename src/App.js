import './App.css';
import { tacos, tacos_precios } from './tacos.js';

// Aqui estamos extrayendo el nombre de la propiedad
// en el que estamos pasando los valores
const Taco = ({items}) => {
  // Podemos utilizr JSX para iterar sobre una lista
  // y guardarla como un conjunto de elementos
  const listItems = items.map((item) => 
    <li>{item.taco} - {item.precio}</li>
  );

  return (
    // Aqui estamos insertando la lista en el momento 
    // de regresarla
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
