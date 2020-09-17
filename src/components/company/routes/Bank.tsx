import React, { FC } from 'react';
import { TableHead } from '../comps';
import AccoutTop from '../AccoutTop';
import { CompanyProps } from '../interface';

const Bank: FC<{ props: any }> = ({ props }) => {
  const { email, location, name } = props as CompanyProps;
  return (
    <div className="card-panel">
      <AccoutTop
        account="Bank Acount"
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
          <tr>
            <td>Alvin</td>
            <td>Eclair</td>
            <td className="center">0.87</td>
            <td>Alvin</td>
            <td>Eclair</td>
            <td className="center">0.87</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td className="center">3.76</td>
            <td>Alan</td>
            <td>Jellybean</td>
            <td className="center">3.76</td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td className="center">7.00</td>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td className="center">7.00</td>
          </tr>
          <tr>
            <td></td>
            <td>C/d </td>
            <td className="center underline">7.00</td>
            <td></td>
            <td>C/d</td>
            <td className="center underline">7.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Bank;
