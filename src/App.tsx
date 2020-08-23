import React, { FC } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/welcome/Home';

const App: FC = () => {
	return (
		<Router>
			<Switch>
				<Route component={Home} path='/' />
			</Switch>
		</Router>
	);
};

export default App;
