import styled from 'styled-components';

export const Container = styled.form`
  margin: 0 auto;
  height: 150px;
  flex-shrink: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    font-size: 16px;
    font-weight: bold;
    width: 600px;
    height: 50px;
    border: 0;
    border-radius: 50px;
    padding-left: 20px;
    padding-right: 60px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);

    color: #3f72af;

    &::placeholder {
      font-weight: normal;
      color: #3f72af66;
      font-style: italic;
    }
  }

  button {
    border: 0;
    background: none;
    color: #3f72af;
    margin-left: -50px;
    opacity: 0.5;
    transition: opacity 0.4s;

    &:hover {
      opacity: 1;
    }

    svg {
      height: 30px;
      width: 30px;
    }
  }
`;
