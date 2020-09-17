import React, { useLayoutEffect } from 'react';
import Side from './Side';
import Main from './Main';
import MainHeader from './MainHeader';
import Fab from './Fab';
import { useTypedSelector } from '../../redux/stateTypes';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { CompanyProps } from './interface';
interface Props {
  params: { name: string; id: string };
}
const Company = () => {
  const {
    params: { id },
  } = useRouteMatch() as Props;
  // console.log('route', name);
  useLayoutEffect(() => {
    // M.AutoInit();
    document.body.classList.add('main_wrapper');
    return () => {
      // Called just before the component unmount
      document.body.classList.remove('main_wrapper');
    };
  }, []);
  const { loggedIn } = useTypedSelector((state) => state.auth);
  const { companies } = useTypedSelector((state) => state.companies);
  const company = companies.filter((m) => m._id === id);
  const [props] = company !== undefined && (company as any);

  let companyName: string = '';
  if (props) {
    const { name } = props && (props as CompanyProps);
    companyName = name;
  }
  // console.log('company', name);
  if (!loggedIn) {
    return <Redirect to="/login" />;
  } else
    return (
      <>
        <MainHeader name={companyName} />
        <div className="row">
          <Side />
          <div className="container">
            <div className="col s12 m9 main_margin">
              <Main props={props} />
            </div>
          </div>
        </div>
        <Fab />
      </>
    );
};

export default Company;
