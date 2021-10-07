import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/welcome/Home';
import Login from './components/welcome/Login';
import Register from './components/welcome/Register';
import CreateCompany from './components/company/CreateCompany';
import Company from './components/company/Company';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './components/general/Preload';
import axios from 'axios';
import { SERVER_URL } from './components/utils/constants';
import Confirm from './components/welcome/Confirm';
axios.defaults.baseURL = SERVER_URL;
axios.defaults.withCredentials = false;
axios.defaults.headers = {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    };
const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loading />}>
        <Router>
          {/* <Route
            render={({ location }) => (
              <AnimatePresence exitBeforeEnter initial={false}> */}
          <Switch
          // location={location} key={location.pathname}
          >
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/companies" component={CreateCompany} />
            <Route path="/company/:id" component={Company} />
            <Route path="/security" component={Confirm} />
          </Switch>
          {/* </AnimatePresence>
            )}
          /> */}
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
