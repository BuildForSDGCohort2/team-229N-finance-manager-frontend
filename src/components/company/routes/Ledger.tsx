import React, { FC, useRef } from 'react';
import { LedgerDataArray } from '../../../redux/interface';
import { numberWithCommas } from '../../utils/helpers';
import { useAccountBalance } from '../../utils/hooks';
import AccoutTop from '../AccoutTop';
import { CompanyProps } from '../interface';
import PrintButton from '../Print';
const Debit: FC<LedgerDataArray> = ({ cr, diff, dr, details }) => {
  return (
    <tr>
      <td>{details}</td>
      <td className="center">{numberWithCommas(dr)}</td>
      <td className="center">{cr === 0 ? '-' : numberWithCommas(cr)}</td>
      <td className="center">{numberWithCommas(diff)}</td>
      <td className="center"></td>
    </tr>
  );
};
const Credit: FC<LedgerDataArray> = ({ cr, details }) => {
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
const Ledger: FC<{ props: CompanyProps }> = ({ props }) => {
  const { email, location, name } = props;
  const {
    landBal,
    bankBal,
    machineBal,
    vehicleBal,
    cashBal,
    totalCredit,
    totalDebit,
    totalCapital,
    cashCreditTotal,
    bankCreditTotal,
    bankDebitTotal,
    cashDebitTotal,
    landDebitTotal,
    vehicleDebitTotal,
    machineDebitTotal,
    landCreditTotal,
    vehicleCreditTotal,
    machineCreditTotal,
    purchases,
    salesBal,
    expenseBal,
  } = useAccountBalance();
  const componentRef = useRef(null);
  // console.log('sales bal', salesBal);
  return (
    <>
      <div className="card-panel" ref={componentRef}>
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
            {salesBal > 0 && <Credit cr={salesBal} details="Sales" />}

            {landBal > 0 && (
              <Debit
                diff={landBal}
                dr={landDebitTotal}
                cr={landCreditTotal}
                details="Land"
              />
            )}
            {vehicleBal > 0 && (
              <Debit
                diff={vehicleBal}
                dr={vehicleDebitTotal}
                cr={vehicleCreditTotal}
                details="Vehicle"
              />
            )}
            {machineBal > 0 && (
              <Debit
                diff={machineBal}
                dr={machineDebitTotal}
                cr={machineCreditTotal}
                details="Machine"
              />
            )}
            {cashBal > 0 && (
              <Debit
                diff={cashBal}
                dr={cashDebitTotal}
                cr={cashCreditTotal}
                details="Cash"
              />
            )}
            {purchases > 0 && (
              <Debit
                diff={purchases}
                dr={purchases}
                cr={0}
                details="Purchase"
              />
            )}
            {bankBal > 0 && (
              <Debit
                diff={bankBal}
                dr={bankDebitTotal}
                cr={bankCreditTotal}
                details="Bank"
              />
            )}
            {expenseBal > 0 && (
              <Debit
                diff={expenseBal}
                dr={expenseBal}
                cr={0}
                details="Expenses"
              />
            )}

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
      <PrintButton componentRef={componentRef} />
    </>
  );
};

export default Ledger;
