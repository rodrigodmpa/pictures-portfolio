import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

function Header() {
  const profile = useSelector((state) => state.user.profile);
  const [headerColor, setHeaderColor] = useState('white');
  const [fontColor, setFontColor] = useState('black');

  useEffect(() => {
    function listenScrollEvent() {
      if (window.scrollY > 100) {
        setHeaderColor('black');
        setFontColor('white');
      } else {
        setHeaderColor('white');
        setFontColor('black');
      }
    }
    window.addEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <Container color={headerColor}>
      <Content>
        <nav>
          <img
            src="https://api.adorable.io/avatars/50/abott@adorable.png"
            alt="Dimi e Rodi"
          />
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <aside>
          <Profile fontColor={fontColor}>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                profile.avatar.url ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="Profile Pic"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
