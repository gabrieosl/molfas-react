import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.2);
  background: #fff;
  z-index: 10;

  div.divider {
    width: 100%;
    border-bottom: 1px solid #3f72af33;
  }
  p {
    &.company-name {
      font-size: 12px;
      font-weight: bold;
      letter-spacing: 0px;
    }

    &.company-email {
      display: flex;
      align-content: center;
      font-size: 12px;

      svg {
        margin-right: 5px;
      }
    }
  }

  .header-1 {
    height: 50px;
    color: #3f72af;
    nav {
      a,
      button {
        margin-right: 15px;
        color: inherit;
        font-size: 14px;
        background: none;
        border: none;
        padding: 0 5px;
      }
    }
  }

  .header-2 {
    height: 100px;

    nav {
      font-size: 12;
      font-weight: bold;
      a {
        margin: 0 15px;
        color: #3f72af;
      }
    }
  }

  div.header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 10px;
    margin: 0 auto;
    max-width: 1100px;

    nav {
      display: flex;
      align-items: center;
    }

    a.cart {
      position: relative;
      display: flex;
      align-items: center;
      border-radius: 20px;
      color: #112d4e;
      border: 0;
      font-size: 18px;

      small {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 70%;
        right: 0%;
        border-radius: 50%;
        background: #aa0000;
        color: #dbe2ef;
        font-weight: bold;
        height: 15px;
        width: 15px;
        font-size: 12px;
      }

      svg {
        height: 20px;
        width: 20px;
      }
    }
  }
`;

export const Logo = styled.img`
  height: 40px;
  margin-right: 15px;
`;
