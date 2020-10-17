import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback
} from 'react';
import { IconBaseProps } from 'react-icons'
import { FiAlertCircle } from 'react-icons/fi'
import { useField } from '@unform/core'


import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;

}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...restante }) => {
  //useRef nos dá acesso ao input value em inputRef.current
  // o useRef pega elementos HTML da DOM
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])


  // callback para controlar o focus
  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
    setIsFilled(!!inputRef.current?.value)
  }, [])


  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    // prop isFocused e isFilled. Olha a tipagem nos styles.ts
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        // ganhou o Foco
        onFocus={handleInputFocus}
        // perdeu o Foco
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...restante}
      />

      {error &&
        // está recebendo o title da prop pai Tooltip
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>}
    </Container>
  )
}
  ;

export default Input;
