import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    width: 20px;
    height: 20px;
    margin-left: 5px;

    background: none;
    border: 0;

    transition: opacity 0.5s;
    opacity: 0.6;

    svg {
      width: 20px;
      height: 20px;
    }

    &.delete {
      color: #990000;
    }

    &.aggregate {
      background: #005500;
      color: #fff;
      border-radius: 50%;
    }

    &.delete {
      color: #ff4040;
    }
    &:hover {
      opacity: 1;
    }
  }
`;
