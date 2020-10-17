import React from 'react';

import { Container } from './styles'

interface TooltipProps {
  title: string;
  // isso permite que o ToolTip receba estilização de um componente superior
  // não pode ser obrigatória pq recebe depois no estilo da children (ver Tooltip/styles.ts)
  className?: string
}

const Tooltip: React.FC<TooltipProps> = ({ title, className = '', children }) => {
  return (
    //className para enviar estilização do Input para o tooltip
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
}

export default Tooltip;
