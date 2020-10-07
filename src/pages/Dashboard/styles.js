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

export const ListContainer = styled.div`
  position: relative;
  max-width: 650px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background: #fff;
  margin: 30px auto;
  display: block;
  border: none;
  border-radius: 5px;
`;

export const ItemContainer = styled.div`
  padding-top: 20px;
`;

export const Item = styled.div`
  text-align: center;

  /* border: 1px solid black; */
  img {
    max-width: 100%;
  }
  div {
    padding-left: 20px;
    color: rgba(0, 0, 0);
    font-size: 15px;
    margin: 5px auto;
    text-align: initial;
    span {
      display: block;
      padding-bottom: 20px;
      color: rgba(0, 0, 0, 0.3);
      font-size: 13px;
    }
  }
`;

export const Profile = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;

  div {
    text-align: left;
    margin-left: 10px;
    strong {
      display: block;
      color: black;
    }
  }
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
