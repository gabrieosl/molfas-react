import { createGlobalStyle } from 'styled-components';

export const MAIN_COLOR = '#b30000';
export const MAIN_COLOR_DARK = '#660000';
export const COLOR_1 = '#FFEBEB';
export const COLOR_2 = '#FFD6D6';
export const COLOR_3 = '#FFC2C2';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  body {
    background: ${COLOR_1};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Nunito', sans-serif;
  }

  h1 {
    font-family: 'Roboto', sans-serif !important;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
