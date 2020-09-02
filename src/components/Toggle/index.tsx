import React from 'react';

import { Container, ToggleLable, ToggleSelector } from './styles';

type Props = {
  toggleTheme: () => void;
  isThemeActive: boolean;
};

const Toggle = (props: Props) => {
  return (
    <Container>
      <ToggleLable>Light</ToggleLable>
      <ToggleSelector
        checked={props.isThemeActive}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={props.toggleTheme}
      />
      <ToggleLable>Dark</ToggleLable>
    </Container>
  );
};

export default Toggle;
