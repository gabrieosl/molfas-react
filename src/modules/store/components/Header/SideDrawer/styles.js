import styled, { css } from 'styled-components';
import { MAIN_COLOR, MAIN_COLOR_DARK } from '~/shared/styles/global';

export const Backdrop = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
`;

export const Drawer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  z-index: 20;
  transform: translateX(-350px);
  transition: transform 0.3s ease-out;
  ${props =>
    props.visible &&
    css`
      transform: translateX(0);
    `}

  background: #fff;
  box-shadow: 3px 0px 5px #000;

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > button {
      align-self: flex-end;

      background: none;
      border: 0;
      color: ${MAIN_COLOR};

      svg {
        width: 20px;
        height: 20px;
      }
    }

    > img {
      align-self: center;
      width: 150px;
      margin-bottom: 20px;
    }

    > a {
      display: flex;
      align-items: center;

      width: 100%;
      padding: 0 1rem;
      color: ${MAIN_COLOR};
      font-size: 1.5rem;
      height: 40px;

      svg {
        height: 18px;
        width: 18px;
        margin-right: 5px;
      }
    }

    hr {
      align-self: center;
      margin: 20px 0;
      border: 0;
      border-bottom: 1px solid ${MAIN_COLOR};
      width: 90%;
    }

    section.user {
      display: flex;
      flex-direction: column;
      width: 100%;

      svg {
        width: 15px;
        height: 15px;
        margin-right: 5px;
      }

      p {
        align-self: center;
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        color: ${MAIN_COLOR_DARK};
      }
      > a {
        display: flex;
        align-items: center;

        width: 100%;
        padding: 0 1rem;
        font-size: 1.2rem;
        height: 40px;
        color: ${MAIN_COLOR_DARK};

        svg {
          height: 18px;
          width: 18px;
          margin-right: 5px;
        }
      }
    }
  }

  footer {
    display: flex;
    flex-direction: column;

    width: 100%;

    div.credits {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      padding: 10px 15px;

      width: 100%;
      height: 80px;

      p {
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${MAIN_COLOR};

        svg {
          margin: 0 5px;
        }
      }
    }
  }
`;
