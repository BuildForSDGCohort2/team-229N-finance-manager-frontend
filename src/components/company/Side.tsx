import React from 'react';
import { Collapsible } from './comps';
import { useThunkDispatch } from '../../redux/store';
import { actionTypes } from '../../redux/actions';

const Side = () => {
  const dispatch = useThunkDispatch();

  return (
    <section className="col s12 m3 side side_margin">
      <ul className="collection with-header ">
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
            <div>Home</div>
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
            <div>About</div>
          </Collapsible>
        </li>
        <li className="collection-item transparent collection_item_overide">
          <Collapsible>
            <div>
              <i className="material-icons white-text">border_color</i>
            </div>
            <div>Create Transaction</div>
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
              <div>Cash Account</div>
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
              <div>Bank Account</div>
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
              <div>Capital Account</div>
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
              <div>Fixed assets Account</div>
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
  );
};

export default Side;
