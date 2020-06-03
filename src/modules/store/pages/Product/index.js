import React, { useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdLoop, MdShoppingCart, MdCheck, MdAdd } from 'react-icons/md';

import api from '~/modules/store/services/api';

import Header from '~/modules/store/components/Header';
import ImagesViewer from '~/modules/store/components/ImagesViewer';
import ProductsViewer from '~/modules/store/components/ProductsViewer';
import Footer from '~/modules/store/components/Footer';
import LoadingContainer from '~/shared/util/LoadingContainer';

import {
  Container,
  ProductContainer,
  ProductWrapper,
  ProductDetails,
} from './styles';

import { addToCartRequest } from '~/modules/store/redux/cart/actions';
import { formatPrice } from '~/shared/util/format';

export default function Product() {
  const { name } = useParams();
  const cart = useSelector(state => state.cart);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const dispatch = useDispatch();

  const isOnCart = useMemo(() => !!cart.find(item => item.id === product.id), [
    product,
    cart,
  ]);

  useEffect(() => {
    async function getData() {
      const response = await api.get(
        `/store/products/${encodeURIComponent(name)}`
      );
      if (response.status === 200) {
        setProduct({
          ...response.data,
          formattedPrice: formatPrice(response.data.price),
        });
      }

      const products = await api.get('/store/products');
      if (products.data) {
        setSimilarProducts(
          products.data.map(data => ({
            data: { ...data, formattedPrice: formatPrice(data.price) },
            filtered: true,
          }))
        );
      }

      setLoading(false);
    }

    getData();
    // eslint-disable-next-line
  }, []);

  return (
    (loading && (
      <LoadingContainer>
        <MdLoop />
      </LoadingContainer>
    )) || (
      <>
        <Header />
        <Container>
          <p>
            Produtos {'>'} {product.name}
          </p>
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
          <ProductsViewer fixedMode="grid" products={similarProducts} />
        </Container>
        <Footer />
      </>
    )
  );
}
