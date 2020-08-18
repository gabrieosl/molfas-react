import React, { useMemo } from 'react';
// import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { MdShoppingCart, MdCheck, MdAdd } from 'react-icons/md';

import api from '~/services/api';

import Header from '~/components/Header';
import ImagesViewer from '~/components/ImagesViewer';
import ProductsViewer from '~/components/ProductsViewer';
import Footer from '~/components/Footer';

import {
  Container,
  ProductPath,
  ProductContainer,
  ProductWrapper,
  ProductDetails,
} from '~/styles/product';

import { addToCartRequest } from '~/redux/cart/actions';
import { formatPrice } from '~/util/format';

function Product({ product, similarProducts }) {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const isOnCart = useMemo(() => !!cart.find(item => item.id === product.id), [
    product,
    cart,
  ]);

  return (
    <Container>
      <Header />
      <ProductPath>
        <p>
          Produtos {'>'} {product.name}
        </p>
      </ProductPath>
      <ProductWrapper>
        <ProductContainer>
          <ImagesViewer
            images={product.images}
            defaultImage={product.defaultImage}
          />
          <ProductDetails>
            <strong>{product.name}</strong>
            <p>Materia prima</p>
            <div>
              <span>ID: #{product.id}</span>
              <span className="stock">Em estoque *</span>
            </div>
            <p>Descrição:</p>
            <small>{product.description}</small>
            <p>Partes:</p>
            <ul>
              {product.subproducts.map(subproduct => (
                <li>{subproduct.name}</li>
              ))}
            </ul>
            <section>
              <p>{product.formattedPrice}</p>
              <button
                type="button"
                onClick={() => dispatch(addToCartRequest(product.name))}
              >
                Comprar agora
                <MdShoppingCart className="shopping-cart" />
                {isOnCart ? (
                  <MdCheck className="label-icon" />
                ) : (
                  <MdAdd className="label-icon" />
                )}
              </button>
            </section>
          </ProductDetails>
        </ProductContainer>
      </ProductWrapper>
      <strong>Produtos similares</strong>
      <ProductsViewer mode="grid" products={similarProducts} small />
      <Footer />
    </Container>
  );
}

Product.getInitialProps = async ctx => {
  const { name } = ctx.query;

  let product = {};
  const response = await api.get(
    `https://api.fortureplasticos.com.br/store/products/${encodeURIComponent(
      name
    )}`
  );
  if (response.status === 200) {
    product = {
      ...response.data,
      formattedPrice: formatPrice(response.data.price),
    };
  }

  return { product, similarProducts: [product, product, product, product] };
};

export default Product;
