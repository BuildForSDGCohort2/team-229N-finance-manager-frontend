import React, { useState, useLayoutEffect } from 'react';
import Intro from './Intro';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';

const MainStep = () => {
	useLayoutEffect(() => {
		M.AutoInit();
	}, []);
	const [step, setStep] = useState(1);
	const [name, setName] = useState('');
	const [desc, setDesc] = useState('');
	const [account, setAccount] = useState('');
	const [tel, setTel] = useState('');
	const [email, setEmail] = useState('');
	const [location, setLocation] = useState('');
	const [fb, setFb] = useState('');
	const [twt, setTwt] = useState('');
	const [yt, setYt] = useState('');
	const [logo, setLogo] = useState('');

	const nextStep = () => {
		setStep(step + 1);
	};
	const prevStep = () => {
		setStep(step - 1);
	};
	switch (step) {
		case 1:
			return <Intro nextStep={nextStep} />;
		case 2:
			return (
				<Step2
					account={account}
					desc={desc}
					name={name}
					setAccount={setAccount}
					setDesc={setDesc}
					setName={setName}
					nextStep={nextStep}
					prevStep={prevStep}
				/>
			);
		case 3:
			return (
				<Step3
					email={email}
					location={location}
					setEmail={setEmail}
					setLocation={setLocation}
					nextStep={nextStep}
					prevStep={prevStep}
					setTel={setTel}
					tel={tel}
				/>
			);
		case 4:
			return (
				<Step4
					fb={fb}
					setFb={setFb}
					setTwt={setTwt}
					setYt={setYt}
					twt={twt}
					yt={yt}
					nextStep={nextStep}
					prevStep={prevStep}
				/>
			);
		case 5:
			return (
				<Step5
					logo={logo}
					setLogo={setLogo}
					nextStep={nextStep}
					prevStep={prevStep}
				/>
			);
		case 6:
			return (
				<Step6
					account={account}
					desc={desc}
					email={email}
					fb={fb}
					location={location}
					logo={logo}
					name={name}
					tel={tel}
					twt={twt}
					yt={yt}
					prevStep={prevStep}
				/>
			);

		default:
			return <Intro nextStep={nextStep} />;
	}
};

export default MainStep;
