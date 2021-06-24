import React from 'react'
import styled from 'styled-components'

const StyledAction = styled.a`
  border-radius: 10px;
  padding: 20px;
  text-decoration: none;
  color: inherit;
  cursor: default;
  opacity: 0.5;
  transform: scale(0.9);
  transition: all 0.2s ease-out;
  ${({ activo }) => activo
    ? `
    cursor: pointer;
    opacity: 1;
    :hover {
      transform: scale(1);
    };
  `
: ''};
  ${({ styles }) => styles || ''};
`

export const BotonAccion = ({ children, activo, styles, accion }) => (
  <StyledAction activo={activo} styles={styles} onClick={accion}>
    {children}
  </StyledAction>
)
