import React from 'react'

const CondicionalTernario = ({numero}) => {

    const isPar = numero % 2 === 0
  
    return (
    <div>
        <h3>Condicional com ternário</h3>
        <p>O número digitado é {numero} e portanto ele é:</p>
        {isPar 
        ? <span><strong>Par</strong></span> 
        : <span><strong>Ímpar</strong></span>
        }
    </div>
  )
}

export default CondicionalTernario