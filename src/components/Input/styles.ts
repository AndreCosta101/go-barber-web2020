import styled, { css } from 'styled-components';

// tipagem do componente Container para definir o focus
interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
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
