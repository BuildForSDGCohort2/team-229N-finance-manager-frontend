import React, { FC, useRef } from 'react';
import { TableHead } from '../comps';
import AccoutTop from '../AccoutTop';
import { CompanyProps } from '../interface';
import { useTypedSelector } from '../../../redux/stateTypes';
import { numberWithCommas } from '../../utils/helpers';
import dayjs from 'dayjs';
import { DataArray } from '../../../redux/interface';
import PrintButton from '../Print';
const Debit: FC<DataArray> = ({ amount, details, pd }) => {
  return (
    <tr>
      <td>{dayjs(pd).format('DD/MM/YYYY')}</td>
      <td>{details}</td>
      {/* <td>{code}</td> */}
      <td className="center">{numberWithCommas(amount)}</td>
      <td className="center"></td>
      <td className="center"></td>
      <td className="center"></td>
    </tr>
  );
};
const Credit: FC<DataArray> = ({ amount, details, pd }) => {
  return (
    <tr>
      <td className="center"></td>
      <td className="center"></td>
      <td className="center"></td>
      <td>{dayjs(pd).format('DD/MM/YYYY')}</td>
      <td>{details}</td>
      <td className="center">{numberWithCommas(amount)}</td>
      {/* <td>{code}</td> */}
    </tr>
  );
};
const Sales: FC<{ props: CompanyProps }> = ({ props }) => {
  const { email, location, name } = props;
  const { sales } = useTypedSelector((state) => state.sales);
  let totalDr = 0;
  let totalCr = 0;
  const componentRef = useRef(null);
  return (
    <>
      <div className="card-panel" ref={componentRef}>
        <AccoutTop
          account="Sales Account"
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
            {sales.map((t) => {
              t.type === 'dr' ? (totalDr += t.amount) : (totalCr += t.amount);
              return t.type === 'dr' ? (
                <Debit
                  key={t._id}
                  amount={t.amount}
                  details={t.details}
                  pd={t.pd}
                  code={t.code}
                />
              ) : (
                <Credit
                  key={t._id}
                  amount={t.amount}
                  details={t.details}
                  pd={t.pd}
                  code={t.code}
                />
              );
            })}
            <tr>
              <td></td>
              <td> </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Balance c/d</td>
              <td> </td>
              <td className="center"></td>
              <td></td>
              <td></td>
              <td className="center">{numberWithCommas(totalCr - totalDr)}</td>
            </tr>
            <tr>
              <td>TOTAL</td>
              <td> </td>
              <td className="center underline">
                <b>{numberWithCommas(totalCr)}</b>
              </td>
              <td></td>
              <td></td>
              <td className="center underline">
                <b>{numberWithCommas(totalCr)}</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <PrintButton componentRef={componentRef} />
    </>
  );
};

export default Sales;
