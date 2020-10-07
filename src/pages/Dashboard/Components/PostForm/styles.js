import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  position: relative;
  max-width: 650px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background: #fff;
  margin: 30px auto;
  display: block;
  border: none;
  border-radius: 5px;
  form {
    margin: 30px auto;
    max-width: 350px;
    display: flex;
    flex-direction: column;

    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0;
      height: 44px;
      background: #3b9bff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.3s;
      &:hover {
        background: ${darken(0.1, '#3b9bff')};
      }
    }
  }

  > button {
    width: 100%;
    margin: 10px 0;
    height: 44px;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.3s;
    &:hover {
      background: ${darken(0.2, '#f64c75')};
    }
  }
`;
