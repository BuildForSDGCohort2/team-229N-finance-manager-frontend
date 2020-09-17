import React from 'react';
import add from '../../asset/add_document.svg';
import MainStep from './steps/MainStep';
import { useTypedSelector } from '../../redux/stateTypes';
import Companies from './Companies';
const Create = () => {
  const { available } = useTypedSelector((state) => state.companies);
  return (
    <>
      <div className="col s12 m6 main_margin">
        {available ? (
          <>
            <br />
            <br />
            <br />
            <Companies />
          </>
        ) : (
          <>
            <br />
            <br />
            <img src={add} width="100%" alt="Create company" />
          </>
        )}
      </div>
      <div className="col s12 m6 ">
        <MainStep />
      </div>
    </>
  );
};

export default Create;
