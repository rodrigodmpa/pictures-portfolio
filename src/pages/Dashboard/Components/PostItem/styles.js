import styled from 'styled-components';

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

export const PostItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  flex-direction: row;
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

export const MoreInfoContainer = styled.div`
  position: relative;
  padding-right: 10px;
  align-items: center;
  button {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    align-self: center;

    transition: background 0.3s;

    svg {
      margin-top: 4px;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;

export const PopUpMoreInfo = styled.div`
  width: 60px;
  margin: 5px;
  right: 0;
  position: absolute;
  background: #eee;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 20;
  visibility: ${(props) => props.visibility};
`;

export const MoreInfoOption = styled.span`
  font-size: 13px;
  display: block;
  margin: 3px;
  padding: 3px;
  border-radius: 3px;
  transition: background 0.3s;
  :hover {
    background: rgba(0, 0, 0, 0.2);
  }
  + span {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
