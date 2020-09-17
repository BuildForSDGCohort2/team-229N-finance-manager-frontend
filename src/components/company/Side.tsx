import React from 'react';
import { Collapsible } from './comps';
import { actionTypes } from '../../redux/actions';
import { useThunkDispatch } from '../../redux/stateTypes';
import SetupModal from './SetupModal';

const Side = () => {
  const dispatch = useThunkDispatch();

  return (
    <>
      <section className="col s12 m3 side side_margin">
        <ul className="collection with-header">
          <li className="collection-header transparent">
            <h2>MY SHORT CUTS</h2>
          </li>
          <li className="collection-item transparent collection_item_overide">
            <Collapsible
              onClick={() =>
                dispatch({
                  type: actionTypes.CHANGE_ROUTE,
                  payload: {
                    route: 'dasboard',
                  },
                })
              }>
              <div>
                <i className="material-icons white-text">home</i>
              </div>
              <div>HOME</div>
            </Collapsible>
          </li>
          <li className="collection-item transparent collection_item_overide">
            <Collapsible
              onClick={() =>
                dispatch({
                  type: actionTypes.CHANGE_ROUTE,
                  payload: {
                    route: 'about',
                  },
                })
              }>
              <div>
                <i className="material-icons white-text">info</i>
              </div>
              <div>ABOUT</div>
            </Collapsible>
          </li>
          <li className="collection-item transparent collection_item_overide">
            <Collapsible>
              <div>
                <i className="material-icons white-text">border_color</i>
              </div>
              <a className="btn-flat white-text modal-trigger" href="#modal2">
                Create Transaction
              </a>
            </Collapsible>
          </li>
        </ul>
        <ul className="collapsible" data-collapsible="accordion">
          <li>
            <div className="collapsible-header transparent">
              <i className="material-icons">account_balance_wallet</i>
              ACCOUNTS
            </div>
            <div className="collapsible-body collapsible_overide">
              <Collapsible
                onClick={() =>
                  dispatch({
                    type: actionTypes.CHANGE_ROUTE,
                    payload: {
                      route: 'cash',
                    },
                  })
                }>
                <div>
                  <i className="material-icons white-text">monetization_on</i>
                </div>
                <div>CASH ACCOUNT</div>
              </Collapsible>
              <Collapsible
                onClick={() =>
                  dispatch({
                    type: actionTypes.CHANGE_ROUTE,
                    payload: {
                      route: 'bank',
                    },
                  })
                }>
                <div>
                  <i className="material-icons white-text">account_balance</i>
                </div>
                <div>BANK ACCOUNT</div>
              </Collapsible>
              <Collapsible
                onClick={() =>
                  dispatch({
                    type: actionTypes.CHANGE_ROUTE,
                    payload: {
                      route: 'capital',
                    },
                  })
                }>
                <div>
                  <i className="material-icons white-text">functions</i>
                </div>
                <div>CAPPITAL ACCOUNT</div>
              </Collapsible>
              <Collapsible
                onClick={() =>
                  dispatch({
                    type: actionTypes.CHANGE_ROUTE,
                    payload: {
                      route: 'fixedAssets',
                    },
                  })
                }>
                <div>
                  <i className="material-icons white-text">business</i>
                </div>
                <div>FiXED ASSETS ACCOUNT</div>
              </Collapsible>
            </div>
          </li>
          <li>
            <div className="collapsible-header transparent">
              <i className="material-icons">business_center</i>
              REPORTS
            </div>
            <div className="collapsible-body collapsible_overide">
              <Collapsible
                onClick={() =>
                  dispatch({
                    type: actionTypes.CHANGE_ROUTE,
                    payload: {
                      route: 'cashBook',
                    },
                  })
                }>
                <div>
                  <i className="material-icons white-text">import_contacts</i>
                </div>
                <div>Cash book</div>
              </Collapsible>
              <Collapsible
                onClick={() =>
                  dispatch({
                    type: actionTypes.CHANGE_ROUTE,
                    payload: {
                      route: 'trialBalance',
                    },
                  })
                }>
                <div>
                  <i className="material-icons white-text">line_style</i>
                </div>
                <div>Trial balance</div>
              </Collapsible>
              <Collapsible
                onClick={() =>
                  dispatch({
                    type: actionTypes.CHANGE_ROUTE,
                    payload: {
                      route: 'ledger',
                    },
                  })
                }>
                <div>
                  <i className="material-icons white-text">assignment</i>
                </div>
                <div>Ledger book</div>
              </Collapsible>
              <Collapsible
                onClick={() =>
                  dispatch({
                    type: actionTypes.CHANGE_ROUTE,
                    payload: {
                      route: 'journal',
                    },
                  })
                }>
                <div>
                  <i className="material-icons white-text">receipt</i>
                </div>
                <div>General Journal</div>
              </Collapsible>
              <Collapsible
                onClick={() =>
                  dispatch({
                    type: actionTypes.CHANGE_ROUTE,
                    payload: {
                      route: 'incomeStatement',
                    },
                  })
                }>
                <div>
                  <i className="material-icons white-text">pie_chart</i>
                </div>
                <div>Income statement</div>
              </Collapsible>
              <Collapsible
                onClick={() =>
                  dispatch({
                    type: actionTypes.CHANGE_ROUTE,
                    payload: {
                      route: 'balanceSheet',
                    },
                  })
                }>
                <div>
                  <i className="material-icons white-text">dvr</i>
                </div>
                <div>Balance sheet</div>
              </Collapsible>
            </div>
          </li>
        </ul>
      </section>
      <SetupModal />
    </>
  );
};

export default Side;
