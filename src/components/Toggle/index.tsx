import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Container, ToggleLable, ToggleSelector } from './styles';

interface IToggleProps {
  toggleTheme: () => void;
}

const Toggle: React.FC<IToggleProps> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <ToggleLable>Light</ToggleLable>
      <ToggleSelector
        checked={title === 'dark'}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={toggleTheme}
      />
      <ToggleLable>Dark</ToggleLable>
    </Container>
  );
};

export default Toggle;
