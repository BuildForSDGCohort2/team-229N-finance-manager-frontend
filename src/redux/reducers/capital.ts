import { Reducer, Action } from 'redux';
import { actionTypes } from '../actions';
import { DataArray } from '../interface';

export interface capitalState {
  capital: DataArray[];
  //   set: boolean;
}
interface ReducerAction extends Action {
  type: actionTypes;
  payload: any;
}

const init: capitalState = {
  capital: [],
  //   set: false,
};

const capitalReducer: Reducer<capitalState, ReducerAction> = (
  state = init,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.GET_CAPITAL:
      return {
        ...state,
        capital: payload.data,
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

export default capitalReducer;
