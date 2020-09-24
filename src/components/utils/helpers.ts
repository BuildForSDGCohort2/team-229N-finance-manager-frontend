import { DataArray } from '../../redux/interface';

export const numberWithCommas = (x: number | undefined) => {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getTotal = (ar: number[]): number => {
  return ar.reduce((a: number, b: number) => a + b, 0);
};

export const removeSeparators = (n: any) => {
  return n.replace(/([.,])(\d\d\d\D|\d\d\d$)/g, '$2');
};

export const arrayDiffTotal = (num: DataArray[]) => {
  let ttdr = 0;
  let ttcr = 0;
  let total = 0;
  num.forEach((c) => {
    c.type === 'dr' ? (ttdr += c.amount) : (ttcr += c.amount);
  });
  total = ttdr - ttcr;
  return total;
};

export const getTotalDebit = (num: DataArray[]) => {
  let total = 0;
  num.forEach((c) => {
    c.type === 'dr' && (total += c.amount);
  });

  return total;
};
export const getTotalCredit = (num: DataArray[]) => {
  let total = 0;
  num.forEach((c) => {
    c.type === 'cr' && (total += c.amount);
  });

  return total;
};
