import React, { FC, useEffect, useState } from 'react';
import M from 'materialize-css';
import axios from 'axios';
import { useTypedSelector } from '../../../redux/stateTypes';
import { arrayDiffTotal, numberWithCommas } from '../../utils/helpers';
import { SERVER_URL } from '../../utils/constants';
import { CompanyProps } from '../interface';
import { axiosResponse } from '../../welcome/interface';
import { useAccountBalance, useCustomDispatch } from '../../utils/hooks';
interface Props {
  id: string;
}
type Name = 'land' | 'machine' | 'vehicle' | '';
type Account = 'cash' | 'bank' | '';
const SellAsset: FC<Props> = ({ id }) => {
  const { token } = useTypedSelector((state) => state.auth);
  axios.defaults.headers.common['Authorization'] = token;

  const [name, setName] = useState<Name>('');
  const [amount, setAmount] = useState<number>();
  const [account, setAccount] = useState<Account>('cash');
  const [loading, setLoading] = useState(false);
  const { landBal, vehicleBal, machineBal } = useAccountBalance();

  const {
    getBank,
    getCapital,
    getCash,
    getJournal,
    goTo,
    getLand,
    getMachine,
    getVehicle,
    getCashBook,
    getExpenses,
    getSales,
    getStock,
  } = useCustomDispatch();

  const changeAccount = (e: {
    target: { value: string | ((prevState: Account) => Account) };
  }) => {
    const val = e.target.value as Account;
    setAccount(val);
  };
  const changeName = (e: {
    target: { value: string | ((prevState: Name) => Name) };
  }) => {
    const val = e.target.value as Name;
    setName(val);
  };
  const send = async () => {
    if (!amount || !name) {
      M.toast({
        html: 'Asset name and amout are required',
        classes: 'rounded red',
      });
      return;
    }
    if (name === 'land') {
      if (landBal === 0) {
        M.toast({
          html: 'Land already sold',
          classes: 'rounded red',
        });
        return;
      }
    }
    if (name === 'machine') {
      if (machineBal === 0) {
        M.toast({
          html: 'Machine already sold',
          classes: 'rounded red',
        });
        return;
      }
    }
    if (name === 'vehicle') {
      if (vehicleBal === 0) {
        M.toast({
          html: 'Vehicle already sold',
          classes: 'rounded red',
        });
        return;
      }
    }
    setLoading(true);
    try {
      // return;
      const res = await axios.post(`${SERVER_URL}/transaction/sellasset`, {
        amount,
        name,
        account,
        id,
      });
      const { success, error } = res.data as axiosResponse;
      setLoading(false);
      if (!success) {
        M.toast({ html: error, classes: 'rounded red' });
        // setInvalid(true);
      } else {
        M.toast({ html: 'Success', classes: 'rounded green' });
        setAmount(undefined);
        setName('');
        await getBank(res.data.data.bank);
        await getCapital(res.data.data.capital);
        await getCash(res.data.data.cash);
        await getJournal(res.data.data.journal);
        await getLand(res.data.data.land);
        await getMachine(res.data.data.machine);
        await getVehicle(res.data.data.vehicle);
        await getStock(res.data.data.stock);
        await getCashBook(res.data.data.cashbook);
        await getSales(res.data.data.sales);
        await getExpenses(res.data.data.expenses);

        await goTo('ledger');
        // }
      }
    } catch (error) {
      setLoading(false);
      M.toast({ html: 'Error try again', classes: 'rounded red' });
    }
  };
  return (
    <div className="card-panel">
      <div className="row">
        <div className="input-field col s12">
          <select onChange={changeName}>
            <option
              className="black-text"
              selected
              disabled
              defaultValue={name}>
              Select asset to sell
            </option>
            <option className="black-text" value="land">
              Land
            </option>
            <option className="black-text" value="vehicle">
              Vehicle
            </option>
            <option className="black-text" value="machine">
              Machine
            </option>
          </select>
          <label>
            <b>Select asset to sell</b>
          </label>
        </div>

        <div className="input-field col s12">
          <select onChange={changeAccount}>
            <option className="black-text" selected disabled defaultValue="">
              Select account
            </option>
            <option className="black-text" value="cash">
              Cash
            </option>
            <option className="black-text" value="bank">
              Bank
            </option>
          </select>
          <label>
            <b>Sell asset using:</b>
          </label>
        </div>
        {name && (
          <ul className="collection">
            {name === 'machine' && (
              <li className="collection-item black-text">
                Current machine value: $ <b>{numberWithCommas(machineBal)}</b>
              </li>
            )}
            {name === 'land' && (
              <li className="collection-item black-text">
                Current land value: $ <b>{numberWithCommas(landBal)}</b>
              </li>
            )}
            {name === 'vehicle' && (
              <li className="collection-item black-text">
                Current vehicle value: $ <b>{numberWithCommas(vehicleBal)}</b>
              </li>
            )}
          </ul>
        )}

        <div className="input-field col s12">
          <i className="material-icons prefix teal-text">attach_money</i>
          <input
            id="amount"
            defaultValue={amount}
            onChange={(e) => {
              const input = (e.target as HTMLInputElement).value as unknown;
              let val = input as number;
              setAmount(val);
            }}
            type="number"
            className="validate black-text"
          />
          <label htmlFor="amount">Amount</label>
        </div>
        <div className="clearfix"></div>
        {!loading ? (
          <a
            className="btn-flat waves-effect waves-teal right shadow"
            onClick={send}>
            <b>send</b>
            <i className="material-icons right">send</i>
          </a>
        ) : (
          <a className="btn-flat waves-effect waves-teal shadow  right">
            <b>please wait</b>
          </a>
        )}
      </div>
    </div>
  );
};
const BuyAsset: FC<Props> = ({ id }) => {
  const { token } = useTypedSelector((state) => state.auth);
  axios.defaults.headers.common['Authorization'] = token;
  const { cash } = useTypedSelector((state) => state.cash);
  const { bank } = useTypedSelector((state) => state.bank);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState<number>();
  const [account, setAccount] = useState<Account>('');
  const [loading, setLoading] = useState(false);
  const cashBal = arrayDiffTotal(cash);
  const bankBal = arrayDiffTotal(bank);
  const {
    getBank,
    getCapital,
    getCash,
    getJournal,
    goTo,
    getLand,
    getMachine,
    getVehicle,
    getCashBook,
    getExpenses,
    getSales,
    getStock,
  } = useCustomDispatch();

  const change = (e: {
    target: { value: string | ((prevState: Account) => Account) };
  }) => {
    const val = e.target.value as Account;
    setAccount(val);
  };
  const send = async () => {
    if (!amount || !name) {
      M.toast({
        html: 'Asset name and amout are required',
        classes: 'rounded red',
      });
      return;
    }
    // console.log('asset name', name);
    // return;
    // const nm: number = amount;
    // console.log(amount instanceof number);
    // console.log('is number', isFinite(amount));
    // if (!isFinite(amount)) {
    //   M.toast({
    //     html: 'Invalid amount format, remove commas',
    //     classes: 'rounded red',
    //   });
    //   return;
    // }
    if (account === 'cash') {
      if (amount > cashBal) {
        M.toast({
          html: 'Insuficient cash balance',
          classes: 'rounded red',
        });
        M.toast({
          html: `Your cash balance is $ ${numberWithCommas(cashBal)}`,
          classes: 'rounded red',
        });
        return;
      }
    }
    if (account === 'bank') {
      if (amount > bankBal) {
        M.toast({
          html: 'Insuficient bank balance',
          classes: 'rounded red',
        });
        M.toast({
          html: `Your bank balance is $ ${numberWithCommas(bankBal)}`,
          classes: 'rounded red',
        });
        return;
      }
    }
    setLoading(true);
    try {
      // return;
      const res = await axios.post(`${SERVER_URL}/transaction/buyasset`, {
        amount,
        name,
        account,
        id,
      });
      const { success, error } = res.data as axiosResponse;
      setLoading(false);
      if (!success) {
        M.toast({ html: error, classes: 'rounded red' });
        // setInvalid(true);
      } else {
        M.toast({ html: 'Success', classes: 'rounded green' });
        setAmount(undefined);
        setName('');
        await getBank(res.data.data.bank);
        await getCapital(res.data.data.capital);
        await getCash(res.data.data.cash);
        await getJournal(res.data.data.journal);
        await getLand(res.data.data.land);
        await getMachine(res.data.data.machine);
        await getVehicle(res.data.data.vehicle);
        await getStock(res.data.data.stock);
        await getCashBook(res.data.data.cashbook);
        await getSales(res.data.data.sales);
        await getExpenses(res.data.data.expenses);

        await goTo('ledger');
        // }
      }
    } catch (error) {
      setLoading(false);
      M.toast({ html: 'Error try again', classes: 'rounded red' });
    }
  };
  return (
    <div className="card-panel">
      <div className="row">
        <div className="input-field col s12">
          <select onChange={(e) => setName(e.target.value)}>
            <option className="black-text" selected disabled defaultValue="">
              Select asset to buy
            </option>
            <option className="black-text" value="land">
              Land
            </option>
            <option className="black-text" value="vehicle">
              Vehicle
            </option>
            <option className="black-text" value="machine">
              Machine
            </option>
          </select>
          <label>
            <b>Select asset to buy</b>
          </label>
        </div>

        <div className="input-field col s12">
          <select onChange={change}>
            <option
              className="black-text"
              selected
              disabled
              defaultValue={account}>
              Select account
            </option>
            <option className="black-text" value="cash">
              Cash
            </option>
            <option className="black-text" value="bank">
              Bank
            </option>
          </select>
          <label>
            <b>Buy asset using:</b>
          </label>
        </div>
        {account && (
          <ul className="collection">
            {account === 'cash' && (
              <li className="collection-item black-text">
                Cash balance: $ <b>{numberWithCommas(cashBal)}</b>
              </li>
            )}
            {account === 'bank' && (
              <li className="collection-item black-text">
                Bank balance: $ <b>{numberWithCommas(bankBal)}</b>
              </li>
            )}
          </ul>
        )}

        <div className="input-field col s12">
          <i className="material-icons prefix teal-text">attach_money</i>
          <input
            id="amount"
            defaultValue={amount}
            onChange={(e) => {
              const input = (e.target as HTMLInputElement).value as unknown;
              let val = input as number;
              setAmount(val);
            }}
            type="number"
            className="validate black-text"
          />
          <label htmlFor="amount">Amount</label>
        </div>
        <div className="clearfix"></div>
        {!loading ? (
          <a
            className="btn-flat waves-effect waves-teal right shadow"
            onClick={send}>
            <b>send</b>
            <i className="material-icons right">send</i>
          </a>
        ) : (
          <a className="btn-flat waves-effect waves-teal shadow  right">
            <b>please wait</b>
          </a>
        )}
      </div>
    </div>
  );
};

const Asset: FC<{ props: CompanyProps }> = ({ props }) => {
  const { _id } = props;
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <>
      <h5 className="center black-text">Asset management</h5>
      <ul id="tabs-swipe-demo" className="tabs">
        <li className="tab col s6">
          <a className="active" href="#buyAsset">
            <b>Buy asset</b>
          </a>
        </li>
        <li className="tab col s6">
          <a href="#sellAsset">
            <b>Sell asset</b>
          </a>
        </li>
      </ul>
      <div className="row">
        <div id="buyAsset" className="col s12">
          <BuyAsset id={_id} />
        </div>
        <div id="sellAsset" className="col s12">
          <SellAsset id={_id} />
        </div>
      </div>
    </>
  );
};

export default Asset;
