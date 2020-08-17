import styled, { css } from 'styled-components';
import Button from '../Button';

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 101;

  display: flex;
  align-items: center;

  margin: 5px;
  opacity: 0.6;
  transition: all 0.3s;

  &:hover {
    opacity: 1;
  }
`;

export const SelectButton = styled(Button).attrs({ variant: 'text' })`
  display: flex;
  align-items: center;
  padding: 5px;

  svg {
    height: 20px;
    width: 20px;
    color: ${props => props.theme.text};
  }

  h5 {
    color: ${props => props.theme.text};
    text-transform: uppercase;
  }

  ${props =>
    props.isActive &&
    css`
      h6 {
        color: ${props.theme.primary};
      }
    `}
  &:hover {
    h6 {
      color: ${props => props.theme.primary};
    }
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: 170px;

  background: ${props => props.theme.subBackground};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  padding: 5px 0;
  border-radius: 5px 0 5px 5px;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    right: 0;
    transform: translateX(-100%) translateY(-100%);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${props => props.theme.subBackground};
  }

  li {
    display: flex;
    align-items: center;

    padding: 2px 0.5em;

    button {
      flex: 1;
      display: flex;
      justify-content: space-between;
    }

    span {
      /* font-size: 0.8em; */
      color: ${props => props.theme.text};
    }

    &:hover {
      background: ${props => props.theme.primary};
    }
  }
`;
