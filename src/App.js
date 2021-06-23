import React, { useState } from 'react'
import './App.css'
import { Teclado } from './componentes/Teclado'

import { Pantalla } from './componentes/Pantalla'
import { Acciones } from './componentes/Acciones'

const textMap = {
  calling: 'Llamando...',
  ended: 'Llamada finalizada...'
}

function App () {
  const [numeroTelefono, setNumeroTelefono] = useState('')
  const [phoneState, setPhoneState] = useState('')

  const addNumero = tecla => {
    if (tecla === 'Borrar') {
      setNumeroTelefono('')
    } else {
      if (numeroTelefono.length === 8) {
        setPhoneState('canCall')
      } else {
        setNumeroTelefono(numeroTelefono + tecla)
      }
    }
  }
  const llamar = (e) => {
    e.preventDefault()
    setPhoneState('calling')
  }

  const colgar = (e) => {
    e.preventDefault()
    if (phoneState === 'calling') {
      setPhoneState('ended')
      setNumeroTelefono('')
    }
  }
  return (
    <div className="contenedor">
      <Pantalla dato={textMap[phoneState]} tipo="mensaje"/>
      <main className="telefono">
      <Teclado accion={addNumero}/>
      <Acciones numeroTelefono={numeroTelefono} llamarActivo={phoneState === 'canCall'} colgarActivo={phoneState === 'calling'} llamar={llamar} colgar={colgar}/>
      </main>
    </div>
  )
}

export default App
