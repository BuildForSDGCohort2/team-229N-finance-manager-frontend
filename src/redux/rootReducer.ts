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
import landReducer from './reducers/land';
import salesReducer from './reducers/sales';
import expenseReducer from './reducers/expenses';
import stockReducer from './reducers/stock';
import cashbookReducer from './reducers/cashbook';
import machineReducer from './reducers/machine';
import vehicleReducer from './reducers/vehicle';

const appReducer = combineReducers({
  routes: routeReducer,
  auth: authReducer,
  companies: companyReducer,
  journal: transactionReducer,
  cash: cashReducer,
  bank: bankReducer,
  capital: capitalReducer,
  land: landReducer,
  sales: salesReducer,
  expenses: expenseReducer,
  stock: stockReducer,
  cashbook: cashbookReducer,
  machine: machineReducer,
  vehicle: vehicleReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === actionTypes.USER_LOGOUT) {
    state = undefined;
    localforage.clear();
  }

  return appReducer(state, action);
};

export default rootReducer;
