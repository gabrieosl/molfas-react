import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 15px;
  width: 100%;
  max-width: 1100px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModeSwitcher = styled.div`
  align-self: flex-end;

  display: flex;
  align-items: center;

  background: #3f72af66;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);

  button {
    display: flex;
    align-items: center;

    border: 0;
    padding: 5px;

    border-radius: 5px;
    background: none;
    color: #cccccc;

    svg {
      width: 23px;
      height: 23px;
    }

    &.active {
      color: #fff;
      background: #3f72af;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
      /* opacity: 1; */
    }
  }
`;

export const ProductsList = styled.ul`
  display: flex;
  flex-direction: ${props => (props.mode === 'grid' ? 'row' : 'column')};
  flex-wrap: wrap;

  margin: 0 auto;
  padding: 15px;

  width: 100%;
`;

export const ProductItem = styled.li`
  display: flex;
  flex-direction: ${props => (props.mode === 'grid' ? 'column' : 'row')};
  justify-content: space-between;

  width: ${props => (props.mode === 'grid' ? '240px' : '100%')};
  height: ${props => (props.mode === 'grid' ? '380px' : '120px')};

  margin: 10px;

  background: #fff;
  border-radius: 5px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

  .favorite-button {
    display: none;
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: 0;
    color: #ff6666;

    svg {
      width: 25px;
      height: 25px;
    }
  }

  .details {
    position: relative;
    flex-grow: 1;

    display: flex;
    flex-direction: ${props => (props.mode === 'grid' ? 'column' : 'row')};
    align-items: ${props => (props.mode === 'grid' ? 'center' : 'center')};
    justify-content: ${props =>
      props.mode === 'grid' ? 'space-between' : 'flex-start'};

    width: 100%;
    height: 100%;

    .product-pic {
      width: ${props => (props.mode === 'grid' ? '180px' : '100px')};
      height: ${props => (props.mode === 'grid' ? '180px' : '100px')};
      object-fit: cover;
      margin: ${props => (props.mode === 'grid' ? '30px' : '10px')};
    }
    .no-pic {
      opacity: 0.1;
    }

    .title-description {
      display: flex;
      flex-direction: column;
      justify-content: ${props =>
        props.mode === 'grid' ? 'space-between' : 'space-around'};

      height: 100%;
      width: 100%;
      padding: ${props => (props.mode === 'grid' ? '0 10px' : 'auto 0')};
      margin-top: ${props => (props.mode === 'grid' ? '-15px' : '0')};

      strong {
        color: #112d4e;
        font-size: 16px;
        line-height: 1.5em;
        height: 3em;
      }

      small {
        color: #112d4e;
        font-size: 12px;
        line-height: 1.5em;
        max-height: ${props => (props.mode === 'grid' ? '3em' : '6em')};
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  &:hover {
    .favorite-button {
      display: block;
    }
    .price-and-cart {
      button {
        border: 1px solid transparent;
        background: ${darken(0.1, '#3f72af')};
      }
    }
  }

  .price-and-cart {
    align-self: center;
    display: flex;
    flex-direction: ${props => (props.mode === 'grid' ? 'row' : 'column')};
    justify-content: center;
    align-items: center;
    min-width: 130px;

    ${props =>
      props.mode === 'grid' &&
      css`
        border-top: 1px solid #3f72af33;
        width: 100%;
      `};
    ${props =>
      props.mode === 'list' &&
      css`
        border-left: 1px solid #3f72af33;
        height: 100%;
      `};

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${props => (props.mode === 'grid' ? '50%' : 'auto')};

      padding: 0 15px;

      font-size: 20px;
      color: #3f72af;
      font-weight: bold;
    }

    button {
      position: relative;
      display: flex;
      align-content: center;
      color: #fff;
      border: 1px solid transparent;
      background: #3f72af;
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
