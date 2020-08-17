import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './global';
import { defaultTheme } from './themes';

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default Theme;
