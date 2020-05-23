import React, { useCallback } from 'react';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import { Container, ProductTable } from './styles';

function Cart({ cart, total, updateProductAmountRequest, removeFromCart }) {
  const handleAddButton = useCallback(
    (product) => {
      updateProductAmountRequest(product.id, product.amount + 1);
    },
    [updateProductAmountRequest]
  );

  const handleRemoveButton = useCallback(
    (product) => {
      updateProductAmountRequest(product.id, product.amount - 1);
    },
    [updateProductAmountRequest]
  );

  const handleDeleteButton = useCallback(
    (productId) => {
      removeFromCart(productId);
    },
    [removeFromCart]
  );

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
                  <input
                    type="text"
                    name="qtd"
                    id="qtd"
                    value={product.amount}
                  />
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

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  total: PropTypes.string.isRequired,
  updateProductAmountRequest: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce(
      (total, product) => total + product.price * product.amount,
      0
    )
  ),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
