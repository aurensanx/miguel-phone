import React from 'react'
import { css } from 'styled-components'
import { Pantalla } from '../commons/Pantalla'

import { BotonAccion } from './BotonAccion'

const llamarStyles = css`
  background-color: #00886a;
`
const colgarStyles = css`
  background-color: #b6002e;
`

export const Acciones = ({ numeroTelefono, llamarActivo, colgarActivo, llamar, colgar }) => (
  <div className="acciones">
    <Pantalla dato={numeroTelefono} tipo="numero"/>
    <BotonAccion activo={llamarActivo} styles={llamarStyles} accion={llamar}>Llamar</BotonAccion>
    <BotonAccion activo={colgarActivo} styles={colgarStyles} accion={colgar}>Colgar</BotonAccion>
  </div>
)
