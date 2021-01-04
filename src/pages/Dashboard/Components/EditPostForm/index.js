import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { Input, Form } from '@rocketseat/unform';

import { FaArrowRight } from 'react-icons/fa';
import { Container, Row, MaxLenght } from '../PostForm/styles';

import { updatePostRequest } from '~/store/modules/dashboard/actions';

function EditPostForm({ disable = false, post = {} }) {
  const textAreaMaxLength = 3000;
  const [remainingChar, setRemainingChar] = useState(
    textAreaMaxLength - post.title.length
  );

  const dispatch = useDispatch();

  function countLen(e) {
    let remaining = textAreaMaxLength - e.target.value.length;
    if (remaining <= 0) {
      remaining = 0;
      e.target.value = e.target.value.substring(0, textAreaMaxLength);
    }
    setRemainingChar(remaining);
  }
  async function handleSubmit(e) {
    const data = {
      id: post.id,
      title: e.title,
      subtitle: e.subtitle,
      real_date: e.ISODate,
    };

    dispatch(updatePostRequest(data));
  }
  return (
    !disable && (
      <>
        <h3>Editar post</h3>
        <Container>
          <Form initialData={post} onSubmit={handleSubmit}>
            <Input
              alt="Texto"
              rows={5}
              cols={5}
              multiline
              name="title"
              type="text"
              placeholder="Qual a história de hoje?"
              required
              onChange={countLen}
              maxLength="3000"
            />
            <MaxLenght>Caracteres restantes: {remainingChar}</MaxLenght>
            <Row>
              <Input
                name="subtitle"
                type="text"
                placeholder="Onde aconteceu?"
                alt="Local"
                maxLength={25}
              />
              <Input
                name="ISODate"
                type="datetime-local"
                placeholder="Quando aconteceu?"
                alt="Data"
                required
              />

              <button type="submit" title="insira uma imagem">
                <FaArrowRight size="20px" />
              </button>
            </Row>
          </Form>
        </Container>
      </>
    )
  );
}

export default EditPostForm;
