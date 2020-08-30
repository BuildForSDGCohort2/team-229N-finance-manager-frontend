import React, { FC } from 'react';
import { RightComp } from '../comps';

interface Prop {
	nextStep: () => void;
}

const Intro: FC<Prop> = ({ nextStep }) => {
	return (
		<RightComp className='hover_me center'>
			<h1>CREAT A COMPANY </h1>
			<h5>We need to know more about the company you want to create.</h5>
			<p>
				This wizard will help you to create your company by asking you few easy
				step by step questions.
			</p>

			<button onClick={nextStep} className='button blue hover_me'>
				Start now
			</button>
		</RightComp>
	);
};

export default Intro;
