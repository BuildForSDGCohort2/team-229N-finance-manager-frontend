import React, { FC } from 'react';
import AccoutTop from '../AccoutTop';
import { CompanyProps } from '../interface';

const Journal: FC<{ props: any }> = ({ props }) => {
  const { email, location, name } = props as CompanyProps;
  return (
    <div className="card-panel">
      <AccoutTop
        account="General Journal"
        name={name}
        email={email}
        location={location}
      />
      <table className="black-text striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Details</th>
            <th className="center">Debit (USD)</th>
            <th className="center">Credit (USD)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alvin</td>
            <td>Eclair</td>
            <td className="center">0.87</td>
            <td className="center">1000</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td className="center">3.76</td>
            <td className="center">1000</td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td className="center">7.00</td>
            <td className="center">1000</td>
          </tr>
          <tr>
            <td>
              <b>TOTAL</b>
            </td>
            <td></td>
            <td className="center underline">7.00</td>
            <td className="center underline">1000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Journal;
