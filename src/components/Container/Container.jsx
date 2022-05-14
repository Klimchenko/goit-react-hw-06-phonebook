import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Container.styled';

const Container = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Container;

Container.propTypes = {
  children: PropTypes.array.isRequired,
};
