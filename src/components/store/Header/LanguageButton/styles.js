import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 30px;
  height: 30px;

  button {
    border: 0;
    background: none;
    height: 30px;
    width: 30px;
    padding: 0 !important;

    img {
      border: 1px solid #112d4e;
      border-radius: 4px;
      object-fit: cover;
    }
  }
  ul {
    position: absolute;
    top: 100%;
    right: 0;

    padding: 1px 0;

    background: #3f72af;

    li {
      display: flex;
      align-items: center;
      cursor: pointer;

      padding: 2px 10px;

      p {
        color: #fff;
        margin-left: 5px;
      }

      &:hover {
        background: #112d4e;
      }
    }
  }
`;
