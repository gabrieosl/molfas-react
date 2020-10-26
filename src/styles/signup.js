import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  width: 350px;
  position: relative;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

  img {
    width: 200px;
    margin-bottom: 20px;
  }

  strong {
    color: ${props => props.theme.text};
    font-size: 18px;
  }

  span {
    color: #666;
  }

  form {
    display: flex;
    flex-direction: column;

    width: 100%;

    input {
      margin-top: 10px;
      height: 40px;
      border: 0;
      border-radius: 4px;
      background: ${props => props.theme.default};
      padding: 0 10px;
      font-weight: bold;
      color: ${props => props.theme.primary};

      &::placeholder {
        color: #ccc;
      }
    }

    button {
      background: ${props => props.theme.primary};
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      height: 40px;
      margin-top: 10px;
    }
  }

  button {
    margin-top: 15px;
    color: ${props => props.theme.primary};
    border: 0;
    background: none;
  }
`;

export const ResetPassword = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
`;
