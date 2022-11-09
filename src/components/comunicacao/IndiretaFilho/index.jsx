import React from 'react'

const IndiretaFilho = ({quandoClicar}) => {

  return (
    <div>
        <div>Botao no Componente Filho</div>
        <button onClick={() => quandoClicar('Filho Indireto', 25, false)}>Fornecer Informações p/ Pai</button>
    </div>
  )
}

export default IndiretaFilho