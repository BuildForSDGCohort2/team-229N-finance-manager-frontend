import React, { FC } from 'react';
import { RightComp } from '../comps';
import { FildSpan } from '../../welcome/comps';

interface Prop {
  nextStep: () => void;
  prevStep: () => void;
  name: string;
  desc: string;
  account: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setDesc: React.Dispatch<React.SetStateAction<string>>;
  setAccount: React.Dispatch<React.SetStateAction<string>>;
}
const Step2: FC<Prop> = ({
  nextStep,
  prevStep,
  name,
  desc,
  account,
  setAccount,
  setDesc,
  setName,
}) => {
  return (
    <RightComp className="hover_me">
      <div className="center">
        {/* <h5>ABOUT </h5> */}
        <p>We need to know basic information about your company</p>

        <div className="row">
          <div className="input-field col s12">
            <i className="fas fa-address-card prefix "></i>
            {/* <i className='material-icons prefix'>account_circle</i> */}
            <input
              id="company_name"
              value={name}
              type="text"
              className="input_border"
              onChange={(e) => setName(e.target.value)}
            />
            <label className="teal-text" htmlFor="company_name">
              Your company name
            </label>
          </div>
          <div className="input-field col s12 ">
            <i className="material-icons prefix">info_outline</i>
            <input
              id="desc"
              type="text"
              value={desc}
              className="input_border"
              onChange={(e) => setDesc(e.target.value)}
            />
            <label className="teal-text" htmlFor="desc">
              Short description of your company
            </label>
          </div>

          <div className="input-field col s12 ">
            <i className="material-icons prefix">account_balance</i>
            <input
              id="account"
              type="text"
              value={account}
              className="input_border"
              onChange={(e) => setAccount(e.target.value)}
            />
            <label className="teal-text" htmlFor="account">
              Bank account of your company (optional)
            </label>
          </div>
        </div>
      </div>

      <button onClick={prevStep} className="btn white black-text shadow">
        <b>Back</b>
        <i className="material-icons left">navigate_before</i>
      </button>
      <button onClick={nextStep} className="btn white black-text shadow right">
        <b>next</b>
        <i className="material-icons right">navigate_next</i>
      </button>
    </RightComp>
  );
};

export default Step2;
