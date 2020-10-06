export type routeTypes =
  | 'dasboard'
  | 'about'
  | 'cash'
  | 'bank'
  | 'capital'
  | 'manageStock'
  | 'cashBook'
  | 'trialBalance'
  | 'ledger'
  | 'journal'
  | 'incomeStatement'
  | 'balanceSheet'
  | 'asset'
  | 'stock'
  | 'sales'
  | 'pay'
  | 'expenses';

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
  pd?: Date;
  code?: string;
  id?: string;
  type?: 'dr' | 'cr';
  details: string;
  sold?: Boolean;
}
export interface CashBookDataArray {
  _id?: string;
  pd: Date;
  code?: string;
  id?: string;
  type?: 'dr' | 'cr';
  details: string;
  cash: number;
  bank: number;
}
export interface LedgerDataArray {
  _id?: string;
  // amount?: number;
  diff?: number;
  dr?: number;
  cr?: number;
  pd?: Date;
  code?: string;
  id?: string;
  type?: 'dr' | 'cr';
  details: string;
}

export interface StockArray {
  _id?: string;
  price: number;
  pd?: Date;
  code?: string;
  id?: string;
  qty: number;
  item: string;
  sPrice: number;
  sqty: number;
}
