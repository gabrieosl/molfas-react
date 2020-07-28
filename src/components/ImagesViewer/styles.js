import styled from 'styled-components';

export const Container = styled.div`
  max-width: 50%;
  min-width: 50%;

  display: flex;
`;

export const SideImages = styled.div`
  display: flex;
  flex-direction: column;

  button {
    border: 0;
    background: none;
    img {
      border: 1px transparent;
      width: 60px;
      height: 60px;
      object-fit: cover;

      &:hover {
        border: solid 2px #3f72af;
      }
    }
  }
`;

export const CurrentImage = styled.img`
  margin-left: 5px;
  object-fit: cover;
  width: calc(100% - 70px);
  flex-grow: 0;
  max-height: 500px;
`;
