import { Reducer, Action } from 'redux';
import { actionTypes } from '../actions';
import { routeTypes } from '../interface';

export interface RouteState {
  route: routeTypes;
}
const init: RouteState = {
  route: 'dasboard',
};
const routeReducer = (
  state = init,
  { type, payload }: { type: actionTypes; payload: RouteState }
) => {
  switch (type) {
    case actionTypes.CHANGE_ROUTE:
      return {
        ...state,
        route: payload.route,
      };

    default:
      return state;
  }
};

export default routeReducer;
