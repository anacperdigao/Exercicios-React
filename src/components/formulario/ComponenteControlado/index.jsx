import React, { useState } from 'react'

const ComponenteControlado = () => {

    const [input, setInput] = useState('Inicial')

    const handleChange = (event) => {
        setInput(event.target.value)
    }

  return (
    <div>

        <p>Input que muda</p>
        <input value={input} onChange={handleChange}/>
        <br />
        <p>Input Read Only</p>
        <input value={input} readOnly />
    </div>
  )
}

export default ComponenteControlado