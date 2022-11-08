import React, { cloneElement } from 'react'


const Familia = (props) => {
    // console.log(props)
    // console.log(props.children)

  return (
    <div>

        <h2>Membros da família</h2>
        {props.children.map(child => cloneElement(child, props))}

    </div>
  )
}

export default Familia