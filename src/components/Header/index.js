import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import avatar from '../../assets/img/logos/avatar.png';

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
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  return (
    <Container color={headerColor}>
      <Content fontColor={fontColor}>
        <nav>
          <img src={avatar} alt="OiMor" />
          <Link to="/dashboard" replace>
            Dashboard
          </Link>
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
                `https://avatars.dicebear.com/api/bottts/${profile.name}.svg`
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
