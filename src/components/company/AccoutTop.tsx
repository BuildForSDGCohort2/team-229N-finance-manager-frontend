import React, { FC } from 'react';
import styled from 'styled-components';

import dayjs from 'dayjs';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: teal;
  text-align: center;
  h5 {
    text-transform: uppercase;
  }
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
  account: string;
  email: string;
  location: string;
}
const AccoutTop: FC<Props> = ({ name, account, email, location }) => {
  return (
    <Container>
      <h5>{name}</h5>
      <p>
        {location}, {email}
      </p>
      <h6>{account}</h6>
      <p>As of {dayjs().format('DD/MM/YYYY')}</p>
    </Container>
  );
};

export default AccoutTop;
