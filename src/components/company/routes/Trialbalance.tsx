import React, { FC } from 'react';
import { DataArray } from '../../../redux/interface';
import { useTypedSelector } from '../../../redux/stateTypes';
import { getTotal, numberWithCommas } from '../../utils/helpers';
import AccoutTop from '../AccoutTop';
import { CompanyProps } from '../interface';
import dayjs from 'dayjs';
const Debit: FC<DataArray> = ({ amount, details, code, pd }) => {
  return (
    <tr>
      <td>{dayjs(pd).format('DD/MM/YYYY')}</td>
      <td>{details === 'Bank' ? 'Balance b/d' : details}</td>
      {/* <td>{code}</td> */}
      <td className="center">{numberWithCommas(amount)}</td>
      <td className="center"></td>
      <td className="center"></td>
      <td className="center"></td>
    </tr>
  );
};
const Credit: FC<DataArray> = ({ amount, details, pd, code }) => {
  return (
    <tr>
      <td className="center"></td>
      <td className="center"></td>
      <td className="center"></td>
      <td>{dayjs(pd).format('DD/MM/YYYY')}</td>
      <td>{details}</td>
      <td className="center">{numberWithCommas(amount)}</td>
      {/* <td>{code}</td> */}
    </tr>
  );
};

const Trialbalance: FC<{ props: any }> = ({ props }) => {
  const { email, location, name } = props as CompanyProps;
  const { capital } = useTypedSelector((state) => state.capital);
  // const { cash } = useTypedSelector((state) => state.cash);
  // const { bank } = useTypedSelector((state) => state.bank);
  // const trialbalance = capital.concat(cash).concat(bank);
  const { transactions } = useTypedSelector((state) => state.journal);
  let totalDebit = 0;
  let totalCredit = 0;
  const tt = capital.map((c) => c.amount);
  const totalCapital = getTotal(tt);
  // console.log('my capital', totalCapital);
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
              <th></th>
              <th className="center">Credit (USD)</th>
            </tr>
          </thead>
          <tbody>
            <Credit amount={totalCapital} details="Capital" pd={new Date()} />
            {transactions.map((t) => {
              t.type === 'dr'
                ? (totalDebit += t.amount)
                : (totalCredit += t.amount);
              if (t.type === 'dr') {
                return (
                  <Debit
                    key={t._id}
                    amount={t.amount}
                    details={t.details}
                    pd={t.pd}
                    code={t.code}
                  />
                );
              }
            })}
            <tr>
              <td></td>
              <td> </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>TOTAL</td>
              <td> </td>
              <td className="center underline">
                <b>{numberWithCommas(totalDebit)}</b>
              </td>
              <td></td>
              <td></td>
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
