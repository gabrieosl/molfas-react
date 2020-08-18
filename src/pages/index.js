import React from 'react';

import Header from '../components/Header';
import ProductsViewer from '../components/ProductsViewer';
import Footer from '../components/Footer';

import api from '../services/api';

import Banners from '../components/Banners';
import Contact from '../components/Contact';
import { Container } from '../styles/landing';

function Home({ products }) {
  return (
    <Container>
      <Header />
      <Banners />
      <ProductsViewer products={products} mode="grid" />
      <Contact />
      <Footer />
    </Container>
  );
}

Home.getInitialProps = async () => {
  let products = [];
  const response = await api.get(
    'https://api.fortureplasticos.com.br/store/products'
  );
  if (response.data) {
    products = response.data;
  }
  return { products };
};

export default Home;
