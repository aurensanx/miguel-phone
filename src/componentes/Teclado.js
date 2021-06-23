import React from 'react'
import { Boton } from './Boton'

const numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Borrar']

export const Teclado = ({ accion }) => (
  <div className="botones">
    <ol className="teclado">
      {numeros.map((numero) => (
        <li key={numero}>
          <Boton accion={() => accion(numero)} tipoBoton={numero === 'Borrar' ? 'big' : ''}>
            {numero}
          </Boton>
        </li>
      ))}
    </ol>
  </div>
)
