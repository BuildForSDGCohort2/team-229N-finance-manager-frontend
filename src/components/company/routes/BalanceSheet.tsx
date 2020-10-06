import React, { FC, useRef } from 'react';
import { DataArray } from '../../../redux/interface';
import { numberWithCommas } from '../../utils/helpers';
import { useAccountBalance } from '../../utils/hooks';
import AccoutTop from '../AccoutTop';
import { CompanyProps } from '../interface';
import PrintButton from '../Print';

const Bal: FC<DataArray> = ({ amount, details }) => {
  return (
    <tr>
      <td>{details}</td>
      <td className="center"></td>
      <td className="center">
        {amount > 0 && numberWithCommas(amount)}
        {amount === 0 && numberWithCommas(amount)}
        {amount < 0 && '(' + numberWithCommas(Math.abs(amount)) + ')'}
      </td>
    </tr>
  );
};
const BalanceSheet: FC<{ props: CompanyProps }> = ({ props }) => {
  const { email, location, name } = props;
  const {
    landBal,
    bankBal,
    machineBal,
    vehicleBal,
    cashBal,
    totalCapital,
    balSheetCreditTotal,
    balSheetDebitTotal,
    stockValue,
    profit,
    fixedAssetAvailable,
  } = useAccountBalance();

  const componentRef = useRef(null);

  return (
    <>
      <div className="card-panel" ref={componentRef}>
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
            {fixedAssetAvailable() && (
              <tr>
                <td>
                  <b>Fixed assets</b>
                </td>
                <td></td>
                <td></td>
              </tr>
            )}
            {landBal > 0 && <Bal amount={landBal} details="Land" />}
            {machineBal > 0 && <Bal amount={machineBal} details="Machine" />}
            {vehicleBal > 0 && <Bal amount={vehicleBal} details="Vehicle" />}

            <tr>
              <td>
                <b>Current assets</b>
              </td>
              <td></td>
              <td></td>
            </tr>
            {cashBal > 0 && <Bal amount={cashBal} details="Cash" />}
            {bankBal > 0 && <Bal amount={bankBal} details="Bank" />}
            {stockValue > 0 && <Bal amount={stockValue} details="Stock" />}
            <tr>
              <td>
                <b>TOTAL ASSETS</b>
              </td>
              <td></td>
              <td className="center underline">
                <b>{numberWithCommas(balSheetDebitTotal)}</b>
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
            {profit > 0 && <Bal amount={profit} details="Profit" />}
            {profit < 0 && <Bal amount={profit} details="Loss" />}

            <tr>
              <td>
                <b>TOTAL LIABILITIES & EQUIT</b>
              </td>
              <td></td>
              <td className="center underline">
                <b>{numberWithCommas(balSheetCreditTotal)}</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <PrintButton componentRef={componentRef} />
    </>
  );
};

export default BalanceSheet;
