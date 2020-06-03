import styled from 'styled-components';

import bgImage from '~/shared/assets/background-sign.jpg';

import { MAIN_COLOR, MAIN_COLOR_DARK } from '~/shared/styles/global';

export const Container = styled.div`
  display: flex;
  align-items: stretch;

  height: 100vh;

  background: linear-gradient(90deg, ${MAIN_COLOR}, ${MAIN_COLOR_DARK});

  a.home {
    display: flex;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;
    color: #fff;

    padding: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 45px 0;
  width: 100%;
  max-width: 500px;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${bgImage}) no-repeat center;
  background-size: cover;
`;
