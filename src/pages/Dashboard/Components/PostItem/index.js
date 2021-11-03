import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaEllipsisH } from 'react-icons/fa';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';

import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';
import default_image from '~/assets/img/default_image.jpg';
import { deletePostsRequest } from '~/store/modules/dashboard/actions';
import Modal from '~/components/Modal';
import EditPostForm from '~/pages/Dashboard/Components/EditPostForm';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {
  ListContainer,
  ItemContainer,
  Item,
  Profile,
  MoreInfoContainer,
  PostItemHeader,
  PopUpMoreInfo,
  MoreInfoOption,
  Footer,
} from './styles';
import api from '~/services/api';

function PostItem(post) {
  const [popUpVisibility, setPopUpVisibility] = useState('hidden');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [like, setLike] = useState(false);

  const [sumLike, setSumLike] = useState(post.post.likes.length);
  async function toggleLike() {
    try {
      const response = await api.post(`likes/toggle?post_id=${post.post.id}`);
      if (response.data.isLike) {
        setLike(true);
        setSumLike((prev) => prev + 1);
      } else {
        setLike(false);
        setSumLike((prev) => prev - 1);
      }
    } catch (e) {
      toast.error('Ops... ocorreu algum erro ao fazer isso');
    }
  }
  function openModal() {
    setIsOpen(true);
    setPopUpVisibility('hidden');
  }
  function closeModal() {
    setIsOpen(false);
  }

  function likedNames(likes) {
    const names = likes
      .map((lik, idx) => {
        if (idx < 2) {
          return lik.user.name.split(' ')[0];
        }
        return '';
      })
      .join(', ');

    return likes.length > 2 ? `${names} e outros` : names;
  }
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  useEffect(() => {
    const isLiked = post.post.likes.filter((lk) => lk.user_id === profile.id);
    if (isLiked.length) {
      setLike(true);
    }
  }, [post.post.likes, profile.id]);

  function showDefaultImage(e) {
    e.target.attributes.src.value = default_image;
  }
  function toglePopUpMoreInfo() {
    if (popUpVisibility === 'hidden') setPopUpVisibility('visible');
    else {
      setPopUpVisibility('hidden');
    }
  }
  function deletePost(post_id) {
    confirmAlert({
      title: 'Confirmar',
      message: 'Tem certeza que deseja deletar este post?',
      closeOnEscape: true,
      closeOnClickOutside: true,
      buttons: [
        {
          label: 'Sim, delete o post',
          onClick: () => dispatch(deletePostsRequest(post_id)),
        },
        {
          label: 'Não',
          onClick: () => setPopUpVisibility('hidden'),
        },
      ],
    });
  }
  // if (window.confirm('Deletar post?')) dispatch(deletePostsRequest(post_id));

  return (
    <ListContainer>
      <ItemContainer>
        <PostItemHeader>
          <Profile>
            <img
              src={
                (post.post.user.avatar && post.post.user.avatar.url) ||
                `https://avatars.dicebear.com/api/bottts/${post.post.user.name}.svg`
              }
              alt="Profile Pic"
            />
            <div>
              <strong>{post.post.user.name}</strong>
            </div>
            &nbsp;&nbsp;•
            <div>{post.post.formattedRealDate}</div>
            &nbsp;&nbsp;•
            <div>{post.post.subtitle}</div>
          </Profile>
          <MoreInfoContainer
            visibility={
              profile.admin && profile.id === post.post.user.id
                ? 'visible'
                : 'hidden'
            }
          >
            <button type="button" onClick={toglePopUpMoreInfo}>
              <FaEllipsisH />
            </button>
            <PopUpMoreInfo visibility={popUpVisibility}>
              <MoreInfoOption onClick={openModal}>Edit</MoreInfoOption>
              <Modal modalIsOpen={modalIsOpen}>
                <EditPostForm post={post.post} />
                <button type="submit" onClick={closeModal}>
                  Fechar
                </button>{' '}
              </Modal>
              <MoreInfoOption onClick={() => deletePost(post.post.id)}>
                Delete
              </MoreInfoOption>
            </PopUpMoreInfo>
          </MoreInfoContainer>
        </PostItemHeader>
        <Item key={post.post.url}>
          <div>{post.post.title}</div>
          <img
            alt={post.post.name}
            onError={showDefaultImage}
            src={post.post.url}
          />
        </Item>
        <Footer>
          <button type="button" onClick={toggleLike}>
            {like ? <IoIosHeart /> : <IoIosHeartEmpty />}
          </button>
          <span>{sumLike}&nbsp;</span>
          {sumLike > 0 && !!post.post.likes.length && (
            <span>(Curtido por {likedNames(post.post.likes)})</span>
          )}
        </Footer>
      </ItemContainer>
    </ListContainer>
  );
}

export default PostItem;
