import React from 'react';
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
  function handleAddButton(product) {
    updateProductAmountRequest(product.id, product.amount + 1);
  }

  function handleRemoveButton(product) {
    updateProductAmountRequest(product.id, product.amount - 1);
  }

  function handleDeleteButton(productId) {
    removeFromCart(productId);
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <th> </th>
          <th>PRODUTO</th>
          <th>QTD</th>
          <th>SUBTOTAL</th>
          <th> </th>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr>
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
  cart: PropTypes.objectOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
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
