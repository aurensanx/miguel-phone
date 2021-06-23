import React from 'react'

export const BotonAccion = (props) => {
  const { children, activo, tipo, accion } = props
  return (
        <>
            <a href="void" className={`${activo ? tipo + ' activo' : tipo}`} onClick={accion}>
              {children}
            </a>
        </>
  )
}
