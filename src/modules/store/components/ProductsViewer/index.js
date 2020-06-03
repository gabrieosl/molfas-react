/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import {
  MdList,
  MdGridOn,
  MdShoppingCart,
  MdFavorite,
  MdAdd,
  MdCheck,
} from 'react-icons/md';

import { addToCartRequest } from '~/modules/store/redux/cart/actions';
import { setViewMode } from '~/modules/store/redux/auth/actions';

import { Container, ModeSwitcher, ProductsList, ProductItem } from './styles';

export default function ProductsViewer({ products, fixedMode }) {
  const mode = useSelector(state => state.authStore.viewMode);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <Container>
      {!fixedMode && (
        <ModeSwitcher>
          <button
            type="button"
            className={mode === 'grid' && 'active'}
            onClick={() => dispatch(setViewMode('grid'))}
          >
            <MdGridOn />
          </button>
          <button
            type="button"
            className={mode === 'list' && 'active'}
            onClick={() => dispatch(setViewMode('list'))}
          >
            <MdList />
          </button>
        </ModeSwitcher>
      )}
      <ProductsList mode={fixedMode || mode}>
        {products.length > 0 ? (
          products.map(
            product =>
              product.filtered && (
                <ProductItem key={product.data.id} mode={mode}>
                  <div className="details">
                    <button type="button" className="favorite-button">
                      <MdFavorite />
                    </button>
                    <Link
                      to={`/product/${encodeURIComponent(product.data.name)}`}
                    >
                      <img
                        src={
                          (product.data.defaultImage &&
                            product.data.defaultImage.url) ||
                          `${process.env.REACT_APP_BACKEND_URL}/avatars/default.png`
                        }
                        alt="Foto do produto"
                        className={`product-pic${
                          (!product.data.defaultImage && ' no-pic') || ''
                        }`}
                      />
                    </Link>
                    <div className="title-description">
                      <Link
                        to={`/product/${encodeURIComponent(product.data.name)}`}
                      >
                        <strong>{product.data.name}</strong>
                      </Link>
                      <small>{product.data.description}</small>
                    </div>
                  </div>
                  <div className="price-and-cart">
                    <p>{product.data.formattedPrice}</p>
                    <button
                      type="button"
                      onClick={() =>
                        dispatch(addToCartRequest(product.data.name))
                      }
                    >
                      {cart.find(item => item.id === product.data.id) ? (
                        <MdCheck className="label-icon" />
                      ) : (
                        <MdAdd className="label-icon" />
                      )}
                      <MdShoppingCart />
                    </button>
                  </div>
                </ProductItem>
              )
          )
        ) : (
          <h1>Nada encontrado</h1>
        )}
      </ProductsList>
    </Container>
  );
}
