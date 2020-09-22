import React, { FC, useEffect, useState } from 'react';
import { TableHead } from '../comps';
import axios from 'axios';
import M from 'materialize-css';
import AccoutTop from '../AccoutTop';
import { CompanyProps } from '../interface';
import { useThunkDispatch, useTypedSelector } from '../../../redux/stateTypes';
import { DataArray } from '../../../redux/interface';
import { numberWithCommas } from '../../utils/helpers';
import dayjs from 'dayjs';
import Ovary from '../../welcome/Ovary';
import { SERVER_URL } from '../../utils/constants';
import { actionTypes } from '../../../redux/actions';
import { axiosResponse } from '../../welcome/interface';
const Debit: FC<DataArray> = ({ amount, details, code, pd }) => {
  return (
    <tr>
      <td>{dayjs(pd).format('DD/MM/YYYY')}</td>
      <td>{details === 'Cash' ? 'Balance b/d' : details}</td>
      {/* <td>{code}</td> */}
      <td className="center">{numberWithCommas(amount)}</td>
      <td className="center"></td>
      <td className="center"></td>
      <td className="center"></td>
    </tr>
  );
};
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
const Cash: FC<{ props: any }> = ({ props }) => {
  const { email, location, name, _id } = props as CompanyProps;
  const { cash } = useTypedSelector((state) => state.cash);
  // const [showOvary, setShowOvary] = useState(false);
  // const dispatch = useThunkDispatch();
  // const openOvary = () => {
  //   setShowOvary(true);
  // };
  // const closeOvary = () => {
  //   setShowOvary(false);
  // };

  let total = 0;
  // useEffect(() => {
  //   getCash();
  // }, []);
  // const getCash = async () => {
  //   // alert('yess');
  //   const id = _id;
  //   if (!id) {
  //     return;
  //   }
  //   openOvary();
  //   // console.log('companyId', compId);
  //   try {
  //     const res = await axios.get(`${SERVER_URL}/transaction/getcash/${id}`);
  //     // console.log('response', res.data);
  //     closeOvary();
  //     const { success, error } = res.data as axiosResponse;
  //     if (!success) {
  //       M.toast({ html: error, classes: 'rounded red' });
  //       // setInvalid(true);
  //     } else {
  //       if (res.data.data.length > 0) {
  //         dispatch({
  //           type: actionTypes.GET_CASH,
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

  return (
    <>
      {/* <Ovary showOvary={showOvary} /> */}
      <div className="card-panel">
        <AccoutTop
          account="Cash Acount"
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
            {cash.map((t) => {
              if (t.type === 'dr') {
                total += t.amount;
              }

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
              <td className="center">{numberWithCommas(total)}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>TOTAL</td>
              <td> </td>
              <td className="center underline">
                <b>{numberWithCommas(total)}</b>
              </td>
              <td></td>
              <td></td>
              <td className="center"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cash;
