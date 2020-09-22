import { Reducer, Action } from 'redux';
import { actionTypes } from '../actions';
import { DataArray } from '../interface';

export interface JournalState {
  transactions: DataArray[];
  // set: boolean;
}
interface ReducerAction extends Action {
  type: actionTypes;
  payload: any;
}

const init: JournalState = {
  transactions: [],
  // set: false,
};

const transactionReducer: Reducer<JournalState, ReducerAction> = (
  state = init,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.GET_JOURNAL:
      return {
        ...state,
        transactions: payload.data,
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

export default transactionReducer;
