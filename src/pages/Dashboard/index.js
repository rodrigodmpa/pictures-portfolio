import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';

import Loading from '~/components/Loading';

import { ListContainer, ItemContainer, Item, Profile } from './styles';
import default_image from '~/assets/img/default_image.jpg';
import PostForm from './Components/PostForm';
import {
  getPostsRequest,
  cleanPostsRequest,
} from '~/store/modules/dashboard/actions';

function Dashboard() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.dashboard.posts);
  const user = useSelector((state) => state.user.profile);
  const paginationInfo = useSelector(
    (state) => state.dashboard.pagination_info
  );
  const postsAreLoading = useSelector(
    (state) => state.dashboard.postsAreLoading
  );

  useEffect(() => {
    dispatch(cleanPostsRequest());
    dispatch(getPostsRequest({ page: 1, limit: 5 }));
  }, [dispatch]);

  function loadMorePosts() {
    if (paginationInfo.current_page < paginationInfo.total_pages) {
      dispatch(
        getPostsRequest({
          page: parseInt(paginationInfo.current_page, 10) + 1,
          limit: 5,
        })
      );
    }
  }

  window.onbeforeunload = function scrollToTop() {
    window.scrollTo(0, 0);
  };

  window.onscroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.scrollingElement.scrollHeight
    ) {
      loadMorePosts();
    }
  }, 100);

  function showDefaultImage(e) {
    e.target.attributes.src.value = default_image;
  }
  return (
    <>
      <PostForm disable={!user.admin} />

      {posts &&
        posts.map((post) => (
          <ListContainer key={post.url}>
            <ItemContainer>
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
                &nbsp;&nbsp;•
                <div>{post.subtitle}</div>
              </Profile>

              <Item key={post.url}>
                <div>{post.title}</div>
                <img
                  alt={post.name}
                  onError={showDefaultImage}
                  src={post.url}
                />
              </Item>
            </ItemContainer>
          </ListContainer>
        ))}
      {postsAreLoading && <Loading height={50} width={50} color="white" />}
    </>
  );
}

export default Dashboard;
