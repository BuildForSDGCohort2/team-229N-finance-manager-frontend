import React, { FC, useEffect, useState } from 'react';
import { TableHead } from '../comps';
import M from 'materialize-css';
import axios from 'axios';
import AccoutTop from '../AccoutTop';
import { CompanyProps } from '../interface';
import { useThunkDispatch, useTypedSelector } from '../../../redux/stateTypes';
import { DataArray } from '../../../redux/interface';
import { numberWithCommas } from '../../utils/helpers';
import dayjs from 'dayjs';
import { SERVER_URL } from '../../utils/constants';
import { actionTypes } from '../../../redux/actions';
import Ovary from '../../welcome/Ovary';
// import { axiosResponse } from '../../welcome/interface';

const Credit: FC<DataArray> = ({ amount, details, pd, code }) => {
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
const Capital: FC<{ props: any }> = ({ props }) => {
  const { email, location, name, _id } = props as CompanyProps;
  const { capital } = useTypedSelector((state) => state.capital);

  let totalCredit = 0;
  return (
    <>
      {/* <Ovary showOvary={showOvary} /> */}
      <div className="card-panel">
        <AccoutTop
          account="Capital Account"
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
            {capital.map((t) => {
              totalCredit += t.amount;
              return (
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
              <td></td>
              <td> </td>
              <td></td>
              <td>Balance c/d</td>
              <td></td>
              <td className="center">{numberWithCommas(totalCredit)}</td>
            </tr>
            <tr>
              <td>TOTAL</td>
              <td></td>
              <td className="center underline">
                <b>{numberWithCommas(totalCredit)}</b>
              </td>
              <td></td>
              <td></td>
              <td className="center underline">
                <b>{numberWithCommas(totalCredit)}</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Capital;
