import React, { FC, useEffect, useState } from 'react';
import { DataArray } from '../../../redux/interface';
import { useThunkDispatch, useTypedSelector } from '../../../redux/stateTypes';
import AccoutTop from '../AccoutTop';
import M from 'materialize-css';
import axios from 'axios';
import { CompanyProps } from '../interface';
import dayjs from 'dayjs';
import { numberWithCommas } from '../../utils/helpers';
import { actionTypes } from '../../../redux/actions';
import { axiosResponse } from '../../welcome/interface';
import { SERVER_URL } from '../../utils/constants';
import Ovary from '../../welcome/Ovary';
const Debit: FC<DataArray> = ({ amount, details, code, pd }) => {
  return (
    <tr>
      <td>{dayjs(pd).format('DD/MM/YYYY')}</td>
      <td>{details}</td>
      <td>{code}</td>
      <td className="center">{numberWithCommas(amount)}</td>
      <td className="center"></td>
    </tr>
  );
};
const Credit: FC<DataArray> = ({ amount, details, pd, code }) => {
  return (
    <tr>
      <td>{dayjs(pd).format('DD/MM/YYYY')}</td>
      <td>{details}</td>
      <td>{code}</td>
      <td className="center"></td>
      <td className="center">{numberWithCommas(amount)}</td>
    </tr>
  );
};
const Journal: FC<{ props: any }> = ({ props }) => {
  const { email, location, name, _id } = props as CompanyProps;
  const { transactions } = useTypedSelector((state) => state.journal);
  let totalCredit = 0;
  let totalDebit = 0;
  // const [showOvary, setShowOvary] = useState(false);
  // const dispatch = useThunkDispatch();
  // const openOvary = () => {
  //   setShowOvary(true);
  // };
  // const closeOvary = () => {
  //   setShowOvary(false);
  // };
  // useEffect(() => {
  //   getJournal();
  // }, []);
  // const getJournal = async () => {
  //   // alert('yess');
  //   const id = _id;
  //   if (!id) {
  //     return;
  //   }
  //   openOvary();
  //   // console.log('companyId', compId);
  //   try {
  //     const res = await axios.get(`${SERVER_URL}/transaction/getjournal/${id}`);
  //     // console.log('response', res.data);
  //     closeOvary();
  //     const { success, error } = res.data as axiosResponse;
  //     if (!success) {
  //       M.toast({ html: error, classes: 'rounded red' });
  //       // setInvalid(true);
  //     } else {
  //       if (res.data.data.length > 0) {
  //         dispatch({
  //           type: actionTypes.GET_JOURNAL,
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
          account="General Journal"
          name={name}
          email={email}
          location={location}
        />
        <table className="black-text striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Details</th>
              <th>Ref</th>
              <th className="center">Debit (USD)</th>
              <th className="center">Credit (USD)</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => {
              t.type === 'dr'
                ? (totalDebit += t.amount)
                : (totalCredit += t.amount);
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
    </>
  );
};

export default Journal;
