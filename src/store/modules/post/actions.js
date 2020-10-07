export function uploadPostRequest(data) {
  return {
    type: '@post/UPLOAD_POST_REQUEST',
    payload: { data },
  };
}

export function uploadPostSuccess(post) {
  return {
    type: '@post/UPLOAD_POST_SUCCESS',
    payload: { post },
  };
}

export function uploadPostFailure() {
  return {
    type: '@post/UPLOAD_POST_FAILURE',
  };
}
