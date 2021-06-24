import React, { useEffect, useState } from 'react'
import '../../App.css'
import { Teclado } from './Teclado'
import { Acciones } from './Acciones'

export const Telefono = ({ phoneState, setPhoneState }) => {
  const [numeroTelefono, setNumeroTelefono] = useState('')

  const addNumero = tecla => {
    setNumeroTelefono(prevNumber => {
      if (tecla === 'Borrar') return ''
      return prevNumber.length < 9 ? prevNumber + tecla : prevNumber
    })
  }

  useEffect(() => {
    setPhoneState(prevState => numeroTelefono.length === 9 ? 'canCall' : numeroTelefono.length === 0 ? prevState : '')
  }, [numeroTelefono.length])

  const llamar = e => {
    e.preventDefault()
    setPhoneState('calling')
  }

  const colgar = e => {
    e.preventDefault()
    if (phoneState === 'calling') {
      setPhoneState('ended')
      setNumeroTelefono('')
    }
  }
  return (
    <main className="telefono">
      <Teclado handleClick={addNumero}/>
      <Acciones numeroTelefono={numeroTelefono} llamarActivo={phoneState === 'canCall'} colgarActivo={phoneState === 'calling'} llamar={llamar} colgar={colgar}/>
    </main>
  )
}
