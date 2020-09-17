import { combineReducers } from 'redux';
import localforage from 'localforage';
import routeReducer from './reducers/routes';
import { actionTypes } from './actions';
import authReducer from './reducers/auth';
import companyReducer from './reducers/companyReducer';

const appReducer = combineReducers({
  routes: routeReducer,
  auth: authReducer,
  companies: companyReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === actionTypes.USER_LOGOUT) {
    state = undefined;
    localforage.clear();
  }

  return appReducer(state, action);
};

export default rootReducer;
