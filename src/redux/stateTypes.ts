import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { RouteState } from './reducers/routes';
import { AuthState } from './reducers/auth';
import { CompanyState } from './reducers/companyReducer';
import { store } from './store';
import { JournalState } from './reducers/journal';
import { cashState } from './reducers/cash';
import { bankState } from './reducers/bank';
import { capitalState } from './reducers/capital';
import { assetState } from './reducers/asset';
import { salesState } from './reducers/sales';
import { expenseState } from './reducers/expenses';
import { purchaseState } from './reducers/purchase.';
import { cashbookState } from './reducers/cashbook';

export default interface State {
  routes: RouteState;
  auth: AuthState;
  companies: CompanyState;
  journal: JournalState;
  cash: cashState;
  bank: bankState;
  capital: capitalState;
  asset: assetState;
  sales: salesState;
  expenses: expenseState;
  purchase: purchaseState;
  cashbook: cashbookState;
}

export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;
export const useThunkDispatch = () => useDispatch<typeof store.dispatch>();
