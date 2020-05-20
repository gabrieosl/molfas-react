import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { signUpRequest } from '~/store/authStore/actions';

import { Wrapper, Container, SignUpContainer } from './styles';
import logo from '~/assets/forture_full_blue.png';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.authStore.loading);

  function handleSubmit({ firstName, lastName, email, password }) {
    dispatch(signUpRequest(firstName, lastName, email, password));
  }

  return (
    <Wrapper>
      <Container>
        <img src={logo} alt="Forture" size={32} color="#fff" />

        <SignUpContainer>
          <strong>Cadastrar Cliente</strong>
          <span>Entre com seus dados</span>
          <Form onSubmit={handleSubmit}>
            <Input name="firstName" type="text" placeholder="Nome" />
            <Input name="lastName" type="text" placeholder="Sobrenome" />
            <Input
              name="email"
              type="text"
              autoCapitalize="off"
              placeholder="E-mail"
            />
            <Input name="password" type="password" placeholder="Senha" />
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirme a senha"
            />
            <button type="submit">
              {loading ? 'Carregando...' : 'Cadastrar'}
            </button>
          </Form>
          <Link to="/signin">Entrar</Link>
        </SignUpContainer>
      </Container>
    </Wrapper>
  );
}
