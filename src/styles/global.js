import { createGlobalStyle } from 'styled-components';

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

  html, body, #__next {
    height: 100%;
    width: 100%;
  }

  #__next {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  body {
    background: ${props => props.theme.background};
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
