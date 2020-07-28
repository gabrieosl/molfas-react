import React, { useState, useEffect, useMemo } from 'react';
import { MdLoop } from 'react-icons/md';

import SearchBar from '~/components/SearchBar';
import CategoryFilter from '~/components/CategoryFilter';
import ProductsViewer from '~/components/ProductsViewer';

import LoadingContainer from '~/util/LoadingContainer';

import api from '~/services/api';
import Footer from '~/components/Footer';

import { formatPrice } from '~/util/format';

// import { Container } from './styles';

function Home({ products }) {
  console.log('from compoent: ', products);
  // const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // const productsToShow = useMemo(
  //   () => products.filter(product => product.filtered),
  //   [products]
  // );

  // async function getProducts() {
  //   setLoading(true);
  //   const response = await api.get('/store/products');
  //   if (response.data) {
  //     setProducts(
  //       response.data.map(data => ({
  //         data: { ...data, formattedPrice: formatPrice(data.price) },
  //         filtered: true,
  //       }))
  //     );
  //   }
  //   setLoading(false);
  // }
  // useEffect(() => {
  //   getProducts();
  // }, []);

  function searchProducts(search = '') {
    // search = search.toUpperCase();
    // setProducts(prev =>
    //   prev.map(product => ({
    //     ...product,
    //     filtered: product.data.name.toUpperCase().includes(search),
    //   }))
    // );
  }

  return (
    <>
      {loading ? (
        <LoadingContainer>
          <MdLoop />
        </LoadingContainer>
      ) : (
        <>
          <SearchBar onSearch={searchProducts} />
          <CategoryFilter />
          <ProductsViewer products={products} />
          <Footer />
        </>
      )}
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
  console.log(products);
  return { products };
};

export default Home;
