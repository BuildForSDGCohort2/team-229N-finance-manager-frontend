import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { RouteState } from './reducers/routes';
import { AuthState } from './reducers/auth';
import { CompanyState } from './reducers/companyReducer';
import { store } from './store';

export default interface State {
  routes: RouteState;
  auth: AuthState;
  companies: CompanyState;
}

export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;
export const useThunkDispatch = () => useDispatch<typeof store.dispatch>();
