import React, { FC } from 'react';
import { RightComp } from '../comps';

interface Prop {
  nextStep: () => void;
  prevStep: () => void;
  tel: string;
  email: string;
  location: string;
  setTel: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}
const Step3: FC<Prop> = ({
  nextStep,
  prevStep,
  email,
  location,
  setEmail,
  setLocation,
  setTel,
  tel,
}) => {
  return (
    <RightComp className="hover_me">
      <div className="center">
        {/* <h1>STEP 3 </h1> */}
        <p>Contact information</p>
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">phone</i>
            <input
              id="number"
              type="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              className="input_border"
            />
            <label className="teal-text" htmlFor="number">
              Company telephone number
            </label>
          </div>
          <div className="input-field col s12 ">
            <i className="material-icons prefix">email</i>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="input_border"
            />
            <label className="teal-text" htmlFor="email">
              Company email
            </label>
          </div>
          <div className="input-field col s12 ">
            <i className="material-icons prefix">location_on</i>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="input_border"
            />
            <label className="teal-text" htmlFor="location">
              Location of your company
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

export default Step3;
