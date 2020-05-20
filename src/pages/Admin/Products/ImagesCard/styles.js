import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 10px 0;
  overflow-y: auto;

  label {
    flex-shrink: 0;
    background: #3f72af11;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 150px;
    height: 150px;
    input {
      display: none;
    }
    svg {
      opacity: 0.5;
      height: 50px;
      width: 50px;
      color: #3f72af;

      transition: opacity 0.2s;
    }
    &:hover {
      background: #3f72af22;
      svg {
        opacity: 1;
      }
    }
  }
`;

export const Image = styled.div`
  position: relative;
  &:hover {
    button {
      display: block;
    }
  }
  & img {
    height: 150px;
    border-radius: 4px;
    margin-right: 4px;
  }
  div.default {
    position: absolute;
    top: -5px;
    left: -5px;
    margin: 3px;
    padding: 3px;
    background: #007700;
    color: #fff;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    display: flex;
    align-content: center;
    justify-content: center;
    z-index: 5;
  }

  button {
    display: none;
    position: absolute;
    margin: 3px;
    padding: 2px;
    border-radius: 4px;
    border: none;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);

    &.set-default {
      top: 0;
      left: 0;
      background: #325ca8;
      color: #fff;
    }

    &.delete-image {
      top: 0;
      right: 0;
      background: #990000;
      color: #fff;
    }

    top: 0;
    right: 0;
  }

  &:last-child {
    margin-right: 44px;
  }
`;
