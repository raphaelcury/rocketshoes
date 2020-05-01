import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: #fff;
    border-radius: 10px;

    img {
      max-width: 250px;
      align-self: center;
    }

    > strong {
      color: #333;
      font-size: 16px;
      line-height: 20px;
    }

    > span {
      color: #333;
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      display: flex;
      align-items: center;

      background: darkgray;
      color: black;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      transition: 0.2s;

      &:hover {
        background: ${darken(0.03, '#A9A9A9')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgb(0, 0, 0, 0.1);
        svg {
          margin-right: 5px;
        }

        span {
          font-size: 14px;
          font-weight: bold;
        }
      }

      strong {
        flex: 1;
      }
    }
  }
`;
