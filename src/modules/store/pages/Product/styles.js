import styled from 'styled-components';

export const Container = styled.div`
  p {
    margin: 0 auto;
    max-width: 1100px;
    font-size: 16px;
    color: #3f72af;
    font-weight: bold;
    padding: 10px 0;
  }

  & strong {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    font-size: 24px;
    color: #3f72af;
  }
`;

export const ProductWrapper = styled.div`
  background: #fff;
  width: 100%;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
`;

export const ProductContainer = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  display: flex;

  padding: 15px;
`;

export const ProductDetails = styled.div`
  padding: 15px;
  width: 50%;

  & strong {
    font-size: 24px;
    color: #3f72af;
    margin-bottom: 10px;
    display: block;
  }

  p {
    font-size: 12px;
  }

  div {
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid #3f72af55;
    padding-bottom: 10px;

    span {
      background: #000099;
      color: #fff;
      padding: 2px 5px;
      margin: 4px;
      border-radius: 6px;
      font-weight: bold;

      &.stock {
        background: #009900;
      }
    }
  }

  small {
    font-size: 16px;
  }

  ul {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    li {
      margin-right: 4px;
      margin-bottom: 2px;
      background: #eee;
      border-radius: 5px;
      padding: 2px 3px;
    }
  }

  section {
    display: flex;
    justify-content: space-around;

    padding: 30px 0;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${props => (props.mode === 'grid' ? '50%' : 'auto')};

      padding: 0 15px;

      font-size: 28px;
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
      padding: 0 30px;
      height: 40px;
      border-radius: 20px;
      margin: 15px 10px;
      font-size: 18px;
      font-weight: bold;

      svg.shopping-cart {
        margin-left: 10px;
        width: 20px;
        height: 20px;
      }

      svg.label-icon {
        position: absolute;
        top: 0;
        left: calc(100% - 30px);
      }
    }
  }
`;
