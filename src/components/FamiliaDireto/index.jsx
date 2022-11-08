import React from 'react'
import MembroFamilia from '../MembroFamilia'

const FamiliaDireto = (props) => {

  return (
    <div>

        <h2>Membros da família</h2>
        <MembroFamilia nome='Julia' {...props} />
        <MembroFamilia nome='João' sobrenome={props.sobrenome} />
        <MembroFamilia nome='Carolina' sobrenome={props.sobrenome} />

    </div>
  )
}

export default FamiliaDireto