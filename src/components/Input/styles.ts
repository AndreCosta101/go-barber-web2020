import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

// tipagem do componente Container para definir o focus
interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}


export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;


  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  & + div{
        margin-top: 8px;
      }
//ficando acima das outras verificações, as de baixo terão mais poder
// o resultado é que ao dar foco no erro, a borda fica laranja de novo.
 ${props => props.isErrored && css`
      border-color: #c53030;
  `}

  // definição do prop isFocused = true
  ${props => props.isFocused && css`
      color: #ff9000;
      border-color: #ff9000;
  `}

  // definição de prop isFilled = true
  ${props => props.isFilled && css`
      color: #ff9000;
  `}





    input {
      flex: 1;
      background: transparent;
      border: 0;
      color: #f4ede8;


      &::placeholder {
        color: #666360;
      }
    }

    svg {
      margin-right: 16px;
    }
`;

// elemento superior Error, passando estilização pro tooltip
// através da classe.
export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color:#fff;

    &::before{
    border-color: #c53030 transparent;
    }
  }
`;
