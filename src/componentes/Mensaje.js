import React from 'react'

export const Mensaje = (props) => {
  const { children } = props
  return (
      <span className="mensaje">{children}</span>
  )
}
