import styled from 'styled-components';

export const Title = styled.div`
  position: relative;
  margin: 30px auto;
  text-align: center;
  font-size: 30px;
  border-radius: 5px;
  max-width: 650px;
  padding: 10px;
`;

export const Container = styled.div`
  position: relative;
  max-width: 650px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  background: #fff;
  margin: 30px auto;
  display: block;
  border: none;
  border-radius: 5px;
  @media (max-width: 800px) {
    max-width: 400px;
  }
`;

export const Item = styled.div`
  /* margin: 5px;
  padding: 15px; */
  text-align: center;
  font-size: 1.5em;
  border: 1px solid black;
  img {
    max-width: 450px;
  }
  div {
    color: rgba(0, 0, 0);
    font-size: 16px;
    max-width: 400px;
    margin: 5px auto;
    text-align: initial;
    div {
      color: rgba(0, 0, 0, 0.3);
      font-size: 14px;
    }
  }

  @media (max-width: 800px) {
    img {
      max-width: 250px;
    }
  }
`;
