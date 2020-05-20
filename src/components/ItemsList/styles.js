import styled, { css, keyframes } from 'styled-components';

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    transform: 1;
  }
`;

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 10px;
`;

export const ItemsListHeader = styled.div`
  display: flex;
  align-content: center;
  justify-content: flex-end;

  margin-bottom: 10px;

  strong.title {
    display: flex;
    align-items: center;
    color: #666;
    font-size: 16px;
    font-weight: normal;
    text-transform: capitalize;
    height: 40px;
  }
`;

export const ItemsListHeaderButtons = styled.div`
  flex-grow: 1;

  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 5px;
    width: 40px;
    height: 40px;

    border: 0;
    border-radius: 50%;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
    background: #3f72af;

    animation: ${fadein} 2s;

    svg {
      height: 30px;
      width: 30px;
      color: #fff;
      transition: 0.5s ease-out;
    }
  }
`;

export const CreateOrCancelButton = styled.button.attrs({
  type: 'button',
})`
  background: ${props =>
    props.isDefaultCard ? '#3f72af' : '#990000'} !important;

  svg {
    ${props =>
    !props.isDefaultCard &&
    css`
        transform: rotate(45deg);
      `}
  }
`;
