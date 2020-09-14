import React from 'react';

import { Container, ToggleLable, ToggleSelector } from './styles';

interface IToggleProps {
  toggleTheme: () => void;
  isThemeActive: boolean;
}

const Toggle: React.FC<IToggleProps> = ({ toggleTheme, isThemeActive }) => {
  return (
    <Container>
      <ToggleLable>Light</ToggleLable>
      <ToggleSelector
        checked={isThemeActive}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={toggleTheme}
      />
      <ToggleLable>Dark</ToggleLable>
    </Container>
  );
};

export default Toggle;
