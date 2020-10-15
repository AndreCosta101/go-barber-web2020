import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;


const Button: React.FC<ButtonProps> = ({ children, ...restante }) => (
  <Container type="button" {...restante}>{children}</Container>
)
  ;

export default Button;
