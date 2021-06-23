import React from 'react'

export const BotonAccion = ({ children, activo, tipo, accion }) => (
  <a href="" className={`${activo ? tipo + ' activo' : tipo}`} onClick={accion}>
    {children}
  </a>
)
