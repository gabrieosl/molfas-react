import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/all';
import logo from '~/assets/forture_full_white.png';

import { Container, Wrapper } from './styles';

function Footer() {
  return (
    <Container>
      <Wrapper>
        <img src={logo} alt="" />
        <div>
          R Joaquim Balbino de carvalho 720A Elói Mendes/MG - 37110-000, Brazil
        </div>
        <div>
          <small>Comercial</small>
          <p>+55 (35) 98807-3040</p>
          <small>Financeiro</small>
          <p>+55 (35) 98824-4591</p>
          <span>contato@fortureplasticos.com.br</span>
        </div>
        <div>
          <a href="https://www.facebook.com/pages/category/Local-Business/Forture-Plasticos-764473303679097/">
            <FaFacebook />
          </a>
          <a href="https://instagram.com">
            <FaInstagram />
          </a>
        </div>
      </Wrapper>
    </Container>
  );
}

export default Footer;
