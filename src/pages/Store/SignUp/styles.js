import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(0deg, ${darken(0.2, '#325ca8')}, #325ca8);
`;

export const Container = styled.div`
  background: #fff;
  border-radius: 7px;
  display: flex;
  flex-wrap: wrap;
  margin: 15px;
  align-items: center;
  justify-content: center;
  justify-items: center;
  padding: 50px 25px 35px 25px;
  img {
    height: 160px;
    padding: 0 15px 0 0;
  }
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 300px;
  position: relative;
  margin: 15px 0;

  strong {
    color: #325ca8;
    font-size: 18px;
  }

  span {
    color: #666;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      margin-top: 10px;
      height: 40px;
      border: 0;
      border-radius: 4px;
      background: #ccc;
      padding: 0 10px;
      font-weight: bold;
      color: #325ca8;

      &::placeholder {
        color: #325ca866;
      }
    }

    button {
      background: #325ca8;
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
    color: #325ca8;
    border: 0;
  }
`;

export const ResetPassword = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
`;
