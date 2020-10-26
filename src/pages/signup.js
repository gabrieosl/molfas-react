import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { Form, Input } from '@rocketseat/unform';

import { signUpRequest } from '~/redux/auth/actions';

import Layout from '../layouts/_auth';
import { Container, SignUpContainer } from '~/styles/signup';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ firstName, lastName, email, password }) {
    dispatch(signUpRequest(firstName, lastName, email, password));
  }

  return (
    <Layout>
      <Container>
        <SignUpContainer>
          <img src="/logo_red.png" alt="Forture" size={32} color="#fff" />
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
          <Link href="/signin">
            <a>Entrar</a>
          </Link>
        </SignUpContainer>
      </Container>
    </Layout>
  );
}
