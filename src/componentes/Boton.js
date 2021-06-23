import React from 'react'

export const Boton = (props) => {
  const { children, accion, tipoBoton } = props
  return (
    <button
      onClick={accion}
      className={tipoBoton}
    >
      {children}
    </button>
  )
}
