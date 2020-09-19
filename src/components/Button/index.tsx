import React from 'react';

import { Container } from './styles';

interface IButtonProps {
  onSaveHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IButtonProps> = ({ children, onSaveHandler }) => {
  return <Container onClick={onSaveHandler}>{children}</Container>;
};

export default Button;
