import React from 'react'

export const BotonAccion = ({ children, activo, tipo, accion }) => (
  <a className={`${activo ? tipo + ' activo' : tipo}`} onClick={accion}>
    {children}
  </a>
)
