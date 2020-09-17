import React, { FC } from 'react';
import { RightComp } from '../comps';

interface Prop {
  nextStep: () => void;
  prevStep: () => void;
  fb: string;
  twt: string;
  yt: string;
  setFb: React.Dispatch<React.SetStateAction<string>>;
  setTwt: React.Dispatch<React.SetStateAction<string>>;
  setYt: React.Dispatch<React.SetStateAction<string>>;
}
const Step4: FC<Prop> = ({
  nextStep,
  prevStep,
  fb,
  setFb,
  setTwt,
  setYt,
  twt,
  yt,
}) => {
  return (
    <RightComp className="hover_me">
      <div className="center">
        {/* <h1>STEP 4 </h1> */}
        {/* <h5>We need to know more about the company you want to create.</h5> */}
        <p>Social media accounts</p>

        <div className="row">
          <div className="input-field col s12">
            <i className="fab fa-facebook prefix"></i>
            <input
              id="fb"
              value={fb}
              autoFocus={true}
              onChange={(e) => setFb(e.target.value)}
              type="text"
              className="input_border"
            />
            <label className="teal-text" htmlFor="fb">
              Company facebook username (optional)
            </label>
          </div>
          <div className="input-field col s12 ">
            <i className="fab fa-twitter prefix"></i>
            <input
              value={twt}
              onChange={(e) => setTwt(e.target.value)}
              id="twt"
              type="text"
              className="input_border"
            />
            <label className="teal-text" htmlFor="twt">
              Company twitter handle (optional)
            </label>
          </div>
          <div className="input-field col s12">
            <i className="fab fa-youtube prefix"></i>
            <input
              value={yt}
              onChange={(e) => setYt(e.target.value)}
              id="yt"
              type="text"
              className="input_border"
            />
            <label className="teal-text" htmlFor="yt">
              Company youtube channel name (optional)
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

export default Step4;
