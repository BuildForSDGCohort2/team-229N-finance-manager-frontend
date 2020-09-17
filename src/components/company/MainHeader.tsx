import React, { FC } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import logo from '../../asset/logo.png';
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
const Logo = styled.div`
  width: 50px;
  height: 50px;
  background-color: orange;
  border-radius: 50%;
  font-size: 23px;
  font-weight: bold;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
`;
interface Props {
  name: string;
}

const MainHeader: FC<Props> = ({ name }) => {
  return (
    <>
      <Container>
        <Logo>{name.substr(0, 2)}</Logo>
        <H1 className="textShadow">{name}</H1>
      </Container>
      <br /> <br />
      <br />
    </>
  );
};

export default MainHeader;
