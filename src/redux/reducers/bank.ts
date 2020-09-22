import { Reducer, Action } from 'redux';
import { actionTypes } from '../actions';
import { DataArray } from '../interface';

export interface bankState {
  bank: DataArray[];
  //   set: boolean;
}
interface ReducerAction extends Action {
  type: actionTypes;
  payload: any;
}

const init: bankState = {
  bank: [],
  //   set: false,
};

const bankReducer: Reducer<bankState, ReducerAction> = (
  state = init,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.GET_BANK:
      return {
        ...state,
        bank: payload.data,
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

export default bankReducer;
