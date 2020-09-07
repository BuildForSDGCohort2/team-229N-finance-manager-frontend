import styled from 'styled-components';
export const RightComp = styled.div`
  padding: 2rem;
  margin-top: 6rem;
`;
export const Collapsible = styled.div`
  padding: 0.8rem;
  margin: 0;
  display: flex;
  cursor: pointer;
  transition: all 0.5s linear;
  /* &:hover {
    background-color: #fff;
    color: #000 !important;
  } */
  /* div:first-child {
    i {
      &:hover {
        color: #000 !important;
      }
    }
  } */
  div:last-child {
    margin-left: 7px;
    font-size: 1.1rem;
    align-self: center;
  }
`;

export const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  color: #000;
  padding: 0;
  margin: 0;
  div {
    font-weight: bold;
  }
`;
