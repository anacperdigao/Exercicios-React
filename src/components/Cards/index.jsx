// React
import React from 'react'

// Estilo
import "./styles.css"

const Cards = ({titulo, children}) => {
    
  return (
    <div className='Card'>
        <div className='Title'>{titulo}</div>
        <div className='Content'>{children}</div>
    </div>
  )
}

export default Cards