import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { Input, Form } from '@rocketseat/unform';

import { FaImage, FaArrowRight } from 'react-icons/fa';
import { Container, UploadInputContainer, Row, MaxLenght } from './styles';

import { postPostRequest } from '~/store/modules/dashboard/actions';

function PostForm({ disable = false }) {
  const textAreaMaxLength = 3000;
  const [preview, setPreview] = useState(null);
  const [remainingChar, setRemainingChar] = useState(textAreaMaxLength);

  const dispatch = useDispatch();

  const [file, setFile] = useState({});

  function handleChange(e) {
    setFile(e.target.files[0]);
    setPreview(1);
  }

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
      file,
      title: e.title,
      subtitle: e.subtitle,
      real_date: e.date,
    };

    dispatch(postPostRequest(data));
  }
  return (
    !disable && (
      <Container>
        <Form onSubmit={handleSubmit}>
          <Input
            alt="Texto"
            rows={5}
            cols={5}
            multiline
            name="title"
            type="text"
            placeholder="Qual a história?"
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
              name="date"
              type="datetime-local"
              placeholder="Quando aconteceu?"
              alt="Data"
            />
            <UploadInputContainer>
              <label htmlFor="post_image">
                <FaImage size="25px" />

                <input
                  alt="Arquivo"
                  placeholder="Imagem"
                  type="file"
                  id="post_image"
                  accept="image/*"
                  data-file={file}
                  onChange={handleChange}
                />
              </label>
            </UploadInputContainer>
            <button type="submit" title="insira uma imagem" disabled={!preview}>
              <FaArrowRight size="20px" />
            </button>
          </Row>
        </Form>
      </Container>
    )
  );
}

export default PostForm;
