import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 4px;

  footer {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      display: flex;
      align-items: center;

      background: darkgray;
      color: black;
      font-weight: bold;
      padding: 12px;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      transition: 0.2s;
      text-transform: uppercase;

      &:hover {
        background: ${darken(0.03, '#A9A9A9')};
      }
    }

    div {
      display: flex;
      align-items: baseline;
      span {
        font-size: 12px;
        font-weight: bold;
        color: #999;
        margin-right: 5px;
        text-transform: uppercase;
      }
      strong {
        font-size: 20px;
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  border-bottom: 2px solid gainsboro;

  thead th {
    font-size: 14px;
    color: #999;
    text-align: left;
  }

  tbody td {
    text-align: left;
  }

  tbody td.productImage {
    img {
      height: 120px;
    }
  }

  tbody td.product {
    div {
      display: flex;
      flex-direction: column;
      strong {
        color: #333;
        font-size: 14px;
        line-height: 20px;
      }
      span {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }

  tbody td.qtd {
    div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      button {
        display: flex;
        border: 0;
        background: none;
        color: darkgray;
        padding: 6px;
      }
      input {
        width: 50px;
        border: 1px solid lightgray;
        border-radius: 4px;
        padding: 5px;
      }
    }
  }

  tbody td.delete {
    button {
      border: 0;
      background: none;
      color: darkgray;
    }
  }
`;
