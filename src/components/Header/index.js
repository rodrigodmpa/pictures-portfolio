import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

function Header() {
  const profile = useSelector((state) => state.user.profile);
  const [headerColor, setHeaderColor] = useState('#00000000');
  const [fontColor, setFontColor] = useState('black');

  useEffect(() => {
    function listenScrollEvent() {
      if (window.scrollY > 20) {
        setHeaderColor('#000000EE');
        setFontColor('white');
      } else {
        setHeaderColor('#00000000');
        setFontColor('black');
      }
    }
    window.addEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <Container color={headerColor}>
      <Content fontColor={fontColor}>
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
                (profile.avatar && profile.avatar.url) ||
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
