import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from '~/redux/auth/actions';

import { Wrapper, Container, LoginContainer, ResetPassword } from './styles';

export default function SignIn() {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.authAdmin.loading);

  function handleSubmit({ username, password }) {
    dispatch(signInRequest(username, password));
  }

  function toogleResetPassword() {
    setVisible(!visible);
  }
  return (
    <Wrapper>
      <Container>
        <img src="/logo.png" alt="Forture" size={32} color="#fff" />

        <LoginContainer>
          <strong>Área Restrita</strong>
          <span>Entre com suas credenciais</span>
          <Form onSubmit={handleSubmit}>
            <Input
              name="username"
              type="text"
              autoCapitalize="off"
              placeholder="Usuário"
            />
            <Input name="password" type="password" placeholder="Senha" />
            <button type="submit">
              {loading ? 'Carregando...' : 'Acessar'}{' '}
            </button>
          </Form>
          <button type="button" onClick={toogleResetPassword}>
            Esqueci a senha
          </button>
          <ResetPassword visible={visible}>
            <p>GAGAGAGAGAGAGA</p>
          </ResetPassword>
        </LoginContainer>
      </Container>
    </Wrapper>
  );
}
