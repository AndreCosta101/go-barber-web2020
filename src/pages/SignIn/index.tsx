import React, { useCallback, useRef, useContext } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/web';
import * as Yup from 'yup';

import AuthContext from '../../context/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';


import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const { name } = useContext(AuthContext)

  console.log(name)

  const handleSubmit = useCallback(async (data: object) => {
    try {
      //zerar os erros, para a mensagem de erro sumir ao gravar pela segunda vez.
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        email: Yup.string().required('Email obrigatório').email('Digite um email válido'),
        password: Yup.string().required('Senha obrigatória'),
      })

      /*
        * o Yup tem como padrão retornar apenas o ultimo erro que encontra.
        * o abortEarly: false faz ele retornar todos os erros.
      */
      await schema.validate(data, {
        abortEarly: false
      });

    } catch (err) {
      const errors = getValidationErrors(err)

      formRef.current?.setErrors(errors)
    }
  }, [])

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="login">
          <FiLogIn />
        Criar Conta
      </a>
      </Content>
      <Background />
    </Container >
  )
}

export default SignIn;
