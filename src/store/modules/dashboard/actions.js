export function getPostsRequest(query) {
  return {
    type: '@dashboard/GET_POSTS_REQUEST',
    payload: { query },
  };
}

export function getPostsSuccess(dashboard) {
  return {
    type: '@dashboard/GET_POSTS_SUCCESS',
    payload: { dashboard },
  };
}

export function getPostsFailure() {
  return {
    type: '@dashboard/GET_POSTS_FAILURE',
  };
}

export function cleanPostsRequest() {
  return {
    type: '@dashboard/CLEAN_POSTS_REQUEST',
  };
}

export function postPostRequest(data) {
  return {
    type: '@dashboard/POST_POST_REQUEST',
    payload: { data },
  };
}

export function postPostSuccess(dashboard) {
  return {
    type: '@dashboard/POST_POST_SUCCESS',
    payload: { dashboard },
  };
}

export function postPostFailure() {
  return {
    type: '@dashboard/POST_POST_FAILURE',
  };
}

export function deletePostsRequest(post_id) {
  return {
    type: '@dashboard/DELETE_POSTS_REQUEST',
    payload: { post_id },
  };
}

export function deletePostSuccess(data) {
  return {
    type: '@dashboard/DELETE_POST_SUCCESS',
    payload: { data },
  };
}

export function updatePostRequest(data) {
  return {
    type: '@dashboard/UPDATE_POST_REQUEST',
    payload: { data },
  };
}

export function updatePostSuccess(data) {
  return {
    type: '@dashboard/UPDATE_POST_SUCCESS',
    payload: { data },
  };
}
