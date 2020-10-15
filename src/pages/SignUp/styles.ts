import styled from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  // o display flex deixaria o Content e o Background um do lado do outro
  // o strech faz com que eles tenham o tamanho total da página, divididos na metade.
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // Posso trocar isso:
  /* justify-content: center;
  align-items: center; */
  // por isso:
  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #F4EDE8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover{
        color: ${shade(0.2, '#F4EDE8')}
      }
    }
  }

  > a {
    color: #F4EDE8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover{
        color: ${shade(0.2, '#ff9000')}
      }

      display: flex;
      align-items: center;

      svg {
        margin-right: 16px;
      }
  }


`;

export const Background = styled.div`
  // flex 1 faz ocupar todo o espaço, menos os 700 pixels da linha 24
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  // cobre o tamanho de tudo que sobra de conteúdo no container
  background-size: cover;
`;
