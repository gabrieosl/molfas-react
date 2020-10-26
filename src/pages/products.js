import React from 'react';

import Header from '~/components/Header';
import SearchBar from '~/components/SearchBar';
import CategoryFilter from '~/components/CategoryFilter';
import ProductsViewer from '~/components/ProductsViewer';

import api from '~/services/api';
import Footer from '~/components/Footer';

import { Container, Wrapper } from '../styles/products';

function Home({ products }) {
  console.log('from compoent: ', products);

  function searchProducts(search = '') {
    return search;
    // search = search.toUpperCase();
    // setProducts(prev =>
    //   prev.map(product => ({
    //     ...product,
    //     filtered: product.data.name.toUpperCase().includes(search),
    //   }))
    // );
  }

  return (
    <Container>
      <Header />
      <Wrapper>
        <SearchBar onSearch={searchProducts} />
        <CategoryFilter />
        <ProductsViewer products={products} />
      </Wrapper>
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
  console.log(products);
  return { products };
};

export default Home;
