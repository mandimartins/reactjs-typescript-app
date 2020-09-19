import React from 'react';

import { Container, Title, Icon } from './styles';

interface IButtonProps {
  title: string;
  onDeleteHandler: () => void;
}

const Button: React.FC<IButtonProps> = ({ title, onDeleteHandler }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Icon onClick={onDeleteHandler} />
    </Container>
  );
};

export default Button;
