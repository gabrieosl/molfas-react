import styled from 'styled-components';

import { MAIN_COLOR, COLOR_1, COLOR_2 } from '~/shared/styles/global';

export const Container = styled.div`
  align-self: center;
  position: relative;
  width: 150px;
  height: 30px;

  button {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    height: 100%;
    width: 100%;

    border: 0;
    border-radius: 4px;
    background: ${COLOR_1};
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

    img {
      object-fit: cover;
      height: 25px !important;
      width: auto !important;
      margin: 0 5px !important;
    }

    span {
      color: ${MAIN_COLOR};
      flex: 1;
    }

    svg {
      margin-right: 5px;
      height: 20px;
      width: 20px;
    }
  }
  ul {
    position: absolute;
    width: 100%;
    left: 0;

    @media (max-width: 800px) {
      bottom: 100%;
    }
    @media (min-width: 801px) {
      top: 100%;
    }

    padding: 1px 0;

    background: ${COLOR_1};

    li {
      display: flex;
      align-items: center;
      height: 30px;
      cursor: pointer;

      padding: 2px 10px;

      p {
        color: ${MAIN_COLOR};
        margin-left: 5px;
      }

      &:hover {
        background: ${COLOR_2};
      }
    }
  }
`;
