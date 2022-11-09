import React from 'react'

const CondicionalIf = ({usuario}) => {
  return (
    <div>
        <h3>Condicional com IF</h3>
        <p>Seja bem vindo(a) <strong>{usuario.nome} !</strong></p>
    </div>
  )
}

export default CondicionalIf