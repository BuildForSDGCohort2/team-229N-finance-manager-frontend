import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Link as Scroll, animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';
import { Redirect } from 'react-router-dom';
import logo from '../../asset/logo.png';
// import logo from '../../asset/fm.png';
const Container = styled(motion.div)`
  width: 100%;
  height: 70px;
  display: flex;
  padding: 9px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(45, 34, 84, 0.4);
  /* overflow-x: hidden;
  background-attachment: fixed;
  background-image: url('../asset/bg2.jpg');
  background-repeat: no-repeat; */
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
  @media only screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
const H1 = styled.h1`
  font-family: 'BlackOpsOne-Regular';
  font-size: 30px;
  text-transform: uppercase;
  flex-grow: 1;
  cursor: pointer;
  text-align: left;
  align-self: center;
  margin-left: 1.5rem;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
const Links = styled.ul`
  display: flex;
  align-self: center;
  margin-right: 20px;
  li {
    a {
      cursor: pointer;
      color: #fff;
      &:hover {
        /* color: orange; */
        text-decoration: underline;
      }
    }
    font-size: 22px;
    margin: 0 20px;
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`;
const Header: FC<{ isHome: boolean }> = ({ isHome }) => {
  const [redirect, setRedirect] = useState(false);
  const scrollToTop = () => {
    if (isHome) {
      scroll.scrollToTop();
    } else setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/" exact />;
  }
  return (
    <>
      <Container initial={{ x: '-100%' }} animate={{ x: 0 }}>
        <Img src={logo} alt="logo" />
        <H1 className="textShadow" onClick={scrollToTop}>
          Finance manager
        </H1>
        {isHome && (
          <Links>
            <li>
              <Scroll
                activeClass="activeScroll"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={900}>
                Home
              </Scroll>
              {/* <Link to='/'>Home</Link> */}
            </li>
            <li>
              <Scroll
                activeClass="activeScroll"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={900}>
                Reports
              </Scroll>
              {/* <Link to='/'>Reports</Link> */}
            </li>
            <li>
              <Scroll
                activeClass="activeScroll"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={900}>
                Get started
              </Scroll>
              {/* <Link to='/'>Get started</Link> */}
            </li>
          </Links>
        )}
      </Container>
      <br /> <br />
      <br />
    </>
  );
};

export default Header;
