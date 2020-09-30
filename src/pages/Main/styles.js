import styled from 'styled-components';

export const Container = styled.div`
  /* max-width: 400px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto; */

  max-width: 700px;
  height: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  background: #fff;
  margin: 0 auto;
  display: flex;
  border: 1px solid #ccc;
  flex-wrap: wrap;
  align-content: space-between;
`;

export const Item = styled.div`
  flex: 1;
  margin: 5px;
  padding: 0 10px;
  background: tomato;
  text-align: center;
  font-size: 1.5em;
`;
