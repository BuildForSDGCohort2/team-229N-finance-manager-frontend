import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { RouteState } from './reducers/routes';
import { AuthState } from './reducers/auth';
import { CompanyState } from './reducers/companyReducer';
import { store } from './store';
import { JournalState } from './reducers/journal';
import { cashState } from './reducers/cash';
import { bankState } from './reducers/bank';
import { capitalState } from './reducers/capital';

export default interface State {
  routes: RouteState;
  auth: AuthState;
  companies: CompanyState;
  journal: JournalState;
  cash: cashState;
  bank: bankState;
  capital: capitalState;
}

export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;
export const useThunkDispatch = () => useDispatch<typeof store.dispatch>();
