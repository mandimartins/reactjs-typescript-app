import React from 'react';
import Toggle from '../Toggle';

import { Container, Title } from './styles';

interface IHeaderProps {
  toggleTheme: () => void;
  isThemeActive: boolean;
}

const Header: React.FC<IHeaderProps> = ({ isThemeActive, toggleTheme }) => {
  return (
    <Container>
      <Title>TodoList</Title>
      <Toggle isThemeActive={isThemeActive} toggleTheme={toggleTheme} />
    </Container>
  );
};

export default Header;
