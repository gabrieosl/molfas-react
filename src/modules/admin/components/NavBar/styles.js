import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  /* linear-gradient(180deg, ${darken(0.1, '#325ca8')}, #325ca8); */
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
img {
  height: 40px;
  margin-right: 20px;
  margin-left: 15px;
}
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;

  a {
    color: #325ca8;
    font-size: 16px;
    padding: 0 15px;
    position: relative;
    height: 100%;

    + a {
      &::after {
        content: '';
        height: 50%;
        border-left: 1px solid #cccccc55;
        position: absolute;
        top: 25%;
        left: 0;
      }
    }

    > p {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
`;

export const Aside = styled.aside`
  display: flex;
  align-items: center;
  margin-right: 20px;

  > a {
    margin-right: 20px;
    color: #3f72af;
  }

  box {
    display: flex;
    align-items: center;
    margin-right: 20px;
    background: #3f72af;
    border-radius: 4px;
    padding: 5px;

    a {
      height: 36px;

      img {
        height: 36px;
        width: 36px;
      }
    }
  }

  button {
    background: none;
    border: 0;
    color: #3f72af;
  }
`;

export const Asides = styled.aside`
  display: flex;
  align-items: center;

  button {
    background: none;
    border: 0;
    color: #1f3763;
    margin: 0 5px;
  }
`;

export const Profile = styled.div`
  width: 40px;
  height: 40px;
  background: #999;
  border: 3px solid #1f3763;
  border-radius: 50%;
  margin: 5px 0;

  img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
  }
`;
