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
        </ul>
        <ul className="collapsible" data-collapsible="accordion">
          <li>
            <div className="collapsible-header transparent">
              <i className="material-icons">create</i>
              TRANSACTIONS
            </div>

            <div className="collapsible-body collapsible_overide">
              <Collapsible
                onClick={() =>
                  dispatch({
                    type: actionTypes.CHANGE_ROUTE,
                    payload: {
                      route: 'asset',
                    },
                  })
                }>
                <div>
                  <i className="material-icons white-text">queue_play_next</i>
                </div>
                <div>Fixed Asset management</div>
              </Collapsible>
              {/* </div> */}
              {/* payment */}
              {/* <div className="collapsible-body collapsible_overide"> */}
              <Collapsible
                onClick={() =>
                  dispatch({
                    type: actionTypes.CHANGE_ROUTE,
                    payload: {
                      route: 'manageStock',
                    },
                  })
                }>
                <div>
                  <i className="material-icons white-text">assignment</i>
                </div>
                <div>Stock management</div>
              </Collapsible>
              <Collapsible
                onClick={() =>
                  dispatch({
                    type: actionTypes.CHANGE_ROUTE,
                    payload: {
                      route: 'pay',
                    },
                  })
                }>
                <div>
                  <i className="material-icons white-text">redeem</i>
                </div>
                <div>Pay expenses</div>
              </Collapsible>
            </div>
          </li>

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
                <div>Cash account</div>
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
                <div>Bank account</div>
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
                <div>Capital account</div>
              </Collapsible>
              <Collapsible
                onClick={() =>
                  dispatch({
                    type: actionTypes.CHANGE_ROUTE,
                    payload: {
                      route: 'sales',
                    },
                  })
                }>
                <div>
                  <i className="material-icons white-text">pie_chart</i>
                </div>
                <div>Sales account</div>
              </Collapsible>
              <Collapsible
                onClick={() =>
                  dispatch({
                    type: actionTypes.CHANGE_ROUTE,
                    payload: {
                      route: 'stock',
                    },
                  })
                }>
                <div>
                  <i className="material-icons white-text">local_mall</i>
                </div>
                <div>Stock</div>
              </Collapsible>
              <Collapsible
                onClick={() =>
                  dispatch({
                    type: actionTypes.CHANGE_ROUTE,
                    payload: {
                      route: 'expenses',
                    },
                  })
                }>
                <div>
                  <i className="material-icons white-text">redeem</i>
                </div>
                <div>Expenses</div>
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
