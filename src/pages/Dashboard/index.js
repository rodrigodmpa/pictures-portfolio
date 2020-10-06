import React, { useState, useEffect } from 'react';

import { Container, Item } from './styles';
import default_image from '~/assets/img/default_image.jpg';
import api from '~/services/api';

function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await api.get('posts');
      setPosts(response.data.posts);
      console.log(response.data.posts);
    }
    getPosts();
  }, []);

  function showDefaultImage(e) {
    e.target.attributes.src.value = default_image;
  }
  return (
    <>
      <Container>
        {posts.length &&
          posts.map((post) => (
            <Item>
              <img alt={post.name} onError={showDefaultImage} src={post.url} />
              <div>
                {post.title}
                <div>{post.subtitle}</div>
              </div>
            </Item>
          ))}
      </Container>
    </>
  );
}

export default Dashboard;
