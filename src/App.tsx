import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/welcome/Home';
import Login from './components/welcome/Login';
import { AnimatePresence } from 'framer-motion';
import Register from './components/welcome/Register';
import CreateCompany from './components/company/CreateCompany';

const App: FC = () => {
	return (
		<Router>
			<Route
				render={({ location }) => (
					<AnimatePresence exitBeforeEnter initial={false}>
						<Switch location={location} key={location.pathname}>
							<Route exact path='/' component={Home} />
							<Route exact path='/login' component={Login} />
							<Route path='/register' component={Register} />
							<Route path='/create_company' component={CreateCompany} />
						</Switch>
					</AnimatePresence>
				)}
			/>
		</Router>
	);
};

export default App;
