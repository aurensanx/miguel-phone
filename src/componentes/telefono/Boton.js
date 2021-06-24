import React from 'react'

export const Boton = ({ children, accion, tipoBoton }) => (
  <button
    onClick={accion}
    className={tipoBoton}
  >
    {children}
  </button>
)
