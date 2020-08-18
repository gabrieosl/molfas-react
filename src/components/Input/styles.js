import styled, { css } from 'styled-components';
import Tooltip from './Tooltip';

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 16px;
  margin-bottom: 8px;

  background: ${props => props.theme.background2};
  border: 1px solid ${props => props.theme.default};
  border-radius: 5px;
  box-shadow: 1px 1px 2px rgba(0,0,0,0.2);
  width: 100%;
  color: ${props => props.theme.default};

  svg {
    margin-right: 10px;
  }

  ${props =>
    props.isErrored &&
    css`
      border: 1px solid ${props.theme.error};
    `}

  ${props =>
    props.isFocused &&
    css`
      border: 1px solid ${props.theme.primary};
      color: ${props.theme.primary};
    `}

  ${props =>
    props.isFilled &&
    css`
      svg {
        color: ${props.theme.primary};
      }
    `}




  &:last-of-type {
    svg {
      align-self: flex-start;
      margin-top: 8px;
    }
  }

  input, textarea {
    flex: 1;
    color: ${props => props.theme.text};
    border: 0;
    background: none;

    &::placeholder {
      color: ${props => props.theme.default};
      opacity: 0.5;
    }

    & + input {
      margin-top: 8px;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
`;
