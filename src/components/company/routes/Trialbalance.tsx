import React, { FC } from 'react';
import { DataArray } from '../../../redux/interface';
import { useTypedSelector } from '../../../redux/stateTypes';
import {
  arrayDiffTotal,
  getTotal,
  numberWithCommas,
} from '../../utils/helpers';
import AccoutTop from '../AccoutTop';
import { CompanyProps } from '../interface';
import dayjs from 'dayjs';
const Debit: FC<DataArray> = ({ amount, details }) => {
  return (
    <tr>
      <td>{details}</td>

      <td className="center">{numberWithCommas(amount)}</td>
      <td className="center"></td>
      {/* <td className="center"></td>
      <td className="center"></td> */}
    </tr>
  );
};
const Credit: FC<DataArray> = ({ amount, details }) => {
  return (
    <tr>
      <td>{details}</td>
      <td></td>
      <td className="center">{numberWithCommas(amount)}</td>
      {/* <td>{code}</td> */}
    </tr>
  );
};

const Trialbalance: FC<{ props: any }> = ({ props }) => {
  const { email, location, name } = props as CompanyProps;
  const { cash } = useTypedSelector((state) => state.cash);
  const { bank } = useTypedSelector((state) => state.bank);
  const { asset } = useTypedSelector((state) => state.asset);
  // const trialbalanceCr = cash.concat(bank);
  const { capital } = useTypedSelector((state) => state.capital);
  const ttr = capital.map((c) => c.amount);
  const cashBal = arrayDiffTotal(cash);
  const bankBal = arrayDiffTotal(bank);
  const totalCapital = getTotal(ttr);
  const totalCredit = totalCapital;
  let totalDebit = cashBal + bankBal;
  // const cash = capital.filter((c) => c.details === 'Cash');
  // console.log('bank balance', cashBal);
  // console.log('my capital', ttr);
  return (
    <>
      <div className="card-panel">
        <AccoutTop
          account="Trial Balance"
          name={name}
          email={email}
          location={location}
        />
        <table className="black-text striped">
          <thead>
            <tr>
              <th>Item</th>
              <th className="center">Debit (USD)</th>
              <th className="center">Credit (USD)</th>
            </tr>
          </thead>
          <tbody>
            <Credit amount={totalCapital} details="Capital" pd={new Date()} />
            <Debit
              // key={t._id}
              amount={cashBal}
              details="Cash"

              // code={t.code}
            />
            <Debit
              // key={t._id}
              amount={bankBal}
              details="Bank"

              // code={t.code}
            />
            {asset.map((t) => {
              t.type === 'dr' && (totalDebit += t.amount);

              return (
                t.type === 'dr' && (
                  <Debit
                    key={t._id}
                    amount={t.amount}
                    details={t.details}
                    pd={t.pd}
                    code={t.code}
                  />
                )
              );
            })}
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>TOTAL</td>
              <td className="center underline">
                <b>{numberWithCommas(totalDebit)}</b>
              </td>

              <td className="center underline">
                <b>{numberWithCommas(totalCredit)}</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Trialbalance;
