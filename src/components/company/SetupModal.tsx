import React, { FC, useEffect, useState, SyntheticEvent } from 'react';
import M from 'materialize-css';
import img from '../../asset/celebration.svg';

type Options = 'welcome' | 'setup';
const Welcome = () => {
  return (
    <>
      <h5 className="black-text center-align">WELCOME</h5>
      <img src={img} alt="Celebrations" width="100%" />
      <p className="black-text">
        You have successfully created your company. However you're few steps
        from getting started. You need to set up your company's opening balances
        preferably cash, bank and may be fixed assets of your company.
      </p>
    </>
  );
};
interface Props {
  cash: number | undefined;
  bank: number | undefined;
  setCash: React.Dispatch<React.SetStateAction<number | undefined>>;
  setBank: React.Dispatch<React.SetStateAction<number | undefined>>;
}
const Setup: FC<Props> = ({ bank, cash, setBank, setCash }) => {
  return (
    <>
      <h5 className="black-text center-align">SETUP OPENING BALANCES</h5>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="cash"
            value={cash}
            onChange={(e: SyntheticEvent<EventTarget>) => {
              const input = (e.target as HTMLInputElement).value as unknown;
              let val = input as number;
              setCash(val);
            }}
            type="number"
            className="validate black-text"
          />
          <label htmlFor="cash">Opening cash balance</label>
        </div>
        <div className="input-field col s12">
          <input
            id="bank"
            value={bank}
            onChange={(e) => {
              const input = (e.target as HTMLInputElement).value as unknown;
              let val = input as number;
              setBank(val);
            }}
            type="number"
            className="validate black-text"
          />
          <label htmlFor="bank">Opening bank balance</label>
        </div>
      </div>
    </>
  );
};
const SetupModal = () => {
  const [active, setActive] = useState<Options>('welcome');
  const [cash, setCash] = useState<number | undefined>();
  const [bank, setBank] = useState<number | undefined>();
  const submit = async () => {
    if (!cash && !bank) {
      M.toast({
        html: 'Cash balance or bank balance is requied to get started',
        classes: 'rounded red',
      });
      M.toast({ html: 'They will work as capital', classes: 'rounded red' });
      return;
    }
  };
  useEffect(() => {
    const el = document.querySelector('#setupModal') as any;
    const instance = M.Modal.init(el);
    instance.open();
  }, []);
  return (
    <div id="setupModal" className="modal modal-fixed-footer">
      <div className="modal-content">
        {active === 'welcome' ? (
          <Welcome />
        ) : (
          <Setup cash={cash} bank={bank} setCash={setCash} setBank={setBank} />
        )}
      </div>
      <div className="modal-footer">
        {active === 'welcome' ? (
          <a
            onClick={() => setActive('setup')}
            className="modal-action waves-effect waves-green btn-flat">
            <b> Next</b>
            <i className="material-icons right">arrow_forward</i>
          </a>
        ) : (
          <>
            <a
              onClick={() => setActive('welcome')}
              className="left waves-effect waves-green btn-flat">
              <i className="material-icons left">arrow_back</i>
              <b>back</b>
            </a>
            <a onClick={submit} className=" waves-effect waves-green btn-flat">
              <b>send</b>
              <i className="material-icons right">send</i>
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default SetupModal;
