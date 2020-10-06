import { Reducer, Action } from 'redux';
import { actionTypes } from '../actions';
import { DataArray } from '../interface';

export interface machineState {
  machine: DataArray[];
}
interface ReducerAction extends Action {
  type: actionTypes;
  payload: any;
}

const init: machineState = {
  machine: [],
};

const machineReducer: Reducer<machineState, ReducerAction> = (
  state = init,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.GET_MACHINE:
      return {
        ...state,
        machine: payload.data,
        // set: true,
      };

    default:
      return state;
  }
};

export default machineReducer;
