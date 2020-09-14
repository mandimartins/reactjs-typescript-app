import React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Card from '../../components/Card';

import { SectionTop, SectionBottom } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <SectionTop>
        <Input placeholder="New Item" />
        <Button>Add</Button>
      </SectionTop>
      <SectionBottom>
        <Card title={'item one'} />
        <Card title={'item two'} />
        <Card title={'item three'} />
        <Card title={'item four'} />
      </SectionBottom>
    </>
  );
};

export default Home;
