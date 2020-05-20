import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { toast } from 'react-toastify';

import Header from '~/components/store/Header';
import * as CartActions from '~/store/cart/actions';
import { Container, ProductTable, Total, EmptyCart } from './styles';

import Footer from '~/components/store/Footer';
import api from '~/services/apiStore';
import history from '~/services/history';

import { store } from '~/store';

import { formatPrice } from '~/util/format';

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
      subTotal: formatPrice(product.amount * product.price),
    }))
  );
  const { signed } = store.getState().authStore;
  const cartTotal = useMemo(
    () =>
      formatPrice(
        cart.reduce((total, product) => {
          return total + product.amount * product.price;
        }, 0)
      ),
    [cart]
  );

  async function submitOrder() {
    if (signed) {
      try {
        const response = await api.post('/store/orders', cart);
        if (response.status === 201) {
          toast.success('Pedido criado');
          dispatch(CartActions.clearCart());

          history.push('/store');
        }
      } catch (err) {
        toast.error('Algo deu errado. Tente novamente');
      }
    } else {
      history.push('/signin');
    }
  }
  return (
    <>
      <Header />
      <Container>
        {cart.length ? (
          <>
            <ProductTable>
              <thead>
                <tr>
                  <th> </th>
                  <th>Produto</th>
                  <th>QTD</th>
                  <th>Subtotal</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {cart.map(product => (
                  <tr>
                    <td>
                      <img
                        src={
                          (product.defaultImage && product.defaultImage.url) ||
                          `${process.env.REACT_APP_BACKEND_URL}/avatars/default.png`
                        }
                        alt="product.title"
                      />
                    </td>
                    <td>
                      <strong>{product.name}</strong>
                      <span>{product.formattedPrice}</span>
                    </td>
                    <td>
                      <div>
                        <button type="button">
                          <MdRemoveCircleOutline
                            size={20}
                            color="#3f72af"
                            onClick={() =>
                              dispatch(CartActions.decrementItem(product.id))
                            }
                          />
                        </button>
                        <input type="number" readOnly value={product.amount} />
                        <button type="button">
                          <MdAddCircleOutline
                            size={20}
                            color="#3f72af"
                            onClick={() =>
                              dispatch(
                                CartActions.incrementItemSuccess(product.id)
                              )
                            }
                          />
                        </button>
                      </div>
                    </td>
                    <td>
                      <strong>{product.subTotal}</strong>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() =>
                          dispatch(CartActions.removeFromCart(product.id))
                        }
                      >
                        <MdDelete size={20} color="3f72af" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </ProductTable>
            <footer>
              <Total>
                <span>Total</span>
                <strong>{cartTotal}</strong>
              </Total>
              <button type="button" onClick={submitOrder}>
                Finalizar Pedido
              </button>
            </footer>
          </>
        ) : (
            <EmptyCart>
              <h1>Carrinho Vazio</h1>
            </EmptyCart>
          )}
      </Container>
      <Footer />
    </>
  );
}
