import React, { useState, useEffect } from 'react';

import { formatDistance, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { ListContainer, ItemContainer, Item, Profile } from './styles';
import default_image from '~/assets/img/default_image.jpg';
import api from '~/services/api';
import PostForm from './Components/PostForm';

function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await api.get('posts');
      const rawPosts = response.data.posts;
      const formattedPost = rawPosts.map((post) => {
        const formattedRealDate = post.real_date
          ? formatDistance(
              parseISO(post.real_date),
              new Date(),
              {
                addSuffix: true,
                locale: pt,
              },
              new Date()
            )
          : 'Um dia aí...';
        return {
          ...post,
          formattedRealDate,
        };
      });
      setPosts(formattedPost);
    }
    getPosts();
  }, []);

  function showDefaultImage(e) {
    e.target.attributes.src.value = default_image;
  }
  return (
    <>
      <PostForm />
      <ListContainer>
        {posts.length &&
          posts.map((post) => (
            <ItemContainer key={post.url}>
              <Profile>
                <img
                  src={
                    (post.user.avatar && post.user.avatar.url) ||
                    'https://api.adorable.io/avatars/50/abott@adorable.png'
                  }
                  alt="Profile Pic"
                />
                <div>
                  <strong>{post.user.name}</strong>
                </div>
                &nbsp;&nbsp;•
                <div>{post.formattedRealDate}</div>
              </Profile>

              <Item key={post.url}>
                <div>
                  {post.title}
                  <span>{post.subtitle}</span>
                </div>
                <img
                  alt={post.name}
                  onError={showDefaultImage}
                  src={post.url}
                />
              </Item>
            </ItemContainer>
          ))}
      </ListContainer>
    </>
  );
}

export default Dashboard;
