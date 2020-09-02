import React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Card from '../../components/Card';

import { SectionTop, SectionBottom } from './styles';

const Home = () => {
  return (
    <>
      <SectionTop>
        <Input placeholder="New Item" />
        <Button>Add</Button>
      </SectionTop>
      <SectionBottom>
        <Card>Item</Card>
        <Card>Item</Card>
        <Card>Item</Card>
      </SectionBottom>
    </>
  );
};

export default Home;
