import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.color};
  padding: 10px 30px;
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  top: 0;
  right: 0;
  width: 100%;
  transition: background 0.7s;
  z-index: 100;
`;

export const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
      width: 80px;
    }

    a {
      font-weight: bold;
      color: ${(props) => props.fontColor};
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: ${(props) => props.fontColor};
      transition: color 0.7s;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: ${(props) => props.fontColor};
      transition: color 0.7s;
    }
  }
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
