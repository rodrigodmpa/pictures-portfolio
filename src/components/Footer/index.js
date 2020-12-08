import React from 'react';
import { FaHeart, FaCoffee } from 'react-icons/fa';

import { Container, Column, Row } from './styles';

function Footer() {
  return (
    <Container>
      <Column>
        <Row>
          Feito com muito <FaHeart color="red" size="20px" /> e{' '}
          <FaCoffee color="brown" size="20px" /> por{' '}
          <a
            href="https://github.com/rodrigodmpa"
            target="_blank"
            rel="noopener noreferrer"
          >
            ele
          </a>
          .{' '}
        </Row>
      </Column>
    </Container>
  );
}

export default Footer;
