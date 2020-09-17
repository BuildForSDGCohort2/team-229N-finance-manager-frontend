import React, { FC } from 'react';
import AccoutTop from '../AccoutTop';
import { CompanyProps } from '../interface';

const Ledger: FC<{ props: any }> = ({ props }) => {
  const { email, location, name } = props as CompanyProps;
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
        </tbody>
      </table>
    </div>
  );
};

export default Ledger;
