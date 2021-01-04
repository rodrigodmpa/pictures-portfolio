import produce from 'immer';

const INITIAL_STATE = {
  posts: [],
  pagination_info: null,
  popUpMoreInfoVisible: false,
  postsAreLoading: false,
};

export default function dashboard(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@dashboard/GET_POSTS_REQUEST': {
        draft.postsAreLoading = true;
        break;
      }
      case '@dashboard/GET_POSTS_SUCCESS': {
        draft.posts = [...draft.posts, ...action.payload.dashboard.posts];
        draft.pagination_info = action.payload.dashboard.pagination_info;
        draft.postsAreLoading = false;
        break;
      }
      case '@dashboard/POST_POST_SUCCESS': {
        break;
      }
      case '@dashboard/DELETE_POST_SUCCESS': {
        break;
      }
      case '@dashboard/UPDATE_POST_SUCCESS': {
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.posts = [];
        draft.pagination_info = null;
        draft.postsAreLoading = false;
        break;
      }
      case '@dashboard/CLEAN_POSTS_REQUEST': {
        draft.posts = [];
        draft.pagination_info = null;
        draft.postsAreLoading = false;
        break;
      }
      default:
    }
  });
}
