import React from 'react';

import Toast from './Toast';

import { ToastMessage } from '../../hooks/toast';
import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

// essa message que vem como parâmetro é de um estado declarado no hook toast -> uso da Context API
const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => (
  <Container>
    {messages.map(message => (
      <Toast key={message.id} message={message} />
    ))}
  </Container>
);

// vai ser usado dentro do hook de toast.
export default ToastContainer;
