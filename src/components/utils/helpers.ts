import { DataArray } from '../../redux/interface';
import { useCustomDispatch } from './hooks';

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

export const printContent = (el: string) => {
  const restorepage = document.body.innerHTML;
  const printcontent = document.getElementById(el)!.innerHTML;
  document.body.innerHTML = printcontent;
  window.print();
  document.body.innerHTML = restorepage;
};
interface Data {
  bank: unknown;
  capital: unknown;
  cash: unknown;
  journal: unknown;
  land: unknown;
  machine: unknown;
  vehicle: unknown;
}
export const useFreshAccountData = async (data: Data) => {
  const {
    getBank,
    getCapital,
    getCash,
    getJournal,
    getLand,
    getMachine,
    getVehicle,
  } = useCustomDispatch();
  await getBank(data.bank);
  await getCapital(data.capital);
  await getCash(data.cash);
  await getJournal(data.journal);
  await getLand(data.land);
  await getMachine(data.machine);
  await getVehicle(data.vehicle);
};
export const arrayCrDiffTotal = (num: DataArray[]) => {
  let ttdr = 0;
  let ttcr = 0;
  let total = 0;
  num.forEach((c) => {
    c.type === 'dr' ? (ttdr += c.amount) : (ttcr += c.amount);
  });
  total = ttcr - ttdr;
  return total;
};

export const jsUcfirst = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
