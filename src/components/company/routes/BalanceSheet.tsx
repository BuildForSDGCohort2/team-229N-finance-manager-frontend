import dayjs from 'dayjs';
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
// const Debit: FC<DataArray> = ({ amount, details, code, pd }) => {
//   return (
//     // <tr>
//     //   <td>{dayjs(pd).format('DD/MM/YYYY')}</td>
//     //   <td>{details}</td>
//     //   <td>{code}</td>
//     //   <td className="center">{numberWithCommas(amount)}</td>
//     //   <td className="center"></td>
//     // </tr>
//   );
// };
const Bal: FC<DataArray> = ({ amount, details, pd, code }) => {
  return (
    <tr>
      <td>{details}</td>
      <td className="center"></td>
      <td className="center">{numberWithCommas(amount)}</td>
    </tr>
  );
};
const BalanceSheet: FC<{ props: any }> = ({ props }) => {
  const { email, location, name } = props as CompanyProps;
  const { capital } = useTypedSelector((state) => state.capital);
  const { asset } = useTypedSelector((state) => state.asset);
  const { cash } = useTypedSelector((state) => state.cash);
  const { bank } = useTypedSelector((state) => state.bank);
  const cashBal = arrayDiffTotal(cash);
  const bankBal = arrayDiffTotal(bank);
  // const { transactions } = useTypedSelector((state) => state.journal);
  let totalDebit = cashBal + bankBal;

  const tt = capital.map((c) => c.amount);
  const totalCapital = getTotal(tt);
  let totalCredit = totalCapital;
  return (
    <div className="card-panel">
      <AccoutTop
        account="Balance sheet"
        name={name}
        email={email}
        location={location}
      />

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
              <b>Current assets</b>
            </td>
            <td></td>
            <td></td>
          </tr>
          <Bal amount={cashBal} details="Cash" />
          <Bal amount={bankBal} details="Bank" />
          {asset.map((t) => {
            t.type === 'dr' && (totalDebit += t.amount);

            if (t.type === 'dr') {
              return (
                <Bal
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
            <td>
              <b>TOTAL ASSETS</b>
            </td>
            <td></td>
            <td className="center underline">
              <b>{numberWithCommas(totalDebit)}</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>Liabilities & Equity</b>
            </td>
            <td></td>
            <td></td>
          </tr>
          <Bal amount={totalCapital} details="Capital" />
          <tr>
            <td>
              <b>TOTAL LIABILITIES & EQUIT</b>
            </td>
            <td></td>
            <td className="center underline">
              <b>{numberWithCommas(totalCredit)}</b>
            </td>
          </tr>
          {/* <tr>
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
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default BalanceSheet;
