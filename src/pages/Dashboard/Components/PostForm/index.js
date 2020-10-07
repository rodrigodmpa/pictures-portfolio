import React from 'react';

import { Input, Form, Textarea } from '@rocketseat/unform';

import { Container } from './styles';

function PostForm() {
  function handleSubmit(e) {
    console.log(e.target);
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Textarea name="title" type="text" placeholder="Descrição" />
        <Input name="subtitle" type="text" placeholder="Local" />

        <hr />
        <input name="date" type="date" placeholder="Data" />
        {/* <ImageInput name="avatar_id" /> */}
        <input type="file" id="avatar" accept="image/*" />

        <button type="submit">Atualizar perfil</button>
      </Form>
    </Container>
  );
}

export default PostForm;
