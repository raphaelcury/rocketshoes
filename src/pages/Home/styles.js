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
    padding: 10px;
    background: #fff;
    border-radius: 10px;

    img {
      max-width: 250px;
    }

    > strong {
      color: #333;
      margin-bottom: 5px;
    }

    > span {
      color: #333;
      margin-bottom: 5px;
    }

    button {
      display: flex;
      align-items: center;
      padding: 10px;
      background: darkgray;
      border: 0;
      border-radius: 4px;
      transition: 0.2s;

      &:hover {
        background: ${darken(0.1, '#A9A9A9')};
      }

      div {
        display: flex;
        align-items: center;

        svg {
          margin-right: 5px;
        }

        span {
          font-size: 14px;
        }
      }

      strong {
        flex: 1;
      }
    }
  }
`;
