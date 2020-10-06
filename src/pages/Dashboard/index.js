import React from 'react';

import { Container, Item, Title } from './styles';
import eueela from '~/assets/eueela.jpeg';

function Dashboard() {
  return (
    <>
      {/* <Title>Fotos</Title> */}
      <Container>
        <Item>
          <img alt="img" src={eueela} />
          <div>
            Legenda da imagem vem aqui, teste escrevendo um texto grande.
            <div>Sublegenda da imagem aqui</div>
          </div>
        </Item>
        <Item>
          <img alt="img" src={eueela} />
          <div>
            Legenda da imagem vem aqui, teste escrevendo um texto grande.
            <div>Sublegenda da imagem aqui</div>
          </div>
        </Item>
        <Item>
          <img
            alt="img"
            src="https://api.adorable.io/avatars/200/abott@adorable.png"
          />
          <div>
            Legenda da imagem vem aqui, teste escrevendo um texto grande.
            <div>Sublegenda da imagem aqui</div>
          </div>
        </Item>
        <Item>
          <img
            alt="img"
            src="https://api.adorable.io/avatars/400/abott@adorable.png"
          />
          <div>
            Legenda da imagem vem aqui, teste escrevendo um texto grande.
            <div>Sublegenda da imagem aqui</div>
          </div>
        </Item>
        <Item>
          <img
            alt="img"
            src="https://api.adorable.io/avatars/100/abott@adorable.png"
          />
        </Item>
        <Item>
          <img
            alt="img"
            src="https://api.adorable.io/avatars/30/abott@adorable.png"
          />
        </Item>
        <Item>
          <img
            alt="img"
            src="https://api.adorable.io/avatars/300/abott@adorable.png"
          />
        </Item>
        <Item>
          <img
            alt="img"
            src="https://api.adorable.io/avatars/150/abott@adorable.png"
          />
        </Item>
        <Item>
          <img
            alt="img"
            src="https://api.adorable.io/avatars/300/abott@adorable.png"
          />
        </Item>
        <Item>
          <img
            alt="img"
            src="https://api.adorable.io/avatars/70/abott@adorable.png"
          />
        </Item>
        <Item>
          <img
            alt="img"
            src="https://api.adorable.io/avatars/170/abott@adorable.png"
          />
        </Item>
        <Item>
          <img
            alt="img"
            src="https://api.adorable.io/avatars/120/abott@adorable.png"
          />
        </Item>
      </Container>
    </>
  );
}

export default Dashboard;
