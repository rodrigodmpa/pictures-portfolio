import React, { useState } from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import default_image from '~/assets/img/default_image.jpg';

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
  function showDefaultImage(e) {
    e.target.attributes.src.value = default_image;
  }
  function toglePopUpMoreInfo() {
    if (popUpVisibility === 'hidden') setPopUpVisibility('visible');
    else {
      setPopUpVisibility('hidden');
    }
  }
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
          <MoreInfoContainer>
            <button type="button" onClick={toglePopUpMoreInfo}>
              <FaEllipsisH />
            </button>
            <PopUpMoreInfo visibility={popUpVisibility}>
              <MoreInfoOption onClick={toglePopUpMoreInfo}>Edit</MoreInfoOption>
              <MoreInfoOption onClick={toglePopUpMoreInfo}>
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
