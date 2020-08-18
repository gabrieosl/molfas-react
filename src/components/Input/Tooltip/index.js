import React from 'react';

import { Container } from './styles';

const Tooltip = ({ title, className = '', children }) => {
  return (
    <Container className={className}>
      <span>{title}</span>
      {children}
    </Container>
  );
};

export default Tooltip;
