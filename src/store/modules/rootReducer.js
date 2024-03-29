import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import dashboard from './dashboard/reducer';

export default combineReducers({
  auth,
  user,
  dashboard,
});
