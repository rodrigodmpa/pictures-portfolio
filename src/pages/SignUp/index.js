import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import couple from '~/assets/couple1.png';

// import { Container } from './styles';
const schema = Yup.object().shape({
  fullname: Yup.string().required('Quem é você? '),
  email: Yup.string()
    .email('Que email doido é esse?!')
    .required('Coloca um email ai, juro q n envio spam!'),
  password: Yup.string()
    .min(8, 'Tem que sem BEM secreta, coloca mais coisa aí!')
    .required('Sem senha fica difícil né...'),
  confirmpassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Não tá batendo com a senha!'
  ),
});
function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={couple} alt="Couple" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="fullname" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu email" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <Input
          name="confirmpassword"
          type="password"
          placeholder="Confirme sua senha"
        />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}

export default SignIn;
