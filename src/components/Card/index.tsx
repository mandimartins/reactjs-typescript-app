import React from 'react';

import { Container, Title, Icon } from './styles';

const Button = (props: any) => {
  return (
    <Container>
      <Title>{props.children}</Title>
      <Icon />
    </Container>
  );
};

export default Button;
