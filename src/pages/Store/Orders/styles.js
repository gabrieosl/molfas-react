import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: #112d4e;
    font-size: 35px;
    font-weight: 600;
    margin: 20px 0;
    text-transform: lowercase;
    &::first-letter {
      text-transform: uppercase;
    }
  }
`;
