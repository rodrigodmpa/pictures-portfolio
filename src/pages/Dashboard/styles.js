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
  margin: 10px auto;
  display: block;
  border: none;
  border-radius: 3px;
`;

export const ItemContainer = styled.div`
  padding-top: 20px;
`;

export const Item = styled.div`
  text-align: center;

  /* border: 1px solid black; */
  img {
    max-width: 100%;
    margin: 0px auto;
    max-height: 90vh;
  }
  div {
    padding-left: 20px;
    color: rgba(0, 0, 0);
    font-size: 15px;
    margin: 15px 15px;
    text-align: initial;
    overflow-wrap: break-word;
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
    overflow-wrap: break-word;
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
