import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useField } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import api from '~/services/api';

import { Container } from './styles';

function AvatarInput() {
  const { defaultValue, registerField } = useField('avatar');
  const profile = useSelector((state) => state.user.profile);
  const [file, setFile] = useState(defaultValue && defaultValue.id);

  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    if (e.target.files[0].size >= 1024 * 1024 * 2) {
      toast.error('Foto deve ser menor que 2MB');
      return;
    }
    if (
      e.target.files[0].type !== 'image/jpeg' &&
      e.target.files[0].type !== 'image/png'
    ) {
      toast.error('Formato inválido, use jpg, png ou jpeg');
      return;
    }

    const response = await api.post('files', data);

    const { id, url } = response.data.file;
    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview ||
            `https://avatars.dicebear.com/api/bottts/${profile.name}.svg`
          }
          alt=" "
        />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

export default AvatarInput;
