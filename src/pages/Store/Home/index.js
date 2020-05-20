import React, { useState, useEffect, useMemo } from 'react';
import { MdLoop } from 'react-icons/md';

import Header from '~/components/store/Header';
import SearchBar from '~/components/store/SearchBar';
import CategoryFilter from '~/components/store/CategoryFilter';
import ProductsViewer from '~/components/store/ProductsViewer';

import LoadingContainer from '~/util/LoadingContainer';

import api from '~/services/apiStore';
import Footer from '~/components/store/Footer';

import { formatPrice } from '~/util/format';

// import { Container } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const productsToShow = useMemo(
    () => products.filter(product => product.filtered),
    [products]
  );

  async function getProducts() {
    setLoading(true);
    const response = await api.get('/store/products');
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
  useEffect(() => {
    getProducts();
  }, []);

  function searchProducts(search = '') {
    search = search.toUpperCase();
    setProducts(prev =>
      prev.map(product => ({
        ...product,
        filtered: product.data.name.toUpperCase().includes(search),
      }))
    );
  }

  return (
    <>
      <Header />
      {loading ? (
        <LoadingContainer>
          <MdLoop />
        </LoadingContainer>
      ) : (
        <>
          <SearchBar onSearch={searchProducts} />
          <CategoryFilter />
          <ProductsViewer products={productsToShow} />
          <Footer />
        </>
      )}
    </>
  );
}
