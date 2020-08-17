import styled, { css } from 'styled-components';

export const Container = styled.header`
  position: relative;
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 10px;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.2);
  background: ${props => props.theme.primary};

  #logo-small {
    height: 40px;
    width: 40px;
  }

  @media (min-width: 769px) {
    height: 100px;

    background: ${props => props.theme.background};

    #logo-small {
      display: none !important;
    }
  }
`;

export const Hamburguer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 40px;
  width: 40px;
  padding: 10px 0;
  background: none;
  border: 0;

  div.hamburger-line {
    width: 20px;
    height: 3px;
    background: ${props => props.theme.background};
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: none;
  opacity: 0;

  background: #000;

  ${props =>
    props.isMenuOpen &&
    css`
      display: flex;
      opacity: 0.7;
    `}
`;

export const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  background: ${props => props.theme.background};
  padding: 10px;
  transition: all 0.3s;
  transform: translateX(-100%);

  ${props =>
    props.isMenuOpen &&
    css`
      transform: translateX(0);
    `}

  @media (min-width: 769px) {
    position: static;
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0 10px;
    transform: translateX(0);
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  margin: 15px;

  a {
    margin: 4px 8px;
    color: ${props => props.theme.text};
  }

  @media (min-width: 769px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Customer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  margin: 15px;

  span {
    color: ${props => props.theme.text};
  }

  > a {
    margin: 5px 10px;
    color: ${props => props.theme.text};
  }

  svg {
    margin-right: 4px;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const Cart = styled.a`
  margin: 0 10px;

  svg {
    width: 20px;
    height: 20px;
    color: ${props => props.theme.background};
  }

  @media (min-width: 769px) {
    svg {
      color: ${props => props.theme.text};
    }
  }
`;
