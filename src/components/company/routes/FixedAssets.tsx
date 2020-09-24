import React, { FC } from 'react';
import { TableHead } from '../comps';
import AccoutTop from '../AccoutTop';
import { CompanyProps } from '../interface';
import { useTypedSelector } from '../../../redux/stateTypes';
import { numberWithCommas } from '../../utils/helpers';
import dayjs from 'dayjs';
import { DataArray } from '../../../redux/interface';
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
const FixedAssets: FC<{ props: any }> = ({ props }) => {
  const { email, location, name } = props as CompanyProps;
  const { asset } = useTypedSelector((state) => state.asset);
  let totalDr = 0;
  let totalCr = 0;
  return (
    <div className="card-panel">
      <AccoutTop
        account="Fixed Account"
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
          {asset.map((t) => {
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
            <td className="center">{numberWithCommas(totalDr - totalCr)}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>TOTAL</td>
            <td> </td>
            <td className="center underline">
              <b>{numberWithCommas(totalDr)}</b>
            </td>
            <td></td>
            <td></td>
            <td className="center underline">
              <b>{numberWithCommas(totalDr)}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FixedAssets;
