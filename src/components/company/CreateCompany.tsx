import React, { useEffect } from 'react';
import M from 'materialize-css';
import { motion } from 'framer-motion';
import { routeVariants } from '../utils/variables';
import { useTypedSelector, useThunkDispatch } from '../../redux/stateTypes';
import Create from './Create';
// import Companies from './Companies';
import axios from 'axios';
import { CompanyResponse } from './interface';
import { actionTypes } from '../../redux/actions';
import Fab from './Fab';
import { Redirect } from 'react-router-dom';

const CreateCompany = () => {
  const dispatch = useThunkDispatch();
  const { token } = useTypedSelector((state) => state.auth);
  axios.defaults.headers.common['Authorization'] = token;
  // const { available } = useTypedSelector((state) => state.companies);
  const getCompanies = async () => {
    try {
      const res = await axios.get('/company/companies');
      const { success, error, data } = res.data as CompanyResponse;
      // console.log('company', res.data);
      if (!success) {
        M.toast({ html: error, classes: 'rounded red' });
      } else {
        dispatch({
          type: actionTypes.GET_COMPANIES,
          payload: { data },
        });
        // M.toast({ html: 'Success', classes: 'rounded green' });
        // M.toast({ html: 'Account created', classes: 'rounded green' });
      }
      // console.log('company', res.data);
    } catch (error) {
      M.toast({ html: 'Network error', classes: 'rounded red' });
    }
  };
  useEffect(() => {
    getCompanies();
    // return () => {
    //   cleanup
    // }
  }, []);
  const { loggedIn } = useTypedSelector((state) => state.auth);
  // console.log('logedin', loggedIn);
  if (!loggedIn) {
    return <Redirect to="/login" />;
  } else
    return (
      <>
        <motion.div
          className="container"
          initial="exit"
          animate="enter"
          exit="exit"
          variants={routeVariants}>
          {/* <div className="row">{available ? <Companies /> : <Create />}</div> */}
          <div className="row">
            <Create />
          </div>
        </motion.div>
        <Fab />
      </>
    );
};

export default CreateCompany;
