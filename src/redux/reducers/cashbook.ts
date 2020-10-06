import { Reducer, Action } from 'redux';
import { actionTypes } from '../actions';
import { CashBookDataArray } from '../interface';

export interface cashbookState {
  cashbook: CashBookDataArray[];
}
interface ReducerAction extends Action {
  type: actionTypes;
  payload: any;
}

const init: cashbookState = {
  cashbook: [],
};

const cashbookReducer: Reducer<cashbookState, ReducerAction> = (
  state = init,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.GET_CASH_BOOK:
      return {
        ...state,
        cashbook: payload.data,
        // set: true,
      };
    default:
      return state;
  }
};

export default cashbookReducer;
