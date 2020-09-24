import dayjs from 'dayjs';
import React, { FC } from 'react';
import { LedgerDataArray } from '../../../redux/interface';
import { useTypedSelector } from '../../../redux/stateTypes';
import {
  arrayDiffTotal,
  getTotal,
  getTotalCredit,
  getTotalDebit,
  numberWithCommas,
} from '../../utils/helpers';
import AccoutTop from '../AccoutTop';
import { CompanyProps } from '../interface';
const Debit: FC<LedgerDataArray> = ({ cr, diff, dr, details }) => {
  return (
    <tr>
      <td>{details}</td>
      <td className="center">{numberWithCommas(dr)}</td>
      <td className="center">{numberWithCommas(cr)}</td>
      <td className="center">{numberWithCommas(diff)}</td>
      <td className="center"></td>
    </tr>
  );
};
const Credit: FC<LedgerDataArray> = ({ cr, dr, diff, details }) => {
  return (
    <tr>
      <td>{details}</td>
      <td className="center"></td>
      <td className="center">{numberWithCommas(cr)}</td>
      <td className="center"></td>
      <td className="center">{numberWithCommas(cr)}</td>
    </tr>
  );
};
const Ledger: FC<{ props: any }> = ({ props }) => {
  const { email, location, name } = props as CompanyProps;
  // const { transactions } = useTypedSelector((state) => state.journal);
  const { capital } = useTypedSelector((state) => state.capital);
  const { cash } = useTypedSelector((state) => state.cash);
  const { bank } = useTypedSelector((state) => state.bank);
  const { asset } = useTypedSelector((state) => state.asset);
  const cashBal = arrayDiffTotal(cash);
  const bankBal = arrayDiffTotal(bank);
  const ttr = capital.map((c) => c.amount);
  const totalCapital = getTotal(ttr);
  let totalCredit = totalCapital;
  const cashDebitTotal = getTotalDebit(cash);
  const cashCreditTotal = getTotalCredit(cash);
  const bankDebitTotal = getTotalDebit(bank);
  const bankCreditTotal = getTotalCredit(bank);
  // let totalCredit = 0;
  let totalDebit = cashBal + bankBal;
  console.log('cash credit', cashCreditTotal);
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
            {/* <th>Date</th> */}
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
            <td className="center">Debit</td>
            <td className="center">Credit</td>
            <td className="center">Debit</td>
            <td className="center">Credit</td>
          </tr>
          <Credit cr={totalCapital} details="Capital" />
          <Debit
            diff={cashBal}
            dr={cashDebitTotal}
            cr={cashCreditTotal}
            details="Cash"
          />
          <Debit
            diff={bankBal}
            dr={bankDebitTotal}
            cr={bankCreditTotal}
            details="Bank"
          />
          {asset.map((t) => {
            t.type === 'dr'
              ? (totalDebit += t.amount)
              : (totalCredit += t.amount);
            return (
              t.type === 'dr' && (
                <Debit
                  key={t._id}
                  diff={t.amount}
                  dr={t.amount}
                  // amount={t.amount}
                  details={t.details}
                  // pd={t.pd}
                  // code={t.code}
                />
              )
            );
          })}
          <tr>
            <td>
              <b>TOTAL</b>
            </td>

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
