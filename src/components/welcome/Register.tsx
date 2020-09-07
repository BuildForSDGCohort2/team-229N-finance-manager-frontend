import React, { useState, useLayoutEffect } from 'react';
import M from 'materialize-css';
import { motion } from 'framer-motion';
import {
  FormWraper,
  FormHeader,
  FormTop,
  FildSpan,
  FormBottom,
  Seperator,
  Devider,
  DeviderLable,
} from './comps';
import { Locker, Unlocker } from './Locker';
import { Link } from 'react-router-dom';
import Ovary from './Ovary';

import { useGoogleLogin } from 'react-google-login';
import Header from './Header';
import { routeVariants } from '../utils/variables';

const clientId =
  '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

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
  const onSuccess = (res: any) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    // refreshTokenSetup(res);
  };

  const onFailure = (res: any) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',

    // responseType: 'code',
    // prompt: 'consent',
  });
  const [rememberMe, setRemember] = useState(true);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setloginPass] = useState('');
  const [showOvary, setShowOvary] = useState(false);
  const [lockShow, setLockShow] = useState(false);
  const [unlocker, setUnlocker] = useState(false);
  const handleInputChange = (event: { target: any }) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setRemember(value);
  };
  return (
    <motion.div
      initial="exit"
      animate="enter"
      exit="exit"
      variants={routeVariants}>
      <Header isHome={false} />
      <Ovary showOvary={showOvary} />
      <FormWraper>
        <Locker lockShow={lockShow} />
        <Unlocker unlocker={unlocker} />
        <FormHeader>Create account</FormHeader>
        <FormTop>
          <div className="input-field col s12 field">
            <i className="material-icons tiny white-text prefix">email</i>
            <input
              id="em"
              type="email"
              value={loginEmail}
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
              value={loginPass}
              onChange={(e) => setloginPass(e.target.value)}
            />
            <FildSpan />
            <label htmlFor="pas">Password</label>
          </div>
          <div className="input-field col s12 field">
            <i className="tiny material-icons white-text prefix">lock</i>
            <input
              id="pas2"
              type="password"
              className="white-text input_border"
              value={loginPass}
              onChange={(e) => setloginPass(e.target.value)}
            />
            <FildSpan />
            <label htmlFor="pas2">Confirm password</label>
          </div>
        </FormTop>
        <FormBottom>
          <button
            className="waves-effect waves-light"
            // onClick={submit}
          >
            Register
          </button>
          <p style={LinkStyles.p}>
            Do you have an account?
            <Link style={LinkStyles.links} to="/login">
              Login
            </Link>
          </p>
        </FormBottom>
        <Seperator>
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
        </motion.button>
      </FormWraper>
    </motion.div>
  );
};

export default Register;
