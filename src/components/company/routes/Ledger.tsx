import dayjs from 'dayjs';
import React, { FC } from 'react';
import { DataArray } from '../../../redux/interface';
import { useTypedSelector } from '../../../redux/stateTypes';
import { numberWithCommas } from '../../utils/helpers';
import AccoutTop from '../AccoutTop';
import { CompanyProps } from '../interface';
const Debit: FC<DataArray> = ({ amount, details, code, pd }) => {
  return (
    <tr>
      <td>{dayjs(pd).format('DD/MM/YYYY')}</td>
      <td>{details}</td>
      <td className="center">{numberWithCommas(amount)}</td>
      <td className="center"></td>
      <td className="center">{numberWithCommas(amount)}</td>
      <td className="center"></td>
    </tr>
    // <tr>
    //   <td>{dayjs(pd).format('DD/MM/YYYY')}</td>
    //   <td>{details}</td>
    //   <td>{code}</td>
    //   <td className="center">{numberWithCommas(amount)}</td>
    //   <td className="center"></td>
    // </tr>
  );
};
const Credit: FC<DataArray> = ({ amount, details, pd, code }) => {
  return (
    <tr>
      <td>{dayjs(pd).format('DD/MM/YYYY')}</td>
      <td>{details}</td>
      <td className="center"></td>
      <td className="center">{numberWithCommas(amount)}</td>
      <td className="center"></td>
      <td className="center">{numberWithCommas(amount)}</td>
    </tr>
    // <tr>
    //   <td>{dayjs(pd).format('DD/MM/YYYY')}</td>
    //   <td>{details}</td>
    //   <td>{code}</td>
    //   <td className="center"></td>
    //   <td className="center">{numberWithCommas(amount)}</td>
    // </tr>
  );
};
const Ledger: FC<{ props: any }> = ({ props }) => {
  const { email, location, name } = props as CompanyProps;
  const { transactions } = useTypedSelector((state) => state.journal);
  let totalCredit = 0;
  let totalDebit = 0;
  return (
    <div className="card-panel">
      <AccoutTop
        account="General Ledger"
        name={name}
        email={email}
        location={location}
      />
      <table className="black-text border_table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Details</th>
            <th colSpan={2} className="center">
              Transaction
            </th>
            <th className="center" colSpan={2}>
              Balance
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td className="center">Debit</td>
            <td className="center">Credit</td>
            <td className="center">Debit</td>
            <td className="center">Credit</td>
          </tr>
          {transactions.map((t) => {
            t.type === 'dr'
              ? (totalDebit += t.amount)
              : (totalCredit += t.amount);
            return t.type === 'dr' ? (
              <Debit
                key={t._id}
                amount={t.amount}
                details={t.details}
                pd={t.pd}
                code={t.code}
              />
            ) : (
              <Credit
                key={t._id}
                amount={t.amount}
                details={t.details}
                pd={t.pd}
                code={t.code}
              />
            );
          })}
          <tr>
            <td>TOTAL</td>
            <td></td>
            <td></td>
            <td></td>
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
  );
};

export default Ledger;
