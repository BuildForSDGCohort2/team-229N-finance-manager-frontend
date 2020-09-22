import React, { FC } from 'react';
import { RightComp } from '../comps';
import M from 'materialize-css';

interface Prop {
  nextStep: () => void;
  prevStep: () => void;
  cashBal: number | undefined;
  bankBal: number | undefined;
  setBankBal: React.Dispatch<React.SetStateAction<number | undefined>>;
  setCashBal: React.Dispatch<React.SetStateAction<number | undefined>>;
}
const Step5: FC<Prop> = ({
  prevStep,
  nextStep,
  cashBal,
  bankBal,
  setCashBal,
  setBankBal,
}) => {
  const next = () => {
    if (!cashBal && !bankBal) {
      M.toast({ html: 'Enter bank or cash balance', classes: 'rounded red' });
      return;
    }
    nextStep();
  };
  return (
    <>
      <RightComp className="hover_me">
        <div className="center">
          <p>Opening balance</p>
          <div className="input-field col s12 ">
            <i className="material-icons prefix">attach_money</i>
            <input
              value={cashBal}
              onChange={(e) => {
                const input = (e.target as HTMLInputElement).value as unknown;
                let val = input as number;

                setCashBal(val);
              }}
              id="twt"
              type="number"
              className="input_border"
            />
            <label className="teal-text" htmlFor="twt">
              Opening cash balance
            </label>
          </div>
        </div>
        <div className="input-field col s12 ">
          <i className="material-icons prefix">attach_money</i>
          <input
            value={bankBal}
            onChange={(e) => {
              const input = (e.target as HTMLInputElement).value as unknown;
              let val = input as number;

              setBankBal(val);
            }}
            id="bl"
            type="number"
            className="input_border"
          />
          <label className="teal-text" htmlFor="bl">
            Opening bank balance
          </label>
        </div>

        <button onClick={next} className="btn white black-text shadow">
          <b>Back</b>
          <i className="material-icons left">navigate_before</i>
        </button>
        <button
          onClick={nextStep}
          className="btn white black-text shadow right">
          <b>next</b>
          <i className="material-icons right">navigate_next</i>
        </button>
      </RightComp>
    </>
  );
};

export default Step5;
