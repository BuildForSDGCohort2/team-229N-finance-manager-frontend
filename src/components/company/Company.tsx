import React, { useLayoutEffect } from 'react';
// import M from 'materialize-css';
import Side from './Side';
import Main from './Main';
import MainHeader from './MainHeader';
import Fab from './Fab';

const Company = () => {
  useLayoutEffect(() => {
    // M.AutoInit();
    document.body.classList.add('main_wrapper');
    return () => {
      // Called just before the component unmount
      document.body.classList.remove('main_wrapper');
    };
  }, []);
  return (
    <>
      <MainHeader />
      <div className="row">
        <Side />
        <div className="container">
          <div className="col s12 m9 main_margin">
            <Main />
          </div>
        </div>
      </div>
      <Fab />
    </>
  );
};

export default Company;
