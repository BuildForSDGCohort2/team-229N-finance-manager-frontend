import React, { FC } from 'react';
import { RightComp } from '../comps';

interface Prop {
  nextStep: () => void;
  prevStep: () => void;
  logo: string;
  setLogo: React.Dispatch<React.SetStateAction<string>>;
}
const Step5: FC<Prop> = ({ prevStep, nextStep, logo, setLogo }) => {
  return (
    <RightComp className="hover_me">
      <div className="center">
        {/* <h5>We need to know more about the company you want to create.</h5> */}
        <p>Your company's logo</p>
        <h1>LOGO HERE </h1>
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

export default Step5;
