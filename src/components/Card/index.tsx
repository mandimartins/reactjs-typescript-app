import React from 'react';

import { Container, Title, Icon } from './styles';

interface ITitleProps {
  title: string;
}

const Button: React.FC<ITitleProps> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Icon />
    </Container>
  );
};

export default Button;
