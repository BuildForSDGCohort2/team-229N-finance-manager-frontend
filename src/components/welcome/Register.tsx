import React, { useState, useLayoutEffect } from 'react';
import M from 'materialize-css';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FormWraper, FormHeader, FormTop, FildSpan, FormBottom } from './comps';
import { Locker } from './Locker';
import { Link, Redirect } from 'react-router-dom';
import Ovary from './Ovary';
import { Response } from './interface';

// import { useGoogleLogin } from 'react-google-login';
import Header from './Header';
import { transition } from '../utils/variables';
import { SERVER_URL } from '../utils/constants';
import { useTypedSelector } from '../../redux/stateTypes';

export const LinkStyles = {
  links: {
    color: 'orange',
    fontWeight: 700,
    margin: '1rem',
  },
  p: {
    fontSize: '1.4rem',
  },
};

const Register = () => {
  useLayoutEffect(() => {
    M.AutoInit();
    document.body.classList.add('login_bg');
    return () => {
      // Called just before the component unmount
      document.body.classList.remove('login_bg');
    };
  }, []);
  // const onSuccess = (res: any) => {
  //   // console.log('Login Success: currentUser:', res.profileObj);
  //   alert(
  //     `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
  //   );
  //   // refreshTokenSetup(res);
  // };

  // const onFailure = () => {
  //   // console.log('Login failed: res:', res);
  //   alert(`Failed to login`);
  // };

  // const { signIn } = useGoogleLogin({
  //   onSuccess,
  //   onFailure,
  //   clientId,
  //   isSignedIn: true,
  //   accessType: 'offline',

  //   // responseType: 'code',
  //   // prompt: 'consent',
  // });

  const [] = useState(true);
  const [email, setLoginEmail] = useState('');
  const [password, setloginPass] = useState('');
  const [name, setName] = useState('');
  const [showOvary, setShowOvary] = useState(false);
  const [lockShow, setLockShow] = useState(false);
  // const [unlocker, setUnlocker] = useState(false);
  const manageLocker = () => {
    setLockShow(true);
    setTimeout(() => {
      setLockShow(false);
    }, 2000);
  };
  const openOvary = () => {
    setShowOvary(true);
  };
  const closeOvary = () => {
    setShowOvary(false);
  };
  const submit = async () => {
    if (!email || !name || !password) {
      M.toast({ html: 'All fields are required', classes: 'rounded red' });
      manageLocker();
      return;
    }
    openOvary();
    try {
      const res = await axios.post(`${SERVER_URL}/auth/register`, {
        email,
        password,
        name,
      });

      closeOvary();
      const { success, error } = res.data as Response;
      // console.log('success', success);
      if (!success) {
        M.toast({ html: error, classes: 'rounded red' });
        manageLocker();
      } else {
        // console.log(res);
        M.toast({ html: 'Success', classes: 'rounded green' });
        M.toast({ html: 'Account created', classes: 'rounded green' });
      }
    } catch (error) {
      closeOvary();
      M.toast({ html: 'Network error', classes: 'rounded red' });
    }
    // openOvary();
  };
  const { loggedIn } = useTypedSelector((state) => state.auth);
  if (loggedIn) {
    return <Redirect to="/companies" />;
  }
  return (
    <motion.div

    // initial="exit"
    // animate="enter"
    // exit="exit"
    // variants={routeVariants}
    >
      <Header isHome={false} />
      <Ovary showOvary={showOvary} />
      <FormWraper
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 0.1, transition } }}>
        <Locker lockShow={lockShow} />
        {/* <Unlocker unlocker={unlocker} /> */}
        <FormHeader>Create account</FormHeader>
        <FormTop>
          <div className="input-field col s12 field">
            <i className="tiny material-icons white-text prefix">lock</i>
            <input
              id="name"
              type="text"
              className="white-text input_border"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FildSpan />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field col s12 field">
            <i className="material-icons tiny white-text prefix">email</i>
            <input
              id="em"
              type="email"
              value={email}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="validate white-text input_border"
            />
            <FildSpan />
            <label htmlFor="em">Email</label>
          </div>
          <div className="input-field col s12 field">
            <i className="tiny material-icons white-text prefix">lock</i>
            <input
              id="pas"
              type="password"
              className="white-text input_border"
              value={password}
              onChange={(e) => setloginPass(e.target.value)}
            />
            <FildSpan />
            <label htmlFor="pas">Password</label>
          </div>
        </FormTop>
        <FormBottom>
          <button className="waves-effect waves-light" onClick={submit}>
            Register
          </button>
          <p style={LinkStyles.p}>
            Do you have an account?
            <Link style={LinkStyles.links} to="/login">
              Login
            </Link>
          </p>
        </FormBottom>
        {/* <Seperator>
          <Devider />
          <DeviderLable>OR</DeviderLable>
          <Devider />
        </Seperator>
        <motion.button
          onClick={signIn}
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          className="btn google red waves-effect waves-light btn-large">
          <b>login with google</b>
          <i className="fab fa-google right"></i>
        </motion.button> */}
      </FormWraper>
    </motion.div>
  );
};

export default Register;
