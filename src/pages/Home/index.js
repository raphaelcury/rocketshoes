import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import api from '../../services/api';

import { ProductList } from './styles';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const products = await api.get('/products');
    console.log(products);
    this.setState({ products: products.data });
  }

  render() {
    const { products } = this.state;
    return (
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt="Tênis" />
            <strong>{product.title}</strong>
            <span>{product.price}</span>
            <button type="button">
              <div>
                <MdAddShoppingCart size={16} /> <span>3</span>
              </div>
              <strong>Adicionar ao carrinho</strong>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}
