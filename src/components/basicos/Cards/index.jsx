// React
import React from 'react'

// Estilo
import "./styles.css"

const Cards = ({titulo, children, color}) => {
    
    const cardStyle = {
        backgroundColor: color,
        borderColor: color
    }

  return (
    <div className='Card' style={cardStyle}>
        <div className='Title'>{titulo}</div>
        <div className='Content'>{children}</div>
    </div>
  )
}

export default Cards