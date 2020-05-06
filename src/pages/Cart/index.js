import React, { Component } from 'react';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable } from './styles';

class Cart extends Component {
  handleDeleteButton = (productId) => {
    const { removeFromCart } = this.props;
    removeFromCart(productId);
  };

  render() {
    const { cart } = this.props;
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
                      <MdAddCircleOutline size={20} />
                    </button>
                    <input
                      type="text"
                      name="qtd"
                      id="qtd"
                      value={product.amount}
                    />
                    <button type="button">
                      <MdRemoveCircleOutline size={20} />
                    </button>
                  </div>
                </td>
                <td className="subtotal">
                  <strong>R$919,80</strong>
                </td>
                <td className="delete">
                  <button
                    type="button"
                    onClick={() => this.handleDeleteButton(product.id)}
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
            <strong>R$919,80</strong>
          </div>
        </footer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
