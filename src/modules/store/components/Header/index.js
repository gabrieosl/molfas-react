import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  FaGithub,
  MdMail,
  FiLogOut,
  FiLogIn,
  FaUser,
  FiUserPlus,
  MdShoppingCart,
} from 'react-icons/all';

import SideDrawer from './SideDrawer';
import LanguageButton from './LanguageButton';

import { Container, ContentMobile, ContentDesktop } from './styles';

import { signOut } from '~/modules/store/redux/auth/actions';

import logoRed from '~/shared/assets/logo_small_red.png';
import logoWhite from '~/shared/assets/logo_only_white.png';

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
          <Link to="/" className="logo-small">
            <img src={logoWhite} alt="logo" />
          </Link>
          <Link to="/store/cart" className="cart">
            <MdShoppingCart />
            {cartLength > 0 && <small>{cartLength}</small>}
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
                  Olá<Link to="/store/profile">{customer.firstName}</Link>
                </p>
                <Link to="/store/orders">Pedidos</Link>
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
                <Link to="/store/signin">
                  <FiLogIn />
                  Log in
                </Link>
                <Link to="/store/signup">
                  <FiUserPlus />
                  Cadastrar
                </Link>
              </>
            )}
            <Link to="/store/cart" className="cart">
              <MdShoppingCart />
              {cartLength > 0 && <small>{cartLength}</small>}
            </Link>
          </nav>
        </section>
        <hr />
        <main>
          <Link to="/">
            <img src={logoRed} alt="Logo" />
          </Link>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/store">Loja</Link>
          </nav>
        </main>
      </ContentDesktop>
    </Container>
  );
}
