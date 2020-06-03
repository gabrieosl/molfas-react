import React, { useState, useEffect, useMemo } from 'react';
import { MdLoop } from 'react-icons/md';

import SearchBar from '~/modules/store/components/SearchBar';
import CategoryFilter from '~/modules/store/components/CategoryFilter';
import ProductsViewer from '~/modules/store/components/ProductsViewer';

import LoadingContainer from '~/shared/util/LoadingContainer';

import api from '~/modules/store/services/api';
import Footer from '~/modules/store/components/Footer';

import { formatPrice } from '~/shared/util/format';

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
