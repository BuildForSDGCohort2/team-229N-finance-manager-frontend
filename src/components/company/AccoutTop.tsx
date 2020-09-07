import React, { FC } from 'react';
import styled from 'styled-components';
import logo from '../../asset/logo.png';
import dayjs from 'dayjs';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: teal;
  text-align: center;
  h6 {
    text-transform: capitalize;
    font-size: 1.7rem;
  }
  p {
    font-weight: bold;
    font-size: 1.2;
  }
`;
interface Props {
  name: string;
}
const AccoutTop: FC<Props> = ({ name }) => {
  return (
    <Container>
      <img src={logo} width="80" height="80" alt="Logo" />
      <h5>NETBRIC INC</h5>
      <p>Kampala Uganda, herbert@gmail.com</p>
      <h6>{name}</h6>
      <p>As of {dayjs().format('DD/MM/YYYY')}</p>
    </Container>
  );
};

export default AccoutTop;
