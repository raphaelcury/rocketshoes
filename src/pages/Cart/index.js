import React from 'react';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import { Container, ProductTable } from './styles';

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subTotal: formatPrice(product.price * product.amount),
    }))
  );
  const total = useSelector(
    formatPrice((state) =>
      state.cart.reduce(
        (sum, product) => sum + product.price * product.amount,
        0
      )
    )
  );

  function handleAddButton(product) {
    dispatch(
      CartActions.updateProductAmountRequest(product.id, product.amount + 1)
    );
  }

  function handleRemoveButton(product) {
    dispatch(
      CartActions.updateProductAmountRequest(product.id, product.amount - 1)
    );
  }

  function handleDeleteButton(productId) {
    dispatch(CartActions.removeFromCart(productId));
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th> </th>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td className="productImage">
                <img src={product.image} alt="Tênis" />
              </td>
              <td className="product">
                <div>
                  <strong>{product.title}</strong>
                  <span>{product.formattedPrice}</span>
                </div>
              </td>
              <td className="qtd">
                <div>
                  <button type="button">
                    <MdAddCircleOutline
                      size={20}
                      onClick={() => handleAddButton(product)}
                    />
                  </button>
                  <input type="text" value={product.amount} readOnly />
                  <button type="button">
                    <MdRemoveCircleOutline
                      size={20}
                      onClick={() => handleRemoveButton(product)}
                    />
                  </button>
                </div>
              </td>
              <td className="subtotal">
                <strong>{product.subTotal}</strong>
              </td>
              <td className="delete">
                <button
                  type="button"
                  onClick={() => handleDeleteButton(product.id)}
                >
                  <MdDelete size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="submit">Finalizar Pedido</button>
        <div>
          <span>Total</span>
          <strong>{total}</strong>
        </div>
      </footer>
    </Container>
  );
}
