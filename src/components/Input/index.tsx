import React from 'react';

import { Container } from './styles';

interface IContainerProps {
  placeholder: string;
}

const Input: React.FC<IContainerProps> = ({ children, placeholder }) => {
  return <Container placeholder={placeholder}>{children}</Container>;
};

export default Input;
