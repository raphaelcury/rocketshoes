import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

function Home({ addToCartRequest }) {
  const amount = useSelector((state) =>
    state.cart.reduce((productAmount, product) => {
      productAmount[product.id] = product.amount;
      return productAmount;
    }, {})
  );

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('/products');
      const newProductList = response.data.map((product) => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }));
      setProducts(newProductList);
    }
    getProducts();
  }, []);

  function handleAddProduct(productId) {
    addToCartRequest(productId);
  }

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt="Tênis" />
          <strong>{product.title}</strong>
          <span>{product.formattedPrice}</span>
          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} />{' '}
              <span>{amount[product.id] || 0}</span>
            </div>
            <strong>Adicionar ao carrinho</strong>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

Home.propTypes = {
  addToCartRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);
