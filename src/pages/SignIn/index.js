import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import eueela from '~/assets/eueela.jpeg';
// import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Que email doido é esse?!')
    .required('Coloca um email aí, juro q n envio spam!'),
  password: Yup.string().required('Sem senha fica difícil né?'),
});

function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={eueela} alt="Couple" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Acessar</button>
        <Link to="/register">Registrar</Link>
      </Form>
    </>
  );
}

export default SignIn;
