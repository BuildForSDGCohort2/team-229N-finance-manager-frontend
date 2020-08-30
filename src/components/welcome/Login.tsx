import React, { useState, useLayoutEffect } from 'react';
import M from 'materialize-css';
import { motion } from 'framer-motion';
import {
	FormWraper,
	FormHeader,
	FormTop,
	FildSpan,
	FormActions,
	FormBottom,
	Seperator,
	Devider,
	DeviderLable
} from './comps';
import { Locker, Unlocker } from './Locker';
import { Link } from 'react-router-dom';
import Ovary from './Ovary';

import { useGoogleLogin } from 'react-google-login';
import { LinkStyles } from './Register';
import Header from './Header';

const clientId =
	'707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

// const transition = {
// 	duration: 1,
// 	ease: [0.43, 0.13, 0.23, 0.96]
// };
// const routeVariants = {
// 	exit: { y: '50%', opacity: 0, transition },
// 	enter: {
// 		y: '0%',
// 		opacity: 1,
// 		transition
// 	}
// };
const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const routeVariants = {
	initial: { scale: 0.9, opacity: 0 },
	enter: { scale: 1, opacity: 1, transition },
	exit: {
		scale: 0.5,
		opacity: 0,
		transition: { duration: 0.5, transition }
	}
};
const Login = () => {
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
		accessType: 'offline'
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
			initial='exit'
			animate='enter'
			exit='exit'
			variants={routeVariants}>
			<Header isHome={false} />
			<Ovary showOvary={showOvary} />
			<FormWraper>
				<Locker lockShow={lockShow} />
				<Unlocker unlocker={unlocker} />
				<FormHeader>Log In</FormHeader>
				<FormTop>
					<div className='input-field col s12 field'>
						<i className='material-icons tiny white-text prefix'>email</i>
						<input
							id='em'
							type='email'
							value={loginEmail}
							onChange={(e) => setLoginEmail(e.target.value)}
							className='validate white-text input_border'
						/>
						<FildSpan />
						<label htmlFor='em'>Email</label>
					</div>
					<div className='input-field col s12 field'>
						<i className='tiny material-icons white-text prefix'>lock</i>
						<input
							id='pas'
							type='password'
							className='white-text input_border'
							value={loginPass}
							onChange={(e) => setloginPass(e.target.value)}
						/>
						<FildSpan />
						<label htmlFor='pas'>Password</label>
					</div>
					<FormActions>
						<ul>
							<li>
								<label>
									<input
										type='checkbox'
										name='rememberMe'
										checked={rememberMe}
										onChange={handleInputChange}
										className='filled-in'
									/>
									<span>Remember me</span>
								</label>
							</li>
							<li>
								<Link to='/create_company'>Forgot password?</Link>
							</li>
						</ul>
						<div className='clear'> </div>
					</FormActions>
				</FormTop>
				<FormBottom>
					<button
						className='waves-effect waves-light'
						// onClick={submit}
					>
						log in
					</button>
					<p style={LinkStyles.p}>
						Don't have an account?
						<Link style={LinkStyles.links} to='/register'>
							Register
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
					className='btn google red waves-effect waves-light btn-large'>
					<b>login with google</b>
					<i className='fab fa-google right'></i>
				</motion.button>
			</FormWraper>
		</motion.div>
	);
};

export default Login;
