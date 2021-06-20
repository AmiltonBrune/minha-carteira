import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Container, Logo, Form, FormTitle } from './styles';

const Signin: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={logoImg} alt='Logo' />
        <h2>Minha Carteira</h2>
      </Logo>
      <Form>
        <FormTitle>Entrar</FormTitle>
        <input type='text' />
        <input type='text' />

        <button type='submit'>Acessar</button>
      </Form>
    </Container>
  );
};

export default Signin;
