import React from 'react'
import DiretaFilho from '../DiretaFilho'

const DiretaPai = () => {

  return (
    <div>
        <DiretaFilho texto='Filho 1' numero={20} boolean={true} />
        <br />
        <DiretaFilho texto='Filho 2' numero={18} boolean={false} />
    </div>
  )
}

export default DiretaPai