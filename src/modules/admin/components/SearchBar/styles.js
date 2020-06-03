import styled, { keyframes } from 'styled-components';

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    transform: 1;
  }
`;

export const Container = styled.div`
  flex-grow: 1;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  position: relative;

  input {
    flex-grow: 1;

    max-width: 300px;
    min-width: 150px;
    height: 40px;

    margin-right: -30px;
    padding-right: 45px;
    border: 0 !important;
    font-size: 18px;
    border-bottom: 2px solid #3f72af !important;
    color: #3f72af;
    background: none !important;

    animation: ${fadein} 1s;

    &::placeholder {
      color: #3f72af;
      font-style: italic;
      opacity: 0.7;
    }
  }

  button {
    border: 0;

    background: none !important;
    box-shadow: none !important;

    svg {
      width: 30px;
      height: 30px;
      color: #3f72af !important;
    }

    &.clearButton {
      width: 20px;
      height: 20px;
      svg {
        width: 18px;
        height: 18px;
        color: #3f72af;
      }
      position: absolute;
      top: 12px;
      right: 40px;
    }
  }
`;
