import React from 'react';
import AccoutTop from '../AccoutTop';

const BalanceSheet = () => {
  return (
    <div className="card-panel">
      <AccoutTop name="Balance sheet" />

      <table className="black-text striped">
        <thead>
          <tr>
            <th>Item</th>
            <th className="center">Amount (USD)</th>
            <th className="center">Amount (USD)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>Fixed assets</b>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Building</td>
            <td className="center">0.87</td>
            <td className="center">0.87</td>
          </tr>
          <tr>
            <td>Equipment</td>
            <td className="center">3.76</td>
            <td className="center">3.76</td>
          </tr>
          <tr>
            <td>Motor Vehicle</td>
            <td className="center"></td>
            <td className="center">7.00</td>
          </tr>
          <tr>
            <td>
              <b>Current assets</b>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Cash</td>
            <td className="center"></td>
            <td className="center">7.00</td>
          </tr>
          <tr>
            <td>Bank</td>
            <td className="center"></td>
            <td className="center">7.00</td>
          </tr>
          <tr>
            <td>Acconts recievable</td>
            <td className="center"></td>
            <td className="center">7.00</td>
          </tr>
          <tr>
            <td>
              <b>TOTAL ASSETS</b>
            </td>
            <td></td>
            <td className="center underline">20,000,000</td>
          </tr>
          <tr>
            <td>
              <b>Liabilities & Equity</b>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Acconts payable</td>
            <td className="center"></td>
            <td className="center">7.00</td>
          </tr>
          <tr>
            <td>Capital</td>
            <td className="center"></td>
            <td className="center">7.00</td>
          </tr>
          <tr>
            <td>
              <b>TOTAL ASSETS</b>
            </td>
            <td></td>
            <td className="center underline">20,000,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BalanceSheet;
