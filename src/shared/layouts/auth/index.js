import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/modules/store/components/Header';

import { Container } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
