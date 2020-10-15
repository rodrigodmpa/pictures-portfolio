import React, { useState, useEffect, useRef } from 'react';

import { useDispatch } from 'react-redux';

import { useField, Input, Form } from '@rocketseat/unform';

import { Container, UploadInputContainer } from './styles';

import uploadImageDefault from '~/assets/img/uploadImageDefault.png';

import { postPostRequest } from '~/store/modules/dashboard/actions';

function PostForm({ disable = false }) {
  const { defaultValue, registerField } = useField('image');
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const dispatch = useDispatch();

  const [file, setFile] = useState({});

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'post_image_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  function handleChange(e) {
    setFile(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
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
            rows={3}
            cols={5}
            multiline
            name="title"
            type="text"
            placeholder="Qual a história?"
            required
          />

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

          {/* <UploadInput name="post_image_id" placeholder="Imagem" /> */}

          <UploadInputContainer>
            <label htmlFor="post_image">
              <img src={preview || uploadImageDefault} alt=" " />
              <input
                alt="Arquivo"
                placeholder="Imagem"
                type="file"
                id="post_image"
                accept="image/*"
                data-file={file}
                onChange={handleChange}
                ref={ref}
              />
            </label>
          </UploadInputContainer>

          <button type="submit">Postar</button>
        </Form>
      </Container>
    )
  );
}

export default PostForm;
