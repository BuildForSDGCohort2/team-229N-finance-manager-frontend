import React, { useLayoutEffect } from 'react';
import { Collapsible } from '../comps';
import M from 'materialize-css';
import { motion } from 'framer-motion';
import { routeVariants } from '../../utils/variables';
// import { persistStore, persistReducer } from 'redux-persist';
// import ReactPlaceholder from "react-placeholder";
// import ReactHtmlParser from "react-html-parser";
// import { Helmet } from "react-helmet";
const About = () => {
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
            NETBRITZ INC BASIC INFORMATION
          </div>
          <div className="collapsible-body black-text collapsible_overide">
            <Collapsible>
              <div>
                <i className="material-icons">info</i>
              </div>
              <div>
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </div>
            </Collapsible>
            <Collapsible>
              <div>
                <i className="material-icons">account_balance</i>
              </div>
              <div>234588999000</div>
            </Collapsible>
          </div>
        </li>
        <li>
          <div className="collapsible-header black-text">
            <i className="material-icons prefix">contact_mail</i>
            CONTACT INFORMATION
          </div>
          <div className="collapsible-body black-text collapsible_overide">
            <Collapsible>
              <div>
                <i className="material-icons">phone</i>
              </div>
              <div>234588999000</div>
            </Collapsible>
            <Collapsible>
              <div>
                <i className="material-icons">drafts</i>
              </div>
              <div>herbert@gmail.com</div>
            </Collapsible>
            <Collapsible>
              <div>
                <i className="material-icons">location_on</i>
              </div>
              <div>Kampala Uganda</div>
            </Collapsible>
          </div>
        </li>
        <li>
          <div className="collapsible-header black-text">
            <i className="material-icons">forum</i>SOCIAL MEDIA CONTACTS
          </div>
          <div className="collapsible-body black-text collapsible_overide">
            <Collapsible>
              <div>
                <i className="fab fa-facebook"></i>
              </div>
              <div>Netbritz</div>
            </Collapsible>
            <Collapsible>
              <div>
                <i className="fab fa-twitter"></i>
              </div>
              <div>Netbritz</div>
            </Collapsible>
            <Collapsible>
              <div>
                <i className="fab fa-youtube"></i>
              </div>
              <div>Netbritz</div>
            </Collapsible>
          </div>
        </li>
      </ul>
    </motion.div>
  );
};

export default About;
