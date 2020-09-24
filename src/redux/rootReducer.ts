import { combineReducers } from 'redux';
import localforage from 'localforage';
import routeReducer from './reducers/routes';
import { actionTypes } from './actions';
import authReducer from './reducers/auth';
import companyReducer from './reducers/companyReducer';
import transactionReducer from './reducers/journal';
import cashReducer from './reducers/cash';
import bankReducer from './reducers/bank';
import capitalReducer from './reducers/capital';
import assetReducer from './reducers/asset';
import salesReducer from './reducers/sales';
import expenseReducer from './reducers/expenses';
import purchaseReducer from './reducers/purchase.';
import cashbookReducer from './reducers/cashbook';

const appReducer = combineReducers({
  routes: routeReducer,
  auth: authReducer,
  companies: companyReducer,
  journal: transactionReducer,
  cash: cashReducer,
  bank: bankReducer,
  capital: capitalReducer,
  asset: assetReducer,
  sales: salesReducer,
  expenses: expenseReducer,
  purchase: purchaseReducer,
  cashbook: cashbookReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === actionTypes.USER_LOGOUT) {
    state = undefined;
    localforage.clear();
  }

  return appReducer(state, action);
};

export default rootReducer;
