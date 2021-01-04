import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaEllipsisH } from 'react-icons/fa';
import { confirmAlert } from 'react-confirm-alert';
import default_image from '~/assets/img/default_image.jpg';
import { deletePostsRequest } from '~/store/modules/dashboard/actions';
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
} from './styles';

function PostItem(post) {
  const [popUpVisibility, setPopUpVisibility] = useState('hidden');
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

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
          <MoreInfoContainer visibility={profile.admin ? 'visible' : 'hidden'}>
            <button type="button" onClick={toglePopUpMoreInfo}>
              <FaEllipsisH />
            </button>
            <PopUpMoreInfo visibility={popUpVisibility}>
              <MoreInfoOption onClick={toglePopUpMoreInfo}>Edit</MoreInfoOption>
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
      </ItemContainer>
    </ListContainer>
  );
}

export default PostItem;
