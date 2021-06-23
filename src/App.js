import React, { useState } from 'react'
import './App.css'
import { Teclado } from './componentes/Teclado'

import { Pantalla } from './componentes/Pantalla'
import { Acciones } from './componentes/Acciones'

function App () {
  const [numeroTelefono, setNumeroTelefono] = useState('')
  const [textoLlamada, setTextoLlamada] = useState('')
  const [llamarActivo, setLLamarActivo] = useState(false)
  const [colgarActivo, setColgarActivo] = useState(false)
  const addNumero = (e) => {
    if (e === 'Borrar') {
      setNumeroTelefono('')
    } else {
      if (numeroTelefono.length === 8) {
        setLLamarActivo(true)
      } else {
        setLLamarActivo(false)
        setNumeroTelefono(numeroTelefono + e)
      }
    }
  }
  const llamar = (e) => {
    e.preventDefault()
    if (llamarActivo) {
      setTextoLlamada('Llamando...')
      setLLamarActivo(false)
      setColgarActivo(true)
    }
  }
  const colgar = (e) => {
    e.preventDefault()
    if (colgarActivo) {
      setTextoLlamada('Llamada finalizada...')
      setLLamarActivo(false)
      setColgarActivo(false)
      setNumeroTelefono('')
    }
  }
  return (
    <div className="contenedor">
      <Pantalla dato={textoLlamada} tipo="mensaje"></Pantalla>
      <main className="telefono">
      <Teclado accion={addNumero}></Teclado>
      <Acciones numeroTelefono={numeroTelefono} llamarActivo={llamarActivo} colgarActivo={colgarActivo} llamar={llamar} colgar={colgar}></Acciones>
      </main>
    </div>
  )
}

export default App
