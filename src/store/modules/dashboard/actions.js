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
