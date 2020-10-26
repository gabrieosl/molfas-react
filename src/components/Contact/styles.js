import styled from 'styled-components';
import { Form as UnformForm } from '@unform/web';

export const Container = styled.div`
  height: 700px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background: ${props => props.theme.background};
  @media all and (max-width: 768px) {
    height: unset;
  }
`;

export const Wrapper = styled.div`
  flex: 1;
  width: 80%;

  display: flex;
  align-items: stretch;
  justify-content: space-around;

  margin: 0 auto;
  padding: 20px;
  padding-top: 60px;

  @media all and (max-width: 768px) {
    width: 100%;

    flex-direction: column;
  }
`;

export const Title = styled.div`
  display: flex;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  color: ${props => props.theme.text};

  @media all and (max-width: 768px) {
    margin: 30px 0;
  }
`;

export const Form = styled(UnformForm)`
  display: flex;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  padding: 1rem;
`;
