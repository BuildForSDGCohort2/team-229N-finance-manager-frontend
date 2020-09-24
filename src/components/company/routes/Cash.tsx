import React, { FC } from 'react';
import { TableHead } from '../comps';
import AccoutTop from '../AccoutTop';
import { CompanyProps } from '../interface';
import { useTypedSelector } from '../../../redux/stateTypes';
import { DataArray } from '../../../redux/interface';
import { numberWithCommas } from '../../utils/helpers';
import dayjs from 'dayjs';
const Debit: FC<DataArray> = ({ amount, details, pd }) => {
  return (
    <tr>
      <td>{dayjs(pd).format('DD/MM/YYYY')}</td>
      <td>{details === 'Cash' ? 'Balance b/d' : details}</td>
      {/* <td>{code}</td> */}
      <td className="center">{numberWithCommas(amount)}</td>
      <td className="center"></td>
      <td className="center"></td>
      <td className="center"></td>
    </tr>
  );
};
const Credit: FC<DataArray> = ({ amount, details, pd }) => {
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
const Cash: FC<{ props: any }> = ({ props }) => {
  const { email, location, name } = props as CompanyProps;
  const { cash } = useTypedSelector((state) => state.cash);

  let totalDebit = 0;
  let totalCredit = 0;

  return (
    <>
      {/* <Ovary showOvary={showOvary} /> */}
      <div className="card-panel">
        <AccoutTop
          account="Cash Acount"
          name={name}
          email={email}
          location={location}
        />
        <TableHead>
          <div>Dr</div>
          <div>Cr</div>
        </TableHead>
        <table className="black-text striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Details</th>
              <th className="center">Amount (USD)</th>
              <th>Date</th>
              <th>Details</th>
              <th className="center">Amount (USD)</th>
            </tr>
          </thead>
          <tbody>
            {cash.map((t) => {
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
              <td></td>
              <td> </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Balance c/d</td>
              <td> </td>
              <td className="center">
                {numberWithCommas(totalDebit - totalCredit)}
              </td>
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
                <b>{numberWithCommas(totalDebit)}</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cash;
