import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '~/services/api';
import Loading from '~/components/Loading';
// import { Container } from './styles';

import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Que email doido é esse?!')
    .required('Coloca um email aí, juro q n envio spam!'),
  password: Yup.string().required('Sem senha fica difícil né?'),
});

function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
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

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <>
      {image.url ? <img src={image.url} alt={image.name} /> : <Loading />}
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        <Link to="/register">Registrar</Link>
      </Form>
    </>
  );
}

export default SignIn;
