import React, { FC, useState } from 'react';
import { routeTypes } from '../../redux/interface';
import Dashboard from './routes/Dashboard';
import About from './routes/About';
import Cash from './routes/Cash';
import Bank from './routes/Bank';
import Capital from './routes/Capital';
import FixedAssets from './routes/FixedAssets';
import Cashbook from './routes/Cashbook';
import Trialbalance from './routes/Trialbalance';
import Ledger from './routes/Ledger';
import Journal from './routes/Journal';
import IncomeStatement from './routes/IncomeStatement';
import BalanceSheet from './routes/BalanceSheet';
import { useTypedSelector } from '../../redux/stateTypes';
const Main: FC = () => {
  // const [route, setRoute] = useState<routeTypes>('cash');
  const { route } = useTypedSelector((state) => state.routes);
  switch (route) {
    case 'dasboard':
      return <Dashboard />;
    case 'about':
      return <About />;
    case 'cash':
      return <Cash />;
    case 'bank':
      return <Bank />;
    case 'capital':
      return <Capital />;
    case 'fixedAssets':
      return <FixedAssets />;
    case 'cashBook':
      return <Cashbook />;
    case 'trialBalance':
      return <Trialbalance />;
    case 'ledger':
      return <Ledger />;
    case 'journal':
      return <Journal />;
    case 'incomeStatement':
      return <IncomeStatement />;
    case 'balanceSheet':
      return <BalanceSheet />;
    default:
      return <Dashboard />;
  }
};

export default Main;
