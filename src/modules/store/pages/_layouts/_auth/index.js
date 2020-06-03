import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaHome } from 'react-icons/all';

import { Container, Content, Background } from './styles';

function Auth({ children }) {
  return (
    <Container>
      <Link to="/" className="home">
        <FaArrowLeft size={15} />
        <FaHome size={25} />
      </Link>
      <Content>{children}</Content>
      <Background />
    </Container>
  );
}

export default Auth;
