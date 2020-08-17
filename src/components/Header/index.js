/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';
import { FiLogOut, FiLogIn, FiUserPlus } from 'react-icons/fi';
import { MdShoppingCart } from 'react-icons/md';

import Logo from '../Logo';
import LanguageButton from '../LanguageSwitch';

import {
  Container,
  Hamburguer,
  Backdrop,
  Menu,
  Navigation,
  Customer,
  Cart,
} from './styles';

import { signOut } from '~/redux/auth/actions';

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const cartLength = useSelector(state => state.cart.length);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleIsMenuOpen = useCallback(() => setIsMenuOpen(!isMenuOpen), [
    isMenuOpen,
  ]);

  function logout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Hamburguer onClick={toggleIsMenuOpen}>
        <div className="hamburger-line" />
        <div className="hamburger-line" />
        <div className="hamburger-line" />
      </Hamburguer>
      <Backdrop isMenuOpen={isMenuOpen} onClick={toggleIsMenuOpen} />
      <Logo variant={3} light id="logo-small" height="35px" />
      <Menu isMenuOpen={isMenuOpen}>
        <Navigation>
          <Logo variant={2} id="logo-medium" height="35px" />
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/store">
            <a>Loja</a>
          </Link>
        </Navigation>
        <hr />
        <Customer>
          {user ? (
            <>
              <span>
                Olá
                <Link href="/store/profile">
                  <a>{user.firstName}</a>
                </Link>
              </span>
              <Link href="/store/orders">
                <a>Pedidos</a>
              </Link>
              <button type="button" onClick={logout}>
                <FiLogOut />
              </button>
            </>
          ) : (
            <>
              <span>
                <FaUser />
                Olá visitante
              </span>
              <Link href="/store/signin">
                <a>
                  <FiLogIn />
                  Log in
                </a>
              </Link>
              <Link href="/store/signup">
                <a>
                  <FiUserPlus />
                  Cadastrar
                </a>
              </Link>
            </>
          )}
        </Customer>
      </Menu>
      <Link href="/store/cart">
        <Cart>
          <MdShoppingCart />
          {cartLength > 0 && <small>{cartLength}</small>}
        </Cart>
      </Link>
      <LanguageButton id="on-header" />
    </Container>
  );
}
