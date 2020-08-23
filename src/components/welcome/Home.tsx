import React, { FC } from 'react';
import fl from '../../asset/finance.svg';
// import fd from '../../asset/financial_data.svg';
import report from '../../asset/report.svg';
import Header from './Header';
const Home: FC = () => {
	return (
		<>
			<Header />
			<section className='section'>
				<div>
					<img src={fl} alt='' />
				</div>
				<div>
					<h1>Finance manager</h1>
					<p>
						Finance manager is the online accounting software for small and
						medium enterprises. This softwares aims to bridge knowledge gap of
						young africans with no accounting background.
					</p>
				</div>
			</section>

			<section className='section'>
				<div className='sec2'>
					<p>
						This software also aims to minimise the complexity of book keeping
						by providing automated generation of financial statements like
						business journals, ledgers, Trial balance, Income statement,
						cashbooks, and balance sheet basing on data of the company provided
						through our easy to use user interface.
					</p>
				</div>
				<div>
					<img src={report} alt='' />
				</div>
			</section>

			{/* <section className='section section-grid'>
				<div>
					<i className='fas fa-video fa-3x secondary-text'></i>
					<h2>
						Watch<span className='secondary-text dot'>.</span>
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
						dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.
					</p>
				</div>
				<div>
					<i className='fas fa-users fa-3x secondary-text'></i>
					<h2>
						Share<span className='secondary-text dot'>.</span>
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
						dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.
					</p>
				</div>
				<div>
					<i className='fas fa-book fa-3x secondary-text'></i>
					<h2>
						Learn<span className='secondary-text dot'>.</span>
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
						dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.
					</p>
				</div>
			</section> */}
			<footer className='footer'>
				<ul>
					<li>
						<a href='#'>Faq</a>
					</li>
					<li>
						<a href='#'>Terms of Use</a>
					</li>
					<li>
						<a href='#'>Privacy Notice</a>
					</li>
					<li>
						<a href='#'>Contact Us</a>
					</li>
					<li>
						<a href='#'>About Us</a>
					</li>
				</ul>
			</footer>
		</>
	);
};

export default Home;
