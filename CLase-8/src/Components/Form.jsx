import React, { useState } from 'react'
import Card from './Card'
import Error from './Error'

const Form = () => {

  const [usuario, setUsuario] = useState({
    nombre: '',
    apellido: '',
    edad: 0
  }) 
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const regex = /^(?!\s)[^\s]{3,}$/

  const handleSubmit = (e) => {
    e.preventDefault()
    if(regex.test(usuario.nombre) && usuario.apellido.length >= 6){
        setShow(true)
        setError(false)
    } else {
        setError(true)
    }
  }
  
  return (
    <div>
        <form>
            <label>Nombre</label>
                <input type='text' onChange={(e) => setUsuario({...usuario, nombre: e.target.value})}/>
            <label>Apellido</label>
                <input type='text' onChange={(e) => setUsuario({...usuario, apellido: e.target.value})}/>
            <label>Edad</label>
                <input type='number' onChange={(e) => setUsuario({...usuario, edad: e.target.value})}/>
            <button onClick={handleSubmit}>Enviar</button>
        </form>
        {show ? <Card usuario={usuario}/> : null}
        {error && <Error/>}

    </div>

  )
}

export default Form