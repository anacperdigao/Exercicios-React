import React from 'react'
import TesteIf from './TesteIf'

const CondicionalIf = ({usuario}) => {
  return (

    <div>
        <h3>Condicional com IF</h3>
        
        <TesteIf teste={usuario && usuario.nome} >
            <p>Seja bem vindo(a) <strong>{usuario.nome} !</strong></p>    
        </TesteIf>
        
    </div>
  )
}

export default CondicionalIf