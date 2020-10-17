import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  /* background: ${(props) =>
    `url(${props.backgroundImg}) no-repeat top center`}; */
  position: relative;
  max-width: 650px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background: #fff;
  margin: 30px auto;
  display: flex;
  border: none;
  border-radius: 5px;

  form {
    margin: 5px auto;
    width: 100%;
    display: flex;
    flex-direction: column;

    input {
      background: white;
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.5);
      height: 30px;
      padding: 15px;
      margin: 5px;
      color: #000;
      width: 35%;
    }
    img {
      border-radius: 3px;
      height: 120px;
      width: 120px;
    }
    svg {
      margin: 10px;
      display: inline;
    }

    textarea {
      background: white;
      padding: 15px;
      margin: 5px 5px 10px 5px;
      color: #000;
      resize: none;
      border: none;
      transition: font-size 0.3s;
      &::placeholder {
        font-size: 30px;
      }
      &:focus {
        &::placeholder {
          font-size: 15px;
        }
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      /* margin: 0 0 10px; */
      font-weight: bold;
    }

    button {
      margin: 5px 5px 5px 5px;
      height: 40px;
      width: 40px;
      background: #3b9bff;
      color: #fff;
      border: 0;
      border-radius: 50%;
      font-size: 10px;
      transition: background 0.3s;
      align-self: center;

      &:hover {
        background: ${darken(0.1, '#3b9bff')};
      }
      &:disabled {
        background: #aaaaaa;
        cursor: default;
      }
    }
  }
`;
export const UploadInputContainer = styled.div`
  align-self: center;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    input {
      display: none;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 5px;
`;

export const MaxLenght = styled.span`
  color: red;
  font-size: 10px;
  width: 100%;
  text-align: end;
  padding-right: 10px;
`;
