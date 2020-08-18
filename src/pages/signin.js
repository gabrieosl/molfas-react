import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from '~/redux/auth/actions';

import { Container, ResetPassword } from '~/styles/signin';

export default function SignIn() {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  function toogleResetPassword() {
    setVisible(!visible);
  }
  return (
    <Container>
      <img src="/logo_small_red.png" alt="Forture" size={32} color="#fff" />
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
        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
      </Form>
      <Link href="/signup">
        <a>Cadastrar</a>
      </Link>
      <button type="button" onClick={toogleResetPassword}>
        Esqueci a senha
      </button>
      <ResetPassword visible={visible}>
        <p>GAGAGAGAGAGAGA</p>
      </ResetPassword>
    </Container>
  );
}
