import { Reducer, Action } from 'redux';
import { actionTypes } from '../actions';
import { DataArray } from '../interface';

export interface landState {
  land: DataArray[];
}
interface ReducerAction extends Action {
  type: actionTypes;
  payload: any;
}

const init: landState = {
  land: [],
};

const landReducer: Reducer<landState, ReducerAction> = (
  state = init,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.GET_LAND:
      return {
        ...state,
        land: payload.data,
        // set: true,
      };
    // case actionTypes.CREATE_COMPANY:
    //   return {
    //     ...state,
    //     companies: state.companies.concat(payload.data),
    //   };
    default:
      return state;
  }
};

export default landReducer;
