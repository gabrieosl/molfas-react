/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { MdCancel, MdMail } from 'react-icons/md';
import {
  FaHome,
  FaStore,
  FaGithub,
  FiLogOut,
  FaUser,
  FiLogIn,
  FiUserPlus,
} from 'react-icons/all';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '~/modules/store/redux/auth/actions';

import LanguageButton from '../LanguageButton';
import logoRed from '~/shared/assets/logo_small_red.png';

import { Backdrop, Drawer } from './styles';

function SideDrawer({ visible, hideSideDrawer }) {
  const dispatch = useDispatch();
  const customer = useSelector(state => state.authStore.customer);

  const logout = useCallback(() => {
    dispatch(signOut());
  }, []);

  return (
    <>
      {visible && <Backdrop onClick={hideSideDrawer} />}
      <Drawer visible={visible}>
        <main>
          <button type="button" onClick={hideSideDrawer}>
            <MdCancel />
          </button>
          <img src={logoRed} alt="Logo" />
          <Link to="/">
            <FaHome />
            Home
          </Link>
          <Link to="/store">
            <FaStore />
            Loja
          </Link>
          <hr />
          <section className="user">
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
          </section>
        </main>
        <footer>
          <LanguageButton />
          <div className="credits">
            <p>
              Developed by
              <FaGithub />
              @gabrieosl
            </p>
            <p>
              <MdMail /> gabriel@gadev.me
            </p>
          </div>
        </footer>
      </Drawer>
    </>
  );
}

export default SideDrawer;
