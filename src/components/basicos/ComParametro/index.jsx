import React from 'react'

const ComParametro = ({titulo, aluno, nota}) => {

    const situacao = nota >= 7 ? 'APROVADO(A)' : 'REPROVADO(A)'; 

  return (
    <div>
        <h2>{titulo}</h2>
        <p>{aluno} tem nota {nota} e está {situacao} !</p>
    </div>
  )
}

export default ComParametro