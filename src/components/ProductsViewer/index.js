/* eslint-disable react/prop-types */
import React, { useState, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Link from 'next/link';
import {
  MdList,
  MdGridOn,
  MdShoppingCart,
  MdAdd,
  MdCheck,
} from 'react-icons/md';
import { formatPrice } from '../../util/format';

import { addToCartRequest } from '~/redux/cart/actions';

import { Container, ModeSwitcher, ProductsList, ProductItem } from './styles';

export default function ProductsViewer({ products, mode, small = false }) {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const [viewMode, setViewMode] = useState(mode || 'grid');

  const toogleViewMode = useCallback(
    () => setViewMode(prev => (prev === 'grid' ? 'list' : 'grid')),
    []
  );

  const parsedProducts = useMemo(
    () =>
      products.map(product => {
        product.formattedPrice = formatPrice(product.price);
        return product;
      }),
    [products]
  );

  return (
    <Container>
      {!mode && (
        <ModeSwitcher viewMode={viewMode} onClick={toogleViewMode}>
          <button type="button" className={viewMode === 'grid' && 'active'}>
            <MdGridOn />
          </button>
          <button type="button" className={viewMode === 'list' && 'active'}>
            <MdList />
          </button>
        </ModeSwitcher>
      )}
      <ProductsList viewMode={viewMode}>
        {parsedProducts.length > 0 ? (
          parsedProducts.map(product => (
            <ProductItem key={product.id} viewMode={viewMode}>
              <div className="details">
                <Link
                  href="/product/[slug]"
                  as={`/product/${encodeURIComponent(product.name)}`}
                >
                  <a>
                    <img
                      src={
                        (product.defaultImage && product.defaultImage.url) ||
                        `${process.env.REACT_APP_BACKEND_URL}/avatars/default.png`
                      }
                      alt="Foto do produto"
                      className={`product-pic${
                        (!product.defaultImage && ' no-pic') || ''
                      }`}
                    />
                  </a>
                </Link>
                <div className="title-description">
                  <Link
                    href="/product/[slug]"
                    as={`/product/${encodeURIComponent(product.name)}`}
                  >
                    <a>
                      <strong>{product.name}</strong>
                    </a>
                  </Link>
                  <small>{product.description}</small>
                </div>
              </div>
              {!small && (
                <div className="price-and-cart">
                  <p>{product.formattedPrice}</p>
                  <button
                    type="button"
                    onClick={() => dispatch(addToCartRequest(product.name))}
                  >
                    {cart.find(item => item.id === product.id) ? (
                      <MdCheck className="label-icon" />
                    ) : (
                      <MdAdd className="label-icon" />
                    )}
                    <MdShoppingCart />
                  </button>
                </div>
              )}
            </ProductItem>
          ))
        ) : (
          <h1>Nada encontrado</h1>
        )}
      </ProductsList>
    </Container>
  );
}
