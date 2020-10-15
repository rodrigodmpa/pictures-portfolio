import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  position: relative;
  max-width: 650px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background: #fff;
  margin: 30px auto;
  display: flex;
  border: none;
  border-radius: 5px;

  h2 {
  }
  form {
    margin: 30px auto;
    max-width: 100%;
    display: flex;
    flex-direction: column;

    input {
      background: white;
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.5);
      height: 30px;
      padding: 15px;
      margin: 15px;
      color: #000;
      max-width: 100%;
    }

    @media (max-width: 800px) {
    }
    textarea {
      background: white;
      border-radius: 4px;
      padding: 15px;
      margin: 15px;
      color: #000;
      resize: none;
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
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
`;
export const UploadInputContainer = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
    img {
      border: 2px solid black;
      border-radius: 3px;
      height: 120px;
      width: 120px;
    }

    input {
      display: none;
    }
  }
`;

export const Row = styled.div``;
