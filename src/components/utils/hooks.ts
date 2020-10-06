import { useCallback } from 'react';
import { actionTypes } from '../../redux/actions';
import { routeTypes } from '../../redux/interface';
import { useThunkDispatch, useTypedSelector } from '../../redux/stateTypes';
import {
  arrayCrDiffTotal,
  arrayDiffTotal,
  getTotal,
  getTotalCredit,
  getTotalDebit,
} from './helpers';

export const useCustomDispatch = () => {
  const dispatch = useThunkDispatch();
  const getCapital = useCallback(
    async (data) => {
      dispatch({
        type: actionTypes.GET_CAPITAL,
        payload: {
          data,
        },
      });
    },
    [dispatch]
  );
  const getBank = useCallback(
    async (data) => {
      dispatch({
        type: actionTypes.GET_BANK,
        payload: {
          data,
        },
      });
    },
    [dispatch]
  );
  const getCash = useCallback(
    async (data) => {
      dispatch({
        type: actionTypes.GET_CASH,
        payload: {
          data,
        },
      });
    },
    [dispatch]
  );
  const getJournal = useCallback(
    async (data) => {
      dispatch({
        type: actionTypes.GET_JOURNAL,
        payload: {
          data,
        },
      });
    },
    [dispatch]
  );
  const getLand = useCallback(
    async (data) => {
      dispatch({
        type: actionTypes.GET_LAND,
        payload: {
          data,
        },
      });
    },
    [dispatch]
  );
  const getMachine = useCallback(
    async (data) => {
      dispatch({
        type: actionTypes.GET_MACHINE,
        payload: {
          data,
        },
      });
    },
    [dispatch]
  );
  const getVehicle = useCallback(
    async (data) => {
      dispatch({
        type: actionTypes.GET_VEHICLE,
        payload: {
          data,
        },
      });
    },
    [dispatch]
  );
  const getStock = useCallback(
    async (data) => {
      dispatch({
        type: actionTypes.GET_STOCK,
        payload: {
          data,
        },
      });
    },
    [dispatch]
  );
  const goTo = useCallback(
    async (to: routeTypes) => {
      dispatch({
        type: actionTypes.CHANGE_ROUTE,
        payload: {
          route: to,
        },
      });
    },
    [dispatch]
  );
  const getCashBook = useCallback(
    async (data) => {
      dispatch({
        type: actionTypes.GET_CASH_BOOK,
        payload: {
          data,
        },
      });
    },
    [dispatch]
  );
  const getSales = useCallback(
    async (data) => {
      dispatch({
        type: actionTypes.GET_SALES,
        payload: {
          data,
        },
      });
    },
    [dispatch]
  );
  const getExpenses = useCallback(
    async (data) => {
      dispatch({
        type: actionTypes.GET_EXPENSES,
        payload: {
          data,
        },
      });
    },
    [dispatch]
  );
  return {
    getLand,
    getVehicle,
    getMachine,
    getJournal,
    getCash,
    getBank,
    getCapital,
    goTo,
    getStock,
    getCashBook,
    getSales,
    getExpenses,
  };
};

export const useAccountBalance = () => {
  const { capital } = useTypedSelector((state) => state.capital);
  const { land } = useTypedSelector((state) => state.land);
  const { vehicle } = useTypedSelector((state) => state.vehicle);
  const { machine } = useTypedSelector((state) => state.machine);
  const { cash } = useTypedSelector((state) => state.cash);
  const { bank } = useTypedSelector((state) => state.bank);
  const { stock } = useTypedSelector((state) => state.stock);
  const { expenses } = useTypedSelector((state) => state.expenses);
  const { sales } = useTypedSelector((state) => state.sales);
  const expenseBal = arrayDiffTotal(expenses);
  const cashBal = arrayDiffTotal(cash);
  const bankBal = arrayDiffTotal(bank);
  const landBal = arrayDiffTotal(land);
  const salesBal = arrayCrDiffTotal(sales);
  const vehicleBal = arrayDiffTotal(vehicle);
  const machineBal = arrayDiffTotal(machine);
  const cashDebitTotal = getTotalDebit(cash);
  const cashCreditTotal = getTotalCredit(cash);
  const bankDebitTotal = getTotalDebit(bank);
  const bankCreditTotal = getTotalCredit(bank);
  const landDebitTotal = getTotalDebit(land);
  const vehicleDebitTotal = getTotalDebit(vehicle);
  const machineDebitTotal = getTotalDebit(machine);
  const landCreditTotal = getTotalCredit(land);
  const vehicleCreditTotal = getTotalCredit(vehicle);
  const machineCreditTotal = getTotalCredit(machine);
  let stockValue = 0;
  let purchases = 0;
  let netPurchase = 0;
  const stockBal = (item: string): number => {
    let num = 0;
    stock
      .filter((s) => s.item === item)
      .map((t) => {
        num = t.qty - t.sqty;
      });
    return num;
  };
  stock.map((t) => {
    stockValue += t.price * (t.qty - t.sqty);
    purchases += t.price * t.qty;
    netPurchase += t.price * t.sqty;
  });
  const grossProfit = salesBal - netPurchase;
  const profit = grossProfit - expenseBal;
  const tt = capital.map((c) => c.amount);
  const totalCapital = getTotal(tt);
  let totalCredit = totalCapital + salesBal;
  const balSheetCreditTotal = totalCapital + profit;
  let totalDebit =
    cashBal +
    bankBal +
    landBal +
    machineBal +
    vehicleBal +
    purchases +
    expenseBal;
  const balSheetDebitTotal =
    cashBal + bankBal + landBal + machineBal + vehicleBal + stockValue;
  const fixedAssetAvailable = () => landBal + machineBal + vehicleBal > 0;

  return {
    cashBal,
    bankBal,
    landBal,
    vehicleBal,
    machineBal,
    totalCapital,
    totalCredit,
    totalDebit,
    cashDebitTotal,
    cashCreditTotal,
    bankDebitTotal,
    bankCreditTotal,
    landDebitTotal,
    vehicleDebitTotal,
    machineDebitTotal,
    landCreditTotal,
    vehicleCreditTotal,
    machineCreditTotal,
    fixedAssetAvailable,
    purchases,
    balSheetCreditTotal,
    balSheetDebitTotal,
    salesBal,
    stockValue,
    netPurchase,
    profit,
    expenseBal,
    grossProfit,
    stockBal,
  };
};

// export const useIncomeStatement = () => {
//   const { salesBal } = useAccountBalance();
//   const { stock } = useTypedSelector((state) => state.stock);
//   let netPurchase = 0;
//   stock.map((t) => ());

//   return {
//     salesBal,
//     netPurchase,
//     profit,
//   };
// };
