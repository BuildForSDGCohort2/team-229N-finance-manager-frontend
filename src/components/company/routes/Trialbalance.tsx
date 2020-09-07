import React from 'react';
import AccoutTop from '../AccoutTop';

const Trialbalance = () => {
  return (
    <div className="card-panel">
      <AccoutTop name="Trial Balance" />
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
