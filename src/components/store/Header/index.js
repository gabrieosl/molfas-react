import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdMail, MdExitToApp, MdShoppingCart } from 'react-icons/md';

import LanguageButton from './LanguageButton';

import { Container, Logo } from './styles';

import { signOut } from '~/store/authStore/actions';

import logo from '~/assets/logo_blue.png';

export default function Header() {
  const dispatch = useDispatch();
  const customer = useSelector(state => state.authStore.customer);
  const cartLength = useSelector(state => state.cart.length);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <div className="header header-1">
        <nav>
          <p className="company-name">Forture FM Industria de Plásticos LTDA</p>
          <p className="company-email">
            <MdMail />
            contato@fortureplasticos.com.br
          </p>
        </nav>
        <nav>
          {customer ? (
            <>
              <Link to="/profile">Olá {customer.firstName}</Link>
              <Link to="/orders">Pedidos</Link>
              {customer && (
                <button type="button" onClick={handleLogout}>
                  <MdExitToApp />
                </button>
              )}
            </>
          ) : (
              <>
                <Link to="/signin">Entrar</Link>
                <Link to="/signup">Cadastrar</Link>
              </>
            )}
          <Link to="/cart" className="cart">
            <MdShoppingCart />
            {cartLength > 0 && <small>{cartLength}</small>}
          </Link>
          <LanguageButton />
        </nav>
      </div>
      <div className="divider" />
      <div className="header header-2">
        <nav>
          <Link to="/">
            <Logo src={logo} alt="Logo" />
          </Link>
          <Link to="/">Home</Link>
          <Link to="/store">Loja</Link>
          <Link to="/contact">Fale Conosco</Link>
        </nav>
      </div>
    </Container>
  );
}
