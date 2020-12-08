import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';

import Loading from '~/components/Loading';

import PostForm from './Components/PostForm';
import PostItem from './Components/PostItem';
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
    if (
      paginationInfo &&
      paginationInfo.current_page < paginationInfo.total_pages
    ) {
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
  return (
    <>
      <PostForm disable={!user.admin} />

      {posts && posts.map((post) => <PostItem key={post.path} post={post} />)}
      {postsAreLoading && <Loading height={50} width={50} color="white" />}
    </>
  );
}

export default Dashboard;
