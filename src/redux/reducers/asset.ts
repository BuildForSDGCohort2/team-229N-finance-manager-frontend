import { Reducer, Action } from 'redux';
import { actionTypes } from '../actions';
import { DataArray } from '../interface';

export interface assetState {
  asset: DataArray[];
}
interface ReducerAction extends Action {
  type: actionTypes;
  payload: any;
}

const init: assetState = {
  asset: [],
};

const assetReducer: Reducer<assetState, ReducerAction> = (
  state = init,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.GET_ASSET:
      return {
        ...state,
        asset: payload.data,
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

export default assetReducer;
