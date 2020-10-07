// import produce from 'immer';

// const INITIAL_STATE = {
//   post: null,
// };

// export default function user(state = INITIAL_STATE, action) {
//   return produce(state, (draft) => {
//     switch (action.type) {
//       case '@auth/UPLOAD_POST_SUCCESS': {
//         draft.post = action.payload.post;
//         break;
//       }
//       case '@user/UPDATE_PROFILE_SUCCESS': {
//         draft.profile = action.payload.profile;
//         break;
//       }
//       case '@user/UPDATE_PROFILE_FAILURE': {
//         break;
//       }
//       case '@auth/SIGN_OUT': {
//         draft.profile = null;
//         break;
//       }
//       default:
//     }
//   });
// }
