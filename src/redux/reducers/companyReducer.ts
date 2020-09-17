import { Reducer, Action } from 'redux';
import { actionTypes } from '../actions';
import { CompanyInterface, User } from '../interface';

export interface CompanyState {
  companies: CompanyInterface[];
  available: boolean;
}
interface ReducerAction extends Action {
  type: actionTypes;
  payload: any;
}

const init: CompanyState = {
  available: false,
  companies: [],
};

const companyReducer: Reducer<CompanyState, ReducerAction> = (
  state = init,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.GET_COMPANIES:
      return {
        ...state,
        companies: payload.data,
        available: true,
      };
    case actionTypes.CREATE_COMPANY:
      return {
        ...state,
        companies: state.companies.concat(payload.data),
      };
    default:
      return state;
  }
};

export default companyReducer;
