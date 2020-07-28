/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useCallback } from 'react';
import Link from 'next/link';
import { MdCancel, MdMail } from 'react-icons/md';
import { FaHome, FaStore, FaGithub, FaUser } from 'react-icons/fa';
import { FiLogOut, FiLogIn, FiUserPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '~/redux/auth/actions';

import LanguageButton from '../LanguageButton';

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
          <img src="/logo_small_red.png" alt="Logo" />
          <Link href="/">
            <a>
              <FaHome />
              Home
            </a>
          </Link>
          <Link href="/store">
            <a>
              <FaStore />
              Loja
            </a>
          </Link>
          <hr />
          <section className="user">
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
