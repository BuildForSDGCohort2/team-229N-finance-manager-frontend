import React, { FC } from 'react';
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
import Asset from './transactions/Asset';

const Main: FC<{ props: any }> = ({ props }) => {
  const { route } = useTypedSelector((state) => state.routes);

  switch (route) {
    case 'asset':
      return <Asset />;
    case 'dasboard':
      return <Dashboard />;
    case 'about':
      return <About props={props} />;
    case 'cash':
      return <Cash props={props} />;
    case 'bank':
      return <Bank props={props} />;
    case 'capital':
      return <Capital props={props} />;
    case 'fixedAssets':
      return <FixedAssets props={props} />;
    case 'cashBook':
      return <Cashbook props={props} />;
    case 'trialBalance':
      return <Trialbalance props={props} />;
    case 'ledger':
      return <Ledger props={props} />;
    case 'journal':
      return <Journal props={props} />;
    case 'incomeStatement':
      return <IncomeStatement props={props} />;
    case 'balanceSheet':
      return <BalanceSheet props={props} />;
    default:
      return <Dashboard />;
  }
};

export default Main;
