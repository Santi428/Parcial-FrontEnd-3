import React from 'react'

const Card = ({usuario}) => {
    
  return (
    <div>
        <h3>Hola {usuario.nombre} {usuario.apellido}</h3>
        <h3>Tu edad es: {usuario.edad}</h3>
    </div>
  )
}

export default Card