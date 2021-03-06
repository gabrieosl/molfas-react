import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #112d4e;
`;

export const Wrapper = styled.div`
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 20px 0;

  color: #fff;

  img {
    height: 130px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  p {
    font-size: 16px;
  }
  small {
    font-size: 14px;
    margin-bottom: 5px;
  }

  a {
    color: #fff;
  }
  svg {
    margin-bottom: 5px;
  }
`;
