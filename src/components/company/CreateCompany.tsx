import React from 'react';
// import MainStep from './steps/MainStep';
import add from '../../asset/add_document.svg';
import MainStep from './steps/MainStep';

const CreateCompany = () => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col s12 m6'>
					<br />
					<br />
					<img src={add} width='100%' alt='Create company' />
				</div>
				<div className='col s12 m6 '>
					<MainStep />
				</div>
			</div>
		</div>
	);
};

export default CreateCompany;
