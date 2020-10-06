import React, { FC, useLayoutEffect } from 'react';
import fl from '../../asset/finance.svg';
import add from '../../asset/add_document.svg';
import decision from '../../asset/business_plan.svg';
import report from '../../asset/report.svg';
import world from '../../asset/world.svg';
import data from '../../asset/secure_data.svg';
import Header from './Header';
import Footer from './Footer';
import { Link, Redirect } from 'react-router-dom';
import { motion } from 'framer-motion';
import { routeVariants } from '../utils/variables';
import { useTypedSelector } from '../../redux/stateTypes';

const Home: FC = () => {
  useLayoutEffect(() => {
    document.body.classList.add('auth_bg');
    return () => {
      // Called just before the component unmount
      document.body.classList.remove('auth_bg');
    };
  }, []);
  const { loggedIn } = useTypedSelector((state) => state.auth);
  if (loggedIn) {
    return <Redirect to="/companies" />;
  } else
    return (
      <motion.div initial="initial" animate="enter" exit="exit">
        <Header isHome={true} />
        <motion.section
          variants={routeVariants}
          className="row fullPage"
          id="section1">
          <div className="col s12 m7">
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, easings: 'linear' }}
              src={fl}
              width="100%"
              alt=""
            />
          </div>
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, easings: 'linear' }}
            className="col s12 m5 center">
            <br />
            <br />
            <h1 className="home_title textShadow">Finance manager</h1>
            <h1 className="textShadow">Online financial accounting software</h1>
            <p className="p">
              Finance manager is the online financial accounting software for
              small and medium enterprises. This softwares aims to bridge
              knowledge gap of young africans with no accounting background.
            </p>
            <Link className="button orange" data-testid="gotoLogin" to="/login">
              Get started
            </Link>
          </motion.div>
        </motion.section>
        <motion.section
          variants={routeVariants}
          className="row fullPage"
          id="section2">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, easings: 'linear' }}
            className="col s12 m5 center">
            <h1>Financial reports</h1>
            <p className="p">
              This software aims to minimise the complexity of book keeping by
              providing automated generation of financial statements like
              business journals, ledgers, Trial balance, statement of financial
              position (income statement), Income statement, cashbooks, balance
              sheet,and payroll reports basing on data of the company provided
              through our easy to use user interface.
            </p>
            <Link className="button orange" to="/login">
              Get started
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, easings: 'linear' }}
            className="col s12 m7">
            <img src={report} width="100%" alt="" />
          </motion.div>
        </motion.section>
        <motion.section
          variants={routeVariants}
          className="row fullPage center last_section"
          id="section3">
          <motion.div whileHover={{ scale: 1.03 }} className="col m3 s12">
            <p>
              <a className="btn-floating blue btn-large">
                <i className="material-icons ">location_on</i>
              </a>
            </p>
            <h2>Accessible anywhere</h2>
            <img src={world} width="100%" alt="world" />
            <p className="p">
              Create and access company or business data any time any where on
              any device desktop, laptop, tablet, and mobile.
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="col m3 s12">
            <p>
              <a className="btn-floating orange btn-large">
                <i className="material-icons">border_color</i>
              </a>
            </p>
            <h2>Create company</h2>
            <img src={add} width="100%" alt="Create company" />
            <p className="p">
              Signup, create your company, enter business detail, enter business
              transactions, manage and organize your business transactions and
              employees data.
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="col m3 s12">
            <p>
              <a className="btn-floating red btn-large">
                <i className="material-icons ">assignment</i>
              </a>
            </p>
            <h2>Generate reports</h2>
            <img src={data} width="100%" alt="Reports" />
            <p className="p">
              Generate credible automated financial reports, like business
              jounals, ledgers, cashbook, trial balance, income statement, and
              balance sheet that depend business transactions entered.
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="col m3 s12">
            <p>
              <a className="btn-floating teal btn-large">
                <i className="material-icons">beenhere</i>
              </a>
            </p>
            <h2>Make prudent desicions</h2>
            <img src={decision} width="100%" alt="Business decision" />
            <p className="p">
              Basing on generated financial reports generated that follow
              accounting principles, Prudent decisions like investment decision
              can be made by managers.
            </p>
          </motion.div>
        </motion.section>
        {/* <div className="clearfix"></div> */}
        <Footer />
      </motion.div>
    );
};

export default Home;
