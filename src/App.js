import React, { useState } from 'react'
import './App.css'

import { Pantalla } from './componentes/commons/Pantalla'
import { Telefono } from './componentes/telefono/Telefono'

const textMap = {
  calling: 'Llamando...',
  ended: 'Llamada finalizada...'
}

function App () {
  const [phoneState, setPhoneState] = useState('')

  return (
    <div className="contenedor">
      <Pantalla dato={textMap[phoneState]} tipo="mensaje"/>
      <Telefono phoneState={phoneState} setPhoneState={setPhoneState}/>
    </div>
  )
}

export default App
