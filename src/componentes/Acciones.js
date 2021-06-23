import React from 'react'
import { Pantalla } from './Pantalla'
import { BotonAccion } from './BotonAccion'

export const Acciones = (props) => {
  const { numeroTelefono, llamarActivo, colgarActivo, llamar, colgar } = props
  return (
      <div className="acciones">
        <Pantalla dato={numeroTelefono} tipo="numero"></Pantalla>
        <BotonAccion activo={llamarActivo} tipo="llamar" accion={llamar}>Llamar</BotonAccion>
        <BotonAccion activo={colgarActivo} tipo="colgar" accion={colgar}>Colgar</BotonAccion>
      </div>
  )
}
