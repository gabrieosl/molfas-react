import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { FaGithub, FaUser } from 'react-icons/fa';
import { FiLogOut, FiLogIn, FiUserPlus } from 'react-icons/fi';
import { MdMail, MdShoppingCart } from 'react-icons/md';

import SideDrawer from './SideDrawer';
import LanguageButton from './LanguageButton';

import { Container, ContentMobile, ContentDesktop } from './styles';

import { signOut } from '~/redux/auth/actions';

export default function Header() {
  const dispatch = useDispatch();
  const customer = useSelector(state => state.authStore.customer);
  const cartLength = useSelector(state => state.cart.length);

  const [sideDrawerVisibility, setSideDrawerVisibility] = useState(false);
  const hideSideDrawer = useCallback(() => setSideDrawerVisibility(false), []);
  const showSideDrawer = useCallback(() => setSideDrawerVisibility(true), []);

  function logout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <ContentMobile className="mobile">
        <nav>
          <button
            className="side-drawer_button"
            type="button"
            onClick={showSideDrawer}
          >
            <div className="side-drawer__line" />
            <div className="side-drawer__line" />
            <div className="side-drawer__line" />
          </button>
          <Link href="/">
            <a className="logo-small">
              <img src="/logo_only_white.png" alt="logo" />
            </a>
          </Link>
          <Link href="/store/cart">
            <a className="cart">
              <MdShoppingCart />
              {cartLength > 0 && <small>{cartLength}</small>}
            </a>
          </Link>
        </nav>
        <SideDrawer
          visible={sideDrawerVisibility}
          hideSideDrawer={hideSideDrawer}
        />
      </ContentMobile>
      <ContentDesktop className="desktop">
        <section>
          <div className="credits">
            <p>
              Developed by
              <FaGithub />
              @gabrieosl
              <MdMail /> gabriel@gadev.me
            </p>
            <LanguageButton />
          </div>
          <nav>
            {customer ? (
              <>
                <p>
                  Olá
                  <Link href="/store/profile">
                    <a>{customer.firstName}</a>
                  </Link>
                </p>
                <Link href="/store/orders">
                  <a>Pedidos</a>
                </Link>
                {customer && (
                  <button type="button" onClick={logout}>
                    <FiLogOut />
                  </button>
                )}
              </>
            ) : (
              <>
                <p>
                  <FaUser />
                  Olá visitante
                </p>
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
            <Link href="/store/cart">
              <a className="cart">
                <MdShoppingCart />
                {cartLength > 0 && <small>{cartLength}</small>}
              </a>
            </Link>
          </nav>
        </section>
        <hr />
        <main>
          <Link href="/">
            <a>
              <img src="/logo_small_red.png" alt="Logo" />
            </a>
          </Link>
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/store">
              <a>Loja</a>
            </Link>
          </nav>
        </main>
      </ContentDesktop>
    </Container>
  );
}
