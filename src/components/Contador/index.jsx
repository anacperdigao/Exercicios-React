import React, { useState } from 'react'
import './styles.css'

const Contador = () => {

    const [numero, setNumero] = useState(0)
    const [passo, setPasso] = useState(1)

    const incremento = () => {
        setNumero(numero + Number(passo))
    }

    const decremento = () => {
        setNumero(numero - Number(passo))
    }

    const handlePasso = (evento) => {
        setPasso(evento.target.value)
    }
  
  return (
    <div className='Contador'>
        <h2>Contador</h2>
        <p className='Numero'>{numero}</p>

        <div className='Passo'>
            <p>Passo:</p> 
            <input value={passo} onChange={handlePasso} />
        </div>

        <div className='Botoes'>
            <button onClick={decremento}>-</button>
            <button onClick={incremento}>+</button>
        </div>
    </div>
  )
}

export default Contador