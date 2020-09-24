import React, { useEffect, useState } from 'react';
import M from 'materialize-css';
import { useTypedSelector } from '../../../redux/stateTypes';
import {
  arrayDiffTotal,
  getTotal,
  numberWithCommas,
} from '../../utils/helpers';

const SellAsset = () => {
  const { cash } = useTypedSelector((state) => state.cash);
  const { bank } = useTypedSelector((state) => state.bank);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState<number>();
  const [account, setAccount] = useState<Account>('cash');
  const [loading] = useState(false);
  const cashBal = arrayDiffTotal(cash);
  const bankBal = arrayDiffTotal(bank);
  //   console.log('total cash', cashBal);
  //   console.log('total bank', bankBal);
  const change = (e: {
    target: { value: string | ((prevState: Account) => Account) };
  }) => {
    const val = e.target.value as Account;
    setAccount(val);
  };
  const send = () => {
    if (!amount || !name) {
      M.toast({
        html: 'Asset name and amout are required',
        classes: 'rounded red',
      });
      return;
    }
    // console.log(typeof amount);
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
      }
      return;
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
      }
      return;
    }
    // console.log('cash balance', totalCash - amount);
  };
  return (
    <div className="card-panel">
      <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix teal-text">queue_play_next</i>
          <input
            id="sname"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="validate black-text"
          />
          <label htmlFor="sname">Asset name</label>
        </div>
        <div className="input-field col s12">
          <select onChange={change}>
            <option className="black-text" disabled defaultValue="">
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
        <ul className="collection">
          <li className="collection-item black-text">
            Cash balance: $ <b>{numberWithCommas(cashBal)}</b>
          </li>
          <li className="collection-item black-text">
            Bank balance: $ <b>{numberWithCommas(bankBal)}</b>
          </li>
        </ul>
        <div className="input-field col s12">
          <i className="material-icons prefix teal-text">attach_money</i>
          <input
            id="amount"
            value={amount}
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
            {/* <i className="material-icons right">send</i> */}
          </a>
        )}
      </div>
    </div>
  );
};
const BuyAsset = () => {
  const { cash } = useTypedSelector((state) => state.cash);
  const { bank } = useTypedSelector((state) => state.bank);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState<number>();
  const [account, setAccount] = useState<Account>('cash');
  const [loading] = useState(false);
  const cashBal = arrayDiffTotal(cash);
  const bankBal = arrayDiffTotal(bank);
  //   console.log('total cash', totalCash);
  //   console.log('total bank', totalBank);
  const change = (e: {
    target: { value: string | ((prevState: Account) => Account) };
  }) => {
    const val = e.target.value as Account;
    setAccount(val);
  };
  const send = () => {
    if (!amount || !name) {
      M.toast({
        html: 'Asset name and amout are required',
        classes: 'rounded red',
      });
      return;
    }
    // const nm: number = amount;
    // console.log(isNaN(amount));
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
      }
      return;
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
      }
      return;
    }
  };
  return (
    <div className="card-panel">
      <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix teal-text">queue_play_next</i>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="validate black-text"
          />
          <label htmlFor="name">Asset name</label>
        </div>
        <div className="input-field col s12">
          <select onChange={change}>
            <option className="black-text" disabled defaultValue="">
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
        <ul className="collection">
          <li className="collection-item black-text">
            Cash balance: $ <b>{numberWithCommas(cashBal)}</b>
          </li>
          <li className="collection-item black-text">
            Bank balance: $ <b>{numberWithCommas(bankBal)}</b>
          </li>
        </ul>
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
            {/* <i className="material-icons right">send</i> */}
          </a>
        )}
      </div>
    </div>
  );
};
type Account = 'cash' | 'bank';
const Asset = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <>
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
          <BuyAsset />
        </div>
        <div id="sellAsset" className="col s12">
          <SellAsset />
        </div>
      </div>
    </>
  );
};

export default Asset;
