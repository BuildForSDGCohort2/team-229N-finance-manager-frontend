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
