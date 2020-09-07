import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { RouteState } from './reducers/routes';

export default interface State {
  routes: RouteState;
}

export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;
