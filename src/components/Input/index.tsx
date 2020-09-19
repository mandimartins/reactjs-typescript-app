import React, { ChangeEvent, KeyboardEvent } from 'react';

import { Container } from './styles';

interface IContainerProps {
  value: string;
  placeholder: string;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (e: KeyboardEvent) => void;
}

const Input: React.FC<IContainerProps> = ({
  children,
  placeholder,
  onChangeInput,
  handleKeyPress,
  value,
}) => {
  return (
    <Container
      onChange={onChangeInput}
      onKeyPress={handleKeyPress}
      placeholder={placeholder}
      value={value}
    >
      {children}
    </Container>
  );
};

export default Input;
