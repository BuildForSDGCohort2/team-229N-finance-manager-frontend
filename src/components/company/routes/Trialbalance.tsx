import React, { FC } from 'react';
import AccoutTop from '../AccoutTop';
import { CompanyProps } from '../interface';

const Trialbalance: FC<{ props: any }> = ({ props }) => {
  const { email, location, name } = props as CompanyProps;
  return (
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
          <tr>
            <td>Eclair</td>
            <td className="center">0.87</td>
            <td></td>
            <td className="center">1000</td>
          </tr>
          <tr>
            <td>Jellybean</td>
            <td className="center">3.76</td>
            <td></td>
            <td className="center">1000</td>
          </tr>
          <tr>
            <td>Lollipop</td>
            <td className="center">7.00</td>
            <td></td>
            <td className="center">1000</td>
          </tr>
          <tr>
            <td>
              <b>TOTAL</b>
            </td>
            <td className="center underline">7.00</td>
            <td></td>
            <td className="center underline">1000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Trialbalance;
