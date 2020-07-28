import React, { useState } from 'react';
import { MdLoop, MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

import Header from '~/components/Header';
import ProductsViewer from '~/components/ProductsViewer';
import Footer from '~/components/Footer';
import LoadingContainer from '~/util/LoadingContainer';

import api from '~/services/api';

import { Container, Banner, ContactMap, ContactForm, Map } from './styles';

import { formatPrice } from '~/util/format';

function Home({ products }) {
  const [loading] = useState(true);
  const [banner, setBanner] = useState(0);
  console.log(products);
  return (
    <>
      <Header />
      <Banner active={banner === 0}>
        <div className="wrapper">
          <MdNavigateBefore
            className="navigate-before"
            onClick={() => setBanner(2)}
          />
          <h1>Cabides & Plásticos</h1>
          <button type="button">Ir para loja</button>
          <MdNavigateNext
            className="navigate-next"
            onClick={() => setBanner(1)}
          />
        </div>
      </Banner>
      <Banner active={banner === 1}>
        <div className="wrapper">
          <MdNavigateBefore
            className="navigate-before"
            onClick={() => setBanner(0)}
          />
          <h1>Conheça nossa linha de cabides para ternos</h1>
          <button type="button">Ver mais</button>
          <MdNavigateNext
            className="navigate-next"
            onClick={() => setBanner(2)}
          />
        </div>
      </Banner>
      <Banner active={banner === 2}>
        <div className="wrapper">
          <MdNavigateBefore
            className="navigate-before"
            onClick={() => setBanner(1)}
          />
          <h1>Últimos produtos</h1>
          <button type="button">Ver mais</button>
          <MdNavigateNext
            className="navigate-next"
            onClick={() => setBanner(0)}
          />
        </div>
      </Banner>
      <Container>
        <h2>Produtos</h2>
        {loading ? (
          <LoadingContainer>
            <MdLoop />
          </LoadingContainer>
        ) : (
          <ProductsViewer products={products} fixedMode="grid" />
        )}
      </Container>
      <ContactMap>
        <div className="wrapper">
          <ContactForm>
            <h1>Fale Conosco</h1>
            <input type="text" placeholder="Nome:" />
            <input type="text" placeholder="Email:" />
            <input type="text" placeholder="Telefone:" />
            <input type="text" placeholder="Mensagem:" />
            <button type="button">Enviar</button>
          </ContactForm>
          <Map src="/logo.png" alt="" />
        </div>
      </ContactMap>
      <Footer />
    </>
  );
}

Home.getInitialProps = async () => {
  let products = [];
  const response = await api.get(
    'https://api.fortureplasticos.com.br/store/products'
  );
  if (response.data) {
    products = response.data.map(data => ({
      data: { ...data, formattedPrice: formatPrice(data.price) },
      filtered: true,
    }));
  }
  return { products };
};

export default Home;
