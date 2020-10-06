import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { RouteState } from './reducers/routes';
import { AuthState } from './reducers/auth';
import { CompanyState } from './reducers/companyReducer';
import { store } from './store';
import { JournalState } from './reducers/journal';
import { cashState } from './reducers/cash';
import { bankState } from './reducers/bank';
import { capitalState } from './reducers/capital';
import { landState } from './reducers/land';
import { salesState } from './reducers/sales';
import { expenseState } from './reducers/expenses';
import { stockState } from './reducers/stock';
import { cashbookState } from './reducers/cashbook';
import { machineState } from './reducers/machine';
import { vehicleState } from './reducers/vehicle';

export default interface State {
  routes: RouteState;
  auth: AuthState;
  companies: CompanyState;
  journal: JournalState;
  cash: cashState;
  bank: bankState;
  capital: capitalState;
  land: landState;
  sales: salesState;
  expenses: expenseState;
  stock: stockState;
  cashbook: cashbookState;
  machine: machineState;
  vehicle: vehicleState;
}

export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;
export const useThunkDispatch = () => useDispatch<typeof store.dispatch>();
