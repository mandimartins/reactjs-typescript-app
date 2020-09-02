import React from 'react';

import { Container } from './styles';

const Input = (props: any) => {
  return <Container {...props}>{props.children}</Container>;
};

export default Input;
