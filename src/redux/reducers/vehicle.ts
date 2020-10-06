import { Reducer, Action } from 'redux';
import { actionTypes } from '../actions';
import { DataArray } from '../interface';

export interface vehicleState {
  vehicle: DataArray[];
}
interface ReducerAction extends Action {
  type: actionTypes;
  payload: any;
}

const init: vehicleState = {
  vehicle: [],
};

const vehicleReducer: Reducer<vehicleState, ReducerAction> = (
  state = init,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.GET_VEHICLE:
      return {
        ...state,
        vehicle: payload.data,
        // set: true,
      };

    default:
      return state;
  }
};

export default vehicleReducer;
