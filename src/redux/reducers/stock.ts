import { Reducer, Action } from 'redux';
import { actionTypes } from '../actions';
import { StockArray } from '../interface';

export interface stockState {
  stock: StockArray[];
}
interface ReducerAction extends Action {
  type: actionTypes;
  payload: any;
}

const init: stockState = {
  stock: [],
};

const stockReducer: Reducer<stockState, ReducerAction> = (
  state = init,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.GET_STOCK:
      return {
        ...state,
        stock: payload.data,
        // set: true,
      };

    default:
      return state;
  }
};

export default stockReducer;
