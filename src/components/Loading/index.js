import React from 'react';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';
import { Center } from './styles';

const Loading = ({ type, color, height, width, delay }) => (
  <Center>
    <ReactLoading
      type={type}
      color={color}
      height={height}
      width={width}
      delay={delay}
    />
  </Center>
);

export default Loading;

Loading.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  delay: PropTypes.number,
};

Loading.defaultProps = {
  type: 'bubbles',
  color: '#000',
  height: 100,
  width: 100,
  delay: 0,
};
