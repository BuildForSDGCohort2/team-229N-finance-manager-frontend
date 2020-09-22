import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import axios from 'axios';
import M from 'materialize-css';
import Side from './Side';
import Main from './Main';
import MainHeader from './MainHeader';
import Fab from './Fab';
import { useThunkDispatch, useTypedSelector } from '../../redux/stateTypes';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { CompanyProps } from './interface';
import { SERVER_URL } from '../utils/constants';
import Ovary from '../welcome/Ovary';
import { axiosResponse } from '../welcome/interface';
import { actionTypes } from '../../redux/actions';
interface Props {
  params: { name: string; id: string };
}
const Company = () => {
  const dispatch = useThunkDispatch();
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
  const [showOvary, setShowOvary] = useState(false);
  const { loggedIn, token } = useTypedSelector((state) => state.auth);
  axios.defaults.headers.common['Authorization'] = token;
  const { companies } = useTypedSelector((state) => state.companies);
  const company = companies.filter((m) => m._id === id);
  const [props] = company !== undefined && (company as any);
  const openOvary = () => {
    setShowOvary(true);
  };
  const closeOvary = () => {
    setShowOvary(false);
  };
  useEffect(() => {
    getInitialData();
  }, []);

  let companyName: string = '';
  let compId: string = '';
  if (props) {
    const { name, _id } = props && (props as CompanyProps);
    companyName = name;
    compId = _id;
  }
  const getCapital = useCallback(
    async (data) => {
      dispatch({
        type: actionTypes.GET_CAPITAL,
        payload: {
          data,
        },
      });
    },
    [dispatch]
  );
  const getBank = useCallback(
    async (data) => {
      dispatch({
        type: actionTypes.GET_BANK,
        payload: {
          data,
        },
      });
    },
    [dispatch]
  );
  const getCash = useCallback(
    async (data) => {
      dispatch({
        type: actionTypes.GET_CASH,
        payload: {
          data,
        },
      });
    },
    [dispatch]
  );
  const getJournal = useCallback(
    async (data) => {
      dispatch({
        type: actionTypes.GET_JOURNAL,
        payload: {
          data,
        },
      });
    },
    [dispatch]
  );
  const getInitialData = async () => {
    // alert('yess');
    const id = compId;
    if (!id) {
      return;
    }
    openOvary();
    // console.log('companyId', compId);
    try {
      const res = await axios.get(
        `${SERVER_URL}/transaction/getInitialData/${id}`
      );
      // console.log('response', res.data);
      closeOvary();
      const { success, error } = res.data as axiosResponse;
      if (!success) {
        M.toast({ html: error, classes: 'rounded red' });
        // setInvalid(true);
      } else {
        // if (res.data.data.length) {
        // console.log('my data', res.data.data);
        await getBank(res.data.data.bank);

        await getCapital(res.data.data.capital);
        await getCash(res.data.data.cash);
        await getJournal(res.data.data.journal);
        // }

        // M.toast({ html: info, classes: 'rounded green' });
      }
    } catch (error) {
      closeOvary();
    }
  };
  if (!loggedIn) {
    return <Redirect to="/login" />;
  } else
    return (
      <>
        <Ovary showOvary={showOvary} />
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