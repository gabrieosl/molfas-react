import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdNotifications, MdSettings, MdExitToApp } from 'react-icons/md';

import { Container, Nav, Aside } from './styles';

import { signOut } from '~/store/authAdmin/actions';

import logo from '~/assets/logo_blue.png';

export default function NavBar() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <img src={logo} alt="Logo" />
      <Nav>
        <Link to="/admin">
          <p>HOME</p>
        </Link>
        <Link to="/admin/finances">
          <p>VENDAS</p>
        </Link>
        <Link to="/admin/production">
          <p>PRODUÇÃO</p>
        </Link>
      </Nav>
      <Aside>
        <Link to="/admin/configs">
          <MdSettings size={30} />
        </Link>
        <div>
          <button id="notif" type="button">
            <MdNotifications size={30} />
          </button>
          <Link to="/admin/profile">
            <img
              src={
                user.avatar ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt=""
            />
          </Link>
        </div>
        <button type="button" onClick={handleLogout}>
          <MdExitToApp size={30} />
        </button>
      </Aside>
    </Container>
  );
}
