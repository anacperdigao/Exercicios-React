// React
import React from 'react';

// Estilo
import './App.css';

// Components
import NumeroAleatorio from './components/NumeroAleatorio';
import Cards from './components/Cards';
import ComParametro from './components/ComParametro';
import Familia from './components/FamiliaChildren';
import MembroFamilia from './components/MembroFamilia';
import FamiliaDireto from './components/FamiliaDireto';


function App() {
  return (
    <div className="App">
      
      <h1>Fundamentos React</h1>

      <div className="Cards">

        <Cards titulo='#4 - Componente com Filhos' color='#00c8f8'>
          <Familia sobrenome='Ferreira'>
            <MembroFamilia nome='Pedro' />
            <MembroFamilia nome='Ana' />
            <MembroFamilia nome='Gustavo' />
          </Familia>
        </Cards>

        <Cards titulo='#3 - Componente com Filhos' color='#e8b71a'>
          <FamiliaDireto sobrenome='Silva' />
        </Cards>

        <Cards titulo='#2 - Exemplo de Card' color='#fa6900'>
          <NumeroAleatorio min={1} max={100} />
        </Cards>

        <Cards titulo='#1 - Com Parâmetro' color='#e94c6f'>
          <ComParametro 
            titulo='Situção do aluno' 
            aluno='Ana Carolina' 
            nota={6.3} 
          />
        </Cards>
        
      </div>

    </div>
  );
}

export default App;
