import React from 'react'


const NumeroAleatorio = ({min, max}) => {

    const numAleatorio = parseInt(Math.random() * (max - min) + min)

    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>Valor Mínimo: {min}</p>
            <p>Valor Máximo: {max}</p>
            <p>Resultado: {numAleatorio}</p>
        </div>
    )
}

export default NumeroAleatorio