import React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { MdNotifications, MdSettings, MdExitToApp } from 'react-icons/md';

import { Container, Nav, Aside } from './styles';

import { signOut } from '~/redux/auth/actions';

export default function NavBar() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Nav>
        <img src="/logo.png" alt="Logo" />
        <Link href="/admin/orders">
          <a>
            <p>PEDIDOS</p>
          </a>
        </Link>
        <Link href="/admin/production">
          <a>
            <p>PRODUÇÃO</p>
          </a>
        </Link>
        {/* <Link href="/admin/finances"><a>
          <p>VENDAS</p>
        </a></Link> */}
      </Nav>
      <Aside>
        <Link href="/admin/configs">
          <a>
            <MdSettings size={30} />
          </a>
        </Link>
        <div>
          <button id="notif" type="button">
            <MdNotifications size={30} />
          </button>
          <Link href="/admin/profile">
            <a>
              <img
                src={
                  user.avatar ||
                  'https://api.adorable.io/avatars/50/abott@adorable.png'
                }
                alt=""
              />
            </a>
          </Link>
        </div>
        <button type="button" onClick={handleLogout}>
          <MdExitToApp size={30} />
        </button>
      </Aside>
    </Container>
  );
}
