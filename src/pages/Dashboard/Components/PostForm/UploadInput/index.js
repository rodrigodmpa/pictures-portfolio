import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import api from '~/services/api';

import { Container } from './styles';

function UploadInput({ placeholder }) {
  const { defaultValue, registerField } = useField('image');
  const [file, setFile] = useState(defaultValue && defaultValue.id);

  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

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

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);
    data.append('title', e.target.title[0]);

    const response = await api.post('posts', data);

    const { id, url } = response.data.post;
    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="post_image">
        <img
          src={
            preview || 'https://api.adorable.io/avatars/50/abott@adorable.png'
          }
          alt=" "
        />
        <input
          placeholder={placeholder}
          type="file"
          id="post_image"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

export default UploadInput;
