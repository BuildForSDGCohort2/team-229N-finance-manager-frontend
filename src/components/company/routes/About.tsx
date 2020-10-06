import React, { useLayoutEffect, FC } from 'react';
import { Collapsible } from '../comps';
import M from 'materialize-css';
import { motion } from 'framer-motion';
import { routeVariants } from '../../utils/variables';
import { CompanyProps } from '../interface';
// import { persistStore, persistReducer } from 'redux-persist';
// import ReactPlaceholder from "react-placeholder";
// import ReactHtmlParser from "react-html-parser";
// import { Helmet } from "react-helmet";
const About: FC<{ props: CompanyProps }> = ({ props }) => {
  const { bank, desc, email, fb, location, name, tel, twt, yt } = props;
  useLayoutEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <motion.div
      initial="exit"
      animate="enter"
      exit="exit"
      variants={routeVariants}>
      <ul className="collapsible popout" data-collapsible="accordion">
        <li>
          <div className="collapsible-header black-text">
            <i className="fas fa-address-card"></i>
            {name.toUpperCase()} BASIC INFORMATION
          </div>
          <div className="collapsible-body black-text collapsible_overide">
            <Collapsible>
              <div>
                <i className="material-icons">info</i>
              </div>
              <div>{desc}</div>
            </Collapsible>
            {bank ? (
              <Collapsible>
                <div>
                  <i className="material-icons">account_balance</i>
                </div>
                <div>{bank}</div>
              </Collapsible>
            ) : null}
          </div>
        </li>
        <li>
          <div className="collapsible-header black-text">
            <i className="material-icons prefix">contact_mail</i>
            CONTACT INFORMATION
          </div>
          <div className="collapsible-body black-text collapsible_overide">
            {tel ? (
              <Collapsible>
                <div>
                  <i className="material-icons">phone</i>
                </div>
                <div>{tel}</div>
              </Collapsible>
            ) : null}

            <Collapsible>
              <div>
                <i className="material-icons">drafts</i>
              </div>
              <div>{email}</div>
            </Collapsible>
            {location ? (
              <Collapsible>
                <div>
                  <i className="material-icons">location_on</i>
                </div>
                <div>{location}</div>
              </Collapsible>
            ) : null}
          </div>
        </li>
        <li>
          <div className="collapsible-header black-text">
            <i className="material-icons">forum</i>SOCIAL MEDIA CONTACTS
          </div>
          <div className="collapsible-body black-text collapsible_overide">
            {!twt && !fb && yt && <p>Nothing Provided</p>}
            {fb ? (
              <Collapsible>
                <div>
                  <i className="fab fa-facebook"></i>
                </div>
                <div>{fb}</div>
              </Collapsible>
            ) : null}
            {twt ? (
              <Collapsible>
                <div>
                  <i className="fab fa-twitter"></i>
                </div>
                <div>{twt}</div>
              </Collapsible>
            ) : null}
            {yt ? (
              <Collapsible>
                <div>
                  <i className="fab fa-youtube"></i>
                </div>
                <div>{yt}</div>
              </Collapsible>
            ) : null}
          </div>
        </li>
      </ul>
    </motion.div>
  );
};

export default About;
