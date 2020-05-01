import React from 'react';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable } from './styles';

export default function Cart() {
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
          <tr>
            <td className="productImage">
              <img
                src="https://static.netshoes.com.br/produtos/tenis-asics-gel-kayano-25-feminino/18/D18-2869-118/D18-2869-118_zoom2.jpg?ims=326x"
                alt="Tênis"
              />
            </td>
            <td className="product">
              <div>
                <strong>Asics Gel Kayano 25</strong>
                <span>R$459,90</span>
              </div>
            </td>
            <td className="qtd">
              <div>
                <button type="button">
                  <MdAddCircleOutline size={20} />
                </button>
                <input type="text" name="qtd" id="qtd" value="2" />
                <button type="button">
                  <MdRemoveCircleOutline size={20} />
                </button>
              </div>
            </td>
            <td className="subtotal">
              <strong>R$919,80</strong>
            </td>
            <td className="delete">
              <button type="button">
                <MdDelete size={20} />
              </button>
            </td>
          </tr>
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
