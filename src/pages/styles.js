import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 25px;
    padding: 15px;
    margin-top: 10px;
    color: #112d4e;
    text-align: center;
  }

  div.contact-map {
    display: flex;
  }
`;

export const Banner = styled.div`
  width: 100%;
  background: #fff;

  div.wrapper {
    position: relative;

    display: ${props => (props.active ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    max-width: 1100px;

    padding: 90px;
    margin: 0 auto;

    .navigate-before {
      position: absolute;
      left: 0;
      top: calc(50% - 25px);
      height: 50px;
      width: 30px;
      color: #3f72af;
    }
    .navigate-next {
      position: absolute;
      left: 100%;
      top: calc(50% - 25px);
      height: 50px;
      width: 30px;
      color: #3f72af;
    }

    h1 {
      color: #3f72af;
      font-family: 'Nunito', sans-serif;
      font-size: 34px;
    }

    button {
      margin-top: 60px;
      font-size: 18px;
      background: #3f72af;
      padding: 10px 25px;
      border-radius: 25px;
      color: #fff;
      border: 0;
    }
  }
`;

export const ContactMap = styled.div`
  width: 100%;
  background: #3f72af;
  padding: 10px 0;
  box-shadow: 1px 1px 5px rgba(255, 255, 255, 0.3);
  z-index: 11;

  div.wrapper {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
  }
`;

export const ContactForm = styled.form`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 10px 0;
    color: #dbe2ef;
  }

  input {
    width: 100%;
    padding: 10px 20px;
    border: 0;
    background: #dbe2ef;
    border-radius: 4px;
    margin-bottom: 5px;

    &::placeholder {
      color: #112d4e;
      opacity: 0.5;
    }
  }

  button {
    width: 100%;
    padding: 10px 20px;
    border: 0;
    border-radius: 4px;
    background: #3f72af;
    color: #fff;
  }
`;

export const Map = styled.img`
  width: 50%;
`;
