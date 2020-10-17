import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '~/services/api';
import Loading from '~/components/Loading';

import { signUpRequest } from '~/store/modules/auth/actions';

// import { Container } from './styles';
const schema = Yup.object().shape({
  name: Yup.string().required('Quem é você? '),
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
  const [image, setImage] = useState({});

  useEffect(() => {
    let mounted = false;
    async function getRandomImage() {
      const randomImage = await api.get('/random-post');
      setImage(randomImage.data.image);
    }
    if (!mounted) {
      getRandomImage();
    }
    return () => {
      mounted = true;
    };
  }, []);

  const dispatch = useDispatch();
  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      {image && image.url ? (
        <img src={image.url} alt={image.name} />
      ) : (
        <Loading color="white" />
      )}
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
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
