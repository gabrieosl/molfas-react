import styled from 'styled-components';

export const Container = styled.div`
  margin: 40px 50px 20px;
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #3f72af33;

    li {
      margin: 0 20px;

      &:first-child {
        margin-left: 0;
      }
    }
    a {
      padding: 15px 0;
      font-size: 18px;
      color: #666;
      display: flex;
      align-items: center;
      border-radius: 5px 5px 0 0;
      transition: opacity 0.2s;
      position: relative;

      svg {
        margin-right: 5px;
      }

      &:hover {
        opacity: 1;
      }
      &.selected {
        &::after {
          content: '';
          width: 100%;
          height: 1px;
          background: #3f72af;
          position: absolute;
          bottom: 0;
          left: 0;
        }
      }
    }
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  small {
    font-size: 15px;
    /* font-weight: bold; */
    text-transform: uppercase;
    margin-bottom: 10px;
    color: #666;
  }

  strong {
    color: #112d4e;
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 20px;
    text-transform: lowercase;
    &::first-letter {
      text-transform: uppercase;
    }
  }
`;
