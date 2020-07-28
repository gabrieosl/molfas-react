import React from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaHome } from 'react-icons/fa';

import { Container, Content, Background } from './styles';

function Auth({ children }) {
  return (
    <Container>
      <Link href="/">
        <a className="home">
          <FaArrowLeft size={15} />
          <FaHome size={25} />
        </a>
      </Link>
      <Content>{children}</Content>
      <Background />
    </Container>
  );
}

export default Auth;
