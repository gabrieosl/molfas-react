import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  padding: 15px;

  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const ModeSwitcher = styled.button`
  align-self: flex-end;

  display: flex;
  align-items: center;

  background: ${props => props.theme.primary};
  border: 0;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

  button {
    display: flex;
    align-items: center;

    border: 0;
    padding: 5px;

    border-radius: 5px;
    background: none;
    color: ${props => props.theme.default};

    svg {
      width: 23px;
      height: 23px;
    }

    &.active {
      color: ${props => props.theme.lightText};
      background: ${props => props.theme.primary};
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
      /* opacity: 1; */
    }
  }
`;

export const ProductsList = styled.ul`
  display: flex;
  flex-direction: ${props => (props.viewMode === 'grid' ? 'row' : 'column')};
  flex-wrap: wrap;
  justify-content: space-between;

  &::after {
    content: '';
    flex: auto;
  }
`;

export const ProductItem = styled.li`
  display: flex;
  flex-direction: ${props => (props.viewMode === 'grid' ? 'column' : 'row')};
  justify-content: space-between;
  align-items: stretch;

  ${props =>
    props.viewMode === 'grid'
      ? css`
          width: 240px;
        `
      : css`
          height: 120px;
        `};

  margin: 10px;

  background: ${props => props.theme.background};
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

  .details {
    position: relative;
    flex-grow: 1;

    display: flex;
    flex-direction: ${props => (props.viewMode === 'grid' ? 'column' : 'row')};
    align-items: ${props => (props.viewMode === 'grid' ? 'center' : 'center')};
    justify-content: ${props =>
      props.viewMode === 'grid' ? 'space-between' : 'flex-start'};

    width: 100%;
    height: 100%;

    .product-pic {
      width: ${props => (props.viewMode === 'grid' ? '180px' : '100px')};
      height: ${props => (props.viewMode === 'grid' ? '180px' : '100px')};
      object-fit: cover;
      margin: ${props => (props.viewMode === 'grid' ? '30px' : '10px')};
    }
    .no-pic {
      opacity: 0.1;
    }

    .title-description {
      display: flex;
      flex-direction: column;
      justify-content: ${props =>
        props.viewMode === 'grid' ? 'space-between' : 'space-around'};

      height: 100%;
      width: 100%;
      padding: ${props => (props.viewMode === 'grid' ? '0 10px' : 'auto 0')};
      margin-top: ${props => (props.viewMode === 'grid' ? '-15px' : '0')};

      strong {
        color: ${props => props.theme.text};
        font-size: 16px;
        line-height: 1.5em;
        height: 3em;
      }

      small {
        color: ${props => props.theme.text};
        font-size: 12px;
        line-height: 1.5em;
        max-height: ${props => (props.viewMode === 'grid' ? '3em' : '6em')};
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  &:hover {
    .price-and-cart {
      button {
        border: 1px solid transparent;
        background: ${props => darken(0.1, props.theme.text)};
      }
    }
  }

  .price-and-cart {
    align-self: center;
    display: flex;
    flex-direction: ${props => (props.viewMode === 'grid' ? 'row' : 'column')};
    justify-content: center;
    align-items: center;
    min-width: 130px;

    ${props =>
      props.viewMode === 'grid' &&
      css`
        border-top: 1px solid ${`${props.theme.primary}33`};
        width: 100%;
      `};
    ${props =>
      props.viewMode === 'list' &&
      css`
        border-left: 1px solid ${`${props.theme.primary}33`};
        height: 100%;
      `};

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${props => (props.viewMode === 'grid' ? '50%' : 'auto')};

      padding: 0 15px;

      font-size: 20px;
      color: ${props => props.theme.primary};
      font-weight: bold;
    }

    button {
      position: relative;
      display: flex;
      align-content: center;
      color: ${props => props.theme.lightText};
      border: 1px solid transparent;
      background: ${props => props.theme.primary};
      padding: 0 20px;
      height: 40px;
      border-radius: 20px;
      margin: 15px 10px;

      svg {
        width: 20px;
        height: 20px;

        &.label-icon {
          position: absolute;
          top: 0;
          left: 50%;
        }
      }
    }
  }
`;
