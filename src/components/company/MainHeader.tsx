import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../../asset/logo.png';
const Container = styled(motion.div)`
  width: 100%;
  height: 70px;
  display: flex;
  padding: 9px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(45, 34, 84, 0.5);
  /* border-bottom: 2px solid #fff; */
  /* background-image: url('../../asset/bg.jpg'); */
  /* background-size: contain; */
`;
const H1 = styled.h1`
  font-family: 'BlackOpsOne-Regular';
  font-size: 30px;
  text-transform: uppercase;
  flex-grow: 1;
  cursor: pointer;
  text-align: left;
  color: #fff;
  margin-left: 1.5rem;
  align-self: center;
`;
const MainHeader = () => {
  return (
    <>
      <Container>
        <img src={logo} width="50" height="50" alt="Logo" />
        <H1 className="textShadow">Finance manager</H1>
      </Container>
      <br /> <br />
      <br />
    </>
  );
};

export default MainHeader;
