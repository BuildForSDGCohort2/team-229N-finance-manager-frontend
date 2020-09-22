import React, { FC, useState } from 'react';
import { RightComp, Collapsible } from '../comps';
import { useTypedSelector, useThunkDispatch } from '../../../redux/stateTypes';
import axios from 'axios';
import { CompanyResponse } from '../interface';
import { actionTypes } from '../../../redux/actions';
import { numberWithCommas } from '../../utils/helpers';

interface Prop {
  prevStep: () => void;
  name: string;
  desc: string;
  account: string;
  tel: string;
  email: string;
  location: string;
  fb: string;
  twt: string;
  yt: string;
  cashBal: number | undefined;
  bankBal: number | undefined;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  // logo: string;
}
const Step6: FC<Prop> = ({
  prevStep,
  account,
  desc,
  email,
  fb,
  location,
  name,
  tel,
  twt,
  yt,
  bankBal,
  cashBal,
  setStep,
}) => {
  const dispatch = useThunkDispatch();
  const { token } = useTypedSelector((state) => state.auth);
  axios.defaults.headers.common['Authorization'] = token;
  const [loading, setLoading] = useState(false);
  const submit = async () => {
    setLoading(true);
    try {
      const res = await axios.post('/company/create', {
        name,
        email,
        location,
        desc,
        fb,
        yt,
        twt,
        tel,
        bank: account,
        bankBal,
        cashBal,
      });
      const { success, error, data } = res.data as CompanyResponse;
      setLoading(false);
      if (!success) {
        M.toast({ html: error, classes: 'rounded red' });
      } else {
        dispatch({
          type: actionTypes.CREATE_COMPANY,
          payload: { data },
        });
        setStep(1);
        M.toast({ html: 'Success', classes: 'rounded green' });
        // M.toast({ html: 'Account created', classes: 'rounded green' });
      }
    } catch (error) {
      M.toast({ html: 'Network error', classes: 'rounded red' });
      setLoading(false);
    }
  };
  return (
    <RightComp className="hover_me">
      <p className="center">Review and submit</p>
      <ul className="collection">
        <li className="collection-item collection_item_overide">
          <Collapsible>
            <div>
              <i className="fas fa-2x fa-address-card teal-text"></i>
            </div>
            <div>{name}</div>
          </Collapsible>
        </li>
        <li className="collection-item collection_item_overide">
          <Collapsible>
            <div>
              <i className="material-icons teal-text">info_outline</i>
            </div>
            <div>{desc}</div>
          </Collapsible>
        </li>
        {account && (
          <li className="collection-item collection_item_overide">
            <Collapsible>
              <div>
                <i className="material-icons teal-text">account_balance</i>
              </div>
              <div>{account}</div>
            </Collapsible>
          </li>
        )}
        {tel && (
          <li className="collection-item collection_item_overide">
            <Collapsible>
              <div>
                <i className="material-icons teal-text">phone</i>
              </div>
              <div>{tel}</div>
            </Collapsible>
          </li>
        )}
        <li className="collection-item collection_item_overide">
          <Collapsible>
            <div>
              <i className="material-icons teal-text">email</i>
            </div>
            <div>{email}</div>
          </Collapsible>
        </li>
        {bankBal && (
          <li className="collection-item collection_item_overide">
            <Collapsible>
              <div>
                <i className="material-icons teal-text">attach_money</i>
              </div>
              <div>{numberWithCommas(bankBal)}</div>
            </Collapsible>
          </li>
        )}
        {cashBal && (
          <li className="collection-item collection_item_overide">
            <Collapsible>
              <div>
                <i className="material-icons teal-text">attach_money</i>
              </div>
              <div>{numberWithCommas(cashBal)}</div>
            </Collapsible>
          </li>
        )}
        {location && (
          <li className="collection-item collection_item_overide">
            <Collapsible>
              <div>
                <i className="material-icons teal-text">location_on</i>
              </div>
              <div>{location}</div>
            </Collapsible>
          </li>
        )}
        {fb && (
          <li className="collection-item collection_item_overide">
            <Collapsible>
              <div>
                <i className="fab fa-2x fa-facebook teal-text"></i>
              </div>
              <div>{fb}</div>
            </Collapsible>
          </li>
        )}
        {twt && (
          <li className="collection-item collection_item_overide">
            <Collapsible>
              <div>
                <i className="fab fa-2x fa-twitter teal-text"></i>
              </div>
              <div>{twt}</div>
            </Collapsible>
          </li>
        )}
        {yt && (
          <li className="collection-item collection_item_overide">
            <Collapsible>
              <div>
                <i className="fab fa-2x fa-youtube teal-text"></i>
              </div>
              <div>{yt}</div>
            </Collapsible>
          </li>
        )}
      </ul>
      <button onClick={prevStep} className="btn white black-text shadow">
        <b>Back</b>
        <i className="material-icons left">navigate_before</i>
      </button>
      {!loading ? (
        <button onClick={submit} className="btn white black-text shadow right">
          <b>SEND</b>
          <i className="material-icons right">send</i>
        </button>
      ) : (
        <button className="btn white black-text shadow right">
          <b>Please wait</b>
          {/* <i className="material-icons right">send</i> */}
        </button>
      )}
    </RightComp>
  );
};

export default Step6;
