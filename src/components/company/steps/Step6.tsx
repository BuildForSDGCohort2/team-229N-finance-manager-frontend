import React, { FC } from 'react';
import { RightComp } from '../comps';

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
  logo: string;
}
const Step6: FC<Prop> = ({
  prevStep,
  account,
  desc,
  email,
  fb,
  location,
  logo,
  name,
  tel,
  twt,
  yt,
}) => {
  return (
    <RightComp className="hover_me">
      <p className="center">Review and submit</p>
      <ul className="collection">
        <li className="collection-item">
          <div>
            <div className="secondary-content">
              <i className="fas fa-2x fa-address-card"></i>
            </div>
            <p>{name}</p>
          </div>
        </li>
        <li className="collection-item">
          <div>
            <div className="secondary-content">
              <i className="material-icons">info_outline</i>
            </div>
            <p>{desc}</p>
          </div>
        </li>
        <li className="collection-item">
          <div>
            <div className="secondary-content">
              <i className="material-icons">account_balance</i>
            </div>
            <p>{account}</p>
          </div>
        </li>
        <li className="collection-item">
          <div>
            <div className="secondary-content">
              <i className="material-icons">phone</i>
            </div>
            <p>{tel}</p>
          </div>
        </li>
        <li className="collection-item">
          <div>
            <div className="secondary-content">
              <i className="material-icons">email</i>
            </div>
            <p>{email}</p>
          </div>
        </li>
        <li className="collection-item">
          <div>
            <div className="secondary-content">
              <i className="material-icons">location_on</i>
            </div>
            <p>{location}</p>
          </div>
        </li>
        <li className="collection-item">
          <div>
            <div className="secondary-content">
              <i className="fab fa-2x fa-facebook"></i>
            </div>
            <p>{fb}</p>
          </div>
        </li>
        <li className="collection-item">
          <div>
            <div className="secondary-content">
              <i className="fab fa-2x fa-twitter"></i>
            </div>
            <p>{twt}</p>
          </div>
        </li>
        <li className="collection-item">
          <div>
            <div className="secondary-content">
              <i className="fab fa-2x fa-youtube"></i>
            </div>
            <p>{yt}</p>
          </div>
        </li>
      </ul>
      <button onClick={prevStep} className="btn white black-text shadow">
        <b>Back</b>
        <i className="material-icons left">navigate_before</i>
      </button>

      <button
        // onClick={nextStep}
        className="btn white black-text shadow right">
        <b>SEND</b>
        <i className="material-icons right">send</i>
      </button>
    </RightComp>
  );
};

export default Step6;
