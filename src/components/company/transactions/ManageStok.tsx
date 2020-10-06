import React, { FC, useEffect, useState } from 'react';
import M from 'materialize-css';
import axios from 'axios';
import { useTypedSelector } from '../../../redux/stateTypes';
import {
  arrayDiffTotal,
  jsUcfirst,
  numberWithCommas,
} from '../../utils/helpers';
import { SERVER_URL } from '../../utils/constants';
import { CompanyProps } from '../interface';
import { axiosResponse } from '../../welcome/interface';
import { useAccountBalance, useCustomDispatch } from '../../utils/hooks';
import includes from 'lodash/includes';
interface Props {
  id: string;
}
type Account = 'cash' | 'bank' | '';
const Sell: FC<Props> = ({ id }) => {
  const { token } = useTypedSelector((state) => state.auth);
  axios.defaults.headers.common['Authorization'] = token;
  const { cash } = useTypedSelector((state) => state.cash);
  const { bank } = useTypedSelector((state) => state.bank);
  const { stock } = useTypedSelector((state) => state.stock);
  const [item, setItem] = useState('');
  const [sPrice, setSprice] = useState<number>(0);
  const [qty, setQty] = useState<number>();
  const [account, setAccount] = useState<Account>('');
  const [loading, setLoading] = useState(false);
  const cashBal = arrayDiffTotal(cash);
  const bankBal = arrayDiffTotal(bank);
  const [selQty, setSelctedQty] = useState(0);
  const [unitPrice, setUnitPrice] = useState(0);
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
    if (!item || !sPrice || !qty) {
      M.toast({
        html: 'Item name, quantity are required',
        classes: 'rounded red',
      });
      return;
    }
    if (!account) {
      M.toast({
        html: 'Select account type cash or bank',
        classes: 'rounded red',
      });
      return;
    }
    if (qty > selQty) {
      M.toast({
        html: 'Insuficient quantity',
        classes: 'rounded red',
      });
      M.toast({
        html: `Only ${selQty} ${item} are available`,
        classes: 'rounded red',
      });
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(`${SERVER_URL}/transaction/sellstock`, {
        item,
        sPrice,
        qty,
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
        setSprice(0);
        setItem('');
        setQty(undefined);
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
        await goTo('sales');
        // }
      }
    } catch (error) {
      setLoading(false);
      M.toast({ html: 'Error try again', classes: 'rounded red' });
    }
  };

  //   console.log('My items', items);
  return (
    <div className="card-panel">
      <div className="row">
        <div className="input-field col s12">
          <select
            onChange={(e) => {
              const qtr = stock.filter((t) => t.item === e.target.value);
              setItem(e.target.value);
              const [qt] = qtr;
              const { qty, price, sPrice, sqty } = qt;

              setSelctedQty(qty - sqty);
              setUnitPrice(price);
              setSprice(sPrice);
            }}>
            <option
              className="black-text"
              selected
              disabled
              defaultValue={item}>
              Select item to sell
            </option>
            {stock.map(
              (t) =>
                t.qty > 0 && (
                  <option key={t._id} className="black-text" value={t.item}>
                    {t.item}
                  </option>
                )
            )}
          </select>
          <label>
            <b>Select item to sell</b>
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
        {item && (
          <ul className="collection">
            <li className="collection-item black-text">
              Quantity available: <b>{numberWithCommas(selQty)}</b>
            </li>
            <li className="collection-item black-text">
              Unit price: $ <b>{numberWithCommas(unitPrice)}</b>
            </li>
            <li className="collection-item black-text">
              Selling price: $ <b>{numberWithCommas(sPrice)}</b>
            </li>
          </ul>
        )}
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

        {item && (
          <div className="input-field col s12">
            <i className="material-icons prefix teal-text">control_point</i>
            <input
              id="qty"
              defaultValue={qty}
              onChange={(e) => {
                const input = (e.target as HTMLInputElement).value as unknown;
                let val = input as number;
                setQty(val);
              }}
              type="number"
              className="validate black-text"
            />
            <label htmlFor="qty">Quantity you are selling</label>
          </div>
        )}

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
const Purchase: FC<Props> = ({ id }) => {
  const { token } = useTypedSelector((state) => state.auth);
  axios.defaults.headers.common['Authorization'] = token;
  const { stockBal } = useAccountBalance();
  const { cash } = useTypedSelector((state) => state.cash);
  const { bank } = useTypedSelector((state) => state.bank);
  const { stock } = useTypedSelector((state) => state.stock);
  const [item, setItem] = useState('');
  const [price, setPrice] = useState<number>();
  const [sPrice, setSprice] = useState<number>();
  const [qty, setQty] = useState<number>();
  const [account, setAccount] = useState<Account>('');
  const [loading, setLoading] = useState(false);
  const cashBal = arrayDiffTotal(cash);
  const bankBal = arrayDiffTotal(bank);
  const [unitPrice, setUnitPrice] = useState(0);
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
  const items = stock.map((s) => s.item);
  const [available, setAvailable] = useState(false);
  const [availableTotal, setAvailableTotal] = useState(0);
  const change = (e: {
    target: { value: string | ((prevState: Account) => Account) };
  }) => {
    const val = e.target.value as Account;
    setAccount(val);
  };
  const send = async () => {
    if (!item || !price || !qty || !sPrice) {
      M.toast({
        html: 'Item name, unit price, quantity and selling are required',
        classes: 'rounded red',
      });
      return;
    }
    if (!account) {
      M.toast({
        html: 'Select account type cash or bank',
        classes: 'rounded red',
      });
      return;
    }

    if (account === 'cash') {
      if (price * qty > cashBal) {
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
      if (price * qty > bankBal) {
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
      const res = await axios.post(`${SERVER_URL}/transaction/buystock`, {
        item,
        price,
        qty,
        account,
        id,
        sPrice,
      });
      const { success, error } = res.data as axiosResponse;
      setLoading(false);
      if (!success) {
        M.toast({ html: error, classes: 'rounded red' });
        // setInvalid(true);
      } else {
        M.toast({ html: 'Success', classes: 'rounded green' });
        setPrice(undefined);
        setItem('');
        setQty(undefined);
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
        await goTo('stock');
        // }
      }
    } catch (error) {
      setLoading(false);
      M.toast({ html: 'Error try again', classes: 'rounded red' });
    }
  };
  // console.log('Available', available);
  return (
    <div className="card-panel">
      <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix teal-text">
            account_balance_wallet
          </i>
          <input
            id="item"
            defaultValue={item}
            onChange={(e) => {
              const sel = e.target.value;
              const item = jsUcfirst(sel);
              const qtr = stock.filter((t) => t.item === item);
              const [qt] = qtr;
              const { price, sPrice } = qt || 0;
              setUnitPrice(price);
              setPrice(price);
              setSprice(sPrice);
              if (includes(items, item)) {
                const bal = stockBal(item);
                // console.log('stock balance', bal);
                setAvailableTotal(bal);
                setAvailable(true);
              } else {
                setAvailable(false);
              }
              setItem(sel);
            }}
            type="text"
            className="validate black-text"
          />
          <label htmlFor="name">What do you want to buy</label>
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
            {available && (
              <li className="collection-item black-text">
                <p>
                  Unit price : $ <b>{unitPrice}</b>
                </p>
                <p>
                  Selling price price : $ <b>{sPrice}</b>
                </p>
                {availableTotal > 1 && (
                  <p>
                    <b>{item}</b> is already registerd in stock directory, and
                    currently you have <b>{availableTotal}</b> {item}s so you
                    can add quantity
                  </p>
                )}
                {availableTotal === 0 && (
                  <p>
                    <b>{item}</b> is already registerd in stock directory, and
                    currently {item}s are out of stock, so you can add quantity
                  </p>
                )}
                {availableTotal === 1 && (
                  <p>
                    <b>{item}</b> is already registerd in stock directory, and
                    currently you have <b>{availableTotal}</b> {item} so you can
                    add quantity
                  </p>
                )}
              </li>
            )}
          </ul>
        )}
        {!available && (
          <div className="input-field col s12">
            <i className="material-icons prefix teal-text">attach_money</i>
            <input
              id="pice"
              defaultValue={price}
              onChange={(e) => {
                const input = (e.target as HTMLInputElement).value as unknown;
                let val = input as number;
                setPrice(val);
              }}
              type="number"
              className="validate black-text"
            />
            <label htmlFor="pric">Unit price</label>
          </div>
        )}

        {item && (
          <>
            <div className="input-field col s12">
              <i className="material-icons prefix teal-text">control_point</i>
              <input
                id="qty"
                defaultValue={qty}
                onChange={(e) => {
                  const input = (e.target as HTMLInputElement).value as unknown;
                  let val = input as number;
                  setQty(val);
                }}
                type="number"
                className="validate black-text"
              />
              <label htmlFor="qty">Quantity</label>
            </div>
            {!available && (
              <div className="input-field col s12">
                <i className="material-icons prefix teal-text">control_point</i>
                <input
                  id="sp"
                  defaultValue={sPrice}
                  onChange={(e) => {
                    const input = (e.target as HTMLInputElement)
                      .value as unknown;
                    let val = input as number;
                    setSprice(val);
                  }}
                  type="number"
                  className="validate black-text"
                />
                <label htmlFor="sp">Selling price</label>
              </div>
            )}
          </>
        )}

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

const ManageStock: FC<{ props: CompanyProps }> = ({ props }) => {
  const { _id } = props;
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <>
      <h5 className="center black-text">Stock management</h5>
      <ul id="tabs-swipe-demo" className="tabs">
        <li className="tab col s6">
          <a className="active" href="#buyStock">
            <b>Buy stock</b>
          </a>
        </li>
        <li className="tab col s6">
          <a href="#sellStock">
            <b>Sell stock</b>
          </a>
        </li>
      </ul>
      <div className="row">
        <div id="buyStock" className="col s12">
          <Purchase id={_id} />
        </div>
        <div id="sellStock" className="col s12">
          <Sell id={_id} />
        </div>
      </div>
    </>
  );
};

export default ManageStock;
