import React from 'react';

import { Container } from './styles';

const Button = (props: any) => {
  return <Container {...props}>{props.children}</Container>;
};

export default Button;
