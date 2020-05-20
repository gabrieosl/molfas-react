import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from '~/store/authStore/actions';

import { Wrapper, Container, LoginContainer, ResetPassword } from './styles';
import logo from '~/assets/forture_full_blue.png';

export default function SignIn() {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.authStore.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  function toogleResetPassword() {
    setVisible(!visible);
  }
  return (
    <Wrapper>
      <Container>
        <img src={logo} alt="Forture" size={32} color="#fff" />

        <LoginContainer>
          <strong>Área do Cliente</strong>
          <span>Entre com suas credenciais</span>
          <Form onSubmit={handleSubmit}>
            <Input
              name="email"
              type="text"
              autoCapitalize="off"
              placeholder="E-mail"
            />
            <Input name="password" type="password" placeholder="Senha" />
            <button type="submit">
              {loading ? 'Carregando...' : 'Acessar'}
            </button>
          </Form>
          <Link to="/signup">Cadastrar</Link>
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
