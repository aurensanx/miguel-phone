import React from 'react'

export const Pantalla = (props) => {
  const { dato, tipo } = props
  return (
      <span className={tipo}>{dato}</span>
  )
}
