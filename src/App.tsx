import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/welcome/Home';
import Login from './components/welcome/Login';
import { AnimatePresence } from 'framer-motion';
import Register from './components/welcome/Register';
import CreateCompany from './components/company/CreateCompany';
import Company from './components/company/Company';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<h1>Loading please wait</h1>}>
        <Router>
          <Route
            render={({ location }) => (
              <AnimatePresence exitBeforeEnter initial={false}>
                <Switch location={location} key={location.pathname}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <Route path="/create_company" component={CreateCompany} />
                  <Route path="/company" component={Company} />
                </Switch>
              </AnimatePresence>
            )}
          />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
