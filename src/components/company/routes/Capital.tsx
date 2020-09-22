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
  // const [showOvary, setShowOvary] = useState(false);
  // const dispatch = useThunkDispatch();
  // const openOvary = () => {
  //   setShowOvary(true);
  // };
  // const closeOvary = () => {
  //   setShowOvary(false);
  // };
  // useEffect(() => {
  //   getBank();
  // }, []);
  // const getBank = async () => {
  //   // alert('yess');
  //   const id = _id;
  //   if (!id) {
  //     return;
  //   }
  //   openOvary();
  //   // console.log('companyId', compId);
  //   try {
  //     const res = await axios.get(`${SERVER_URL}/transaction/getcapital/${id}`);
  //     // console.log('response', res.data);
  //     closeOvary();
  //     const { success, error } = res.data as axiosResponse;
  //     if (!success) {
  //       M.toast({ html: error, classes: 'rounded red' });
  //       // setInvalid(true);
  //     } else {
  //       if (res.data.data.length > 0) {
  //         dispatch({
  //           type: actionTypes.GET_CAPITAL,
  //           payload: {
  //             data: res.data.data,
  //           },
  //         });
  //       }

  //       // M.toast({ html: info, classes: 'rounded green' });
  //     }
  //   } catch (error) {
  //     closeOvary();
  //   }
  // };
  let total = 0;
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
              total += t.amount;
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
              <td>Balance c/d</td>
              <td> </td>
              <td></td>
              <td></td>
              <td></td>
              <td className="center">{numberWithCommas(total)}</td>
            </tr>
            <tr>
              <td>TOTAL</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="center underline">
                <b>{numberWithCommas(total)}</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Capital;
