import styled from 'styled-components';

import { COLOR_1, MAIN_COLOR, MAIN_COLOR_DARK } from '~/styles/global';

export const Container = styled.header`
  width: 100%;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.2);
  background: #fff;

  @media (max-width: 800px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: flex;
    }
  }
  @media (min-width: 801px) {
    .desktop {
      display: flex;
    }
    .mobile {
      display: none;
    }
  }
`;

export const ContentMobile = styled.div`
  height: 40px;
  background: #b30000;

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 40px;

    .side-drawer_button {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      height: 40px;
      width: 40px;
      padding: 10px 0;
      background: none;
      border: 0;

      .side-drawer__line {
        width: 20px;
        height: 3px;
        background: #fff;
      }
    }

    a.logo-small {
      > img {
        height: 40px;
      }
    }

    .cart {
      display: flex;
      align-items: center;
      height: 40px;
      width: 40px;

      color: #fff;

      > svg {
        width: 25px;
        height: 25px;
      }
    }
  }
`;

export const ContentDesktop = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 50px;
    color: ${MAIN_COLOR_DARK};

    div.credits {
      display: flex;
      align-items: center;

      p {
        display: flex;
        align-items: center;
        margin-right: 10px;

        svg {
          margin: 0 5px;
        }
      }
    }

    nav {
      display: flex;
      align-items: center;

      svg {
        height: 18px;
        width: 18px;
        margin-right: 5px;
      }

      p {
        display: flex;
        align-items: center;

        color: ${MAIN_COLOR};
        margin-right: 40px;
      }

      a {
        display: flex;
        align-items: center;

        color: ${MAIN_COLOR};
        margin: 0 10px;
      }
    }
  }

  hr {
    border: 0;
    border-bottom: 1px solid ${COLOR_1};
    width: 100%;
  }

  main {
    display: flex;
    align-items: center;

    width: 100%;
    height: 100px;

    img {
      height: 40px;
    }

    nav {
      display: flex;
      align-items: center;
      margin-left: 20px;

      a {
        color: ${MAIN_COLOR};
        font-size: 1rem;
        padding: 0 8px;
      }
    }
  }
`;
