import React from 'react';
import Toggle from '../Toggle';

import { Container, Title } from './styles';

type Props = {
  toggleTheme: () => void;
  isThemeActive: boolean;
};

const Header = (props: Props) => {
  return (
    <Container>
      <Title>TodoList</Title>
      <Toggle
        isThemeActive={props.isThemeActive}
        toggleTheme={props.toggleTheme}
      />
    </Container>
  );
};

export default Header;
