import Journal from '../components/company/routes/Journal';

export type routeTypes =
  | 'dasboard'
  | 'about'
  | 'cash'
  | 'bank'
  | 'capital'
  | 'fixedAssets'
  | 'cashBook'
  | 'trialBalance'
  | 'ledger'
  | 'journal'
  | 'incomeStatement'
  | 'balanceSheet';

export interface CompanyInterface {
  _id: string;
  name: string;
  email: string;
  desc: string;
  bank: string;
  fb: string;
  location: string;
  phone: string;
  twt: string;
  yt: string;
  user: User;
  pd: Date;
}

export interface User {
  email: string;
  lastLogin: Date;
  name: string;
}

export interface DataArray {
  _id?: string;
  amount: number;
  pd: Date;
  code?: string;
  id?: string;
  type?: 'dr' | 'cr';
  details: string;
}

// export interface JournalInterface {
//   _id: string;
//   data: DataArray;
// }
