import React, { useState, useEffect } from 'react';
import { MdLoop, MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

import Header from '~/modules/store/components/Header';
import ProductsViewer from '~/modules/store/components/ProductsViewer';
import Footer from '~/modules/store/components/Footer';
import LoadingContainer from '~/shared/util/LoadingContainer';

import api from '~/modules/store/services/api';
import map from '~/shared/assets/logo.png';

import { Container, Banner, ContactMap, ContactForm, Map } from './styles';

import { formatPrice } from '~/shared/util/format';

export default function Default() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [banner, setBanner] = useState(0);

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      const response = await api.get('/products');
      if (response.data) {
        setProducts(
          response.data.map(data => ({
            data: { ...data, formattedPrice: formatPrice(data.price) },
            filtered: true,
          }))
        );
      }
      setLoading(false);
    }
    getProducts();
  }, []);
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
          <Map src={map} alt="" />
        </div>
      </ContactMap>
      <Footer />
    </>
  );
}
