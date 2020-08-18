import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  strong {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    font-size: 24px;
    color: ${props => props.theme.primary};
  }
`;

export const ProductPath = styled.div`
  p {
    margin: 0 15px;
    font-size: 16px;
    color: ${props => props.theme.primary};
    font-weight: bold;
    padding: 10px 0;
  }
`;

export const ProductWrapper = styled.div`
  background: ${props => props.theme.background};
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const ProductContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;

  padding: 15px;

  @media all and (min-width: 769px) {
    flex-direction: row;
  }
`;

export const ProductDetails = styled.div`
  padding: 15px;

  @media all and (min-width: 769px) {
    width: 50%;
  }

  & strong {
    font-size: 24px;
    color: ${props => props.theme.primary};
    margin-bottom: 10px;
    display: block;
  }

  p {
    font-size: 12px;
  }

  div {
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid ${props => props.theme.primary}55;
    padding-bottom: 10px;

    span {
      background: ${props => props.theme.secondary};
      color: ${props => props.theme.lightText};
      padding: 2px 5px;
      margin: 4px;
      border-radius: 6px;
      font-weight: bold;

      &.stock {
        background: ${props => props.theme.success};
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
