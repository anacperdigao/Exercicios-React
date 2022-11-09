import React from 'react'

const DiretaFilho = ({texto, numero, boolean}) => {

  return (
    <div>
        <div><strong>Texto:</strong> {texto}</div>
        <div><strong>Número:</strong> {numero}</div>
        <div><strong>Boolean:</strong> {boolean ? 'True' : 'False'}</div>
    </div>
  )
}

export default DiretaFilho