// React
import React from 'react';

// Estilo
import './App.css';

// Components
import NumeroAleatorio from './components/NumeroAleatorio';


function App() {
  return (
    <div className="App">
      
      <h1>Fundamentos React</h1>
      <NumeroAleatorio min={1} max={100} />
    
    </div>
  );
}

export default App;
