import { Reducer, Action } from 'redux';
import { actionTypes } from '../actions';
import { DataArray } from '../interface';

export interface cashState {
  cash: DataArray[];
  //   set: boolean;
}
interface ReducerAction extends Action {
  type: actionTypes;
  payload: any;
}

const init: cashState = {
  cash: [],
  //   set: false,
};

const cashReducer: Reducer<cashState, ReducerAction> = (
  state = init,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.GET_CASH:
      return {
        ...state,
        cash: payload.data,
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

export default cashReducer;
