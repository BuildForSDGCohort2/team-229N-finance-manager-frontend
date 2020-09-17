import React, { CSSProperties } from 'react';
import styled from 'styled-components';

const View = styled.div`
  width: 150px;
  height: 150px;
  background: transparent;
  border: 3px solid #3c3c3c;
  border-radius: 50%;
  text-align: center;
  line-height: 150px;
  color: #fff000;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 4px;
  font-family: sans-serif;
  text-shadow: 0 0 10px #ffff00;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  position: relative;
  @media only screen and (max-width: 640px) {
    width: 120px;
    height: 120px;
    line-height: 120px;
    font-size: 14px;
    font-weight: bold;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-top: 3px solid #fff000;
    border-right: 3px solid #fff000;
    border-radius: 50%;
    animation: animateCircle 2s linear infinite;
    @keyframes animateCircle {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
  span {
    display: block;
    position: absolute;
    top: calc(50% - 2px);
    left: 50%;
    width: 50%;
    height: 4px;
    background: transparent;
    transform-origin: left;
    animation: animate 2s linear infinite;
    @keyframes animate {
      0% {
        transform: rotate(45deg);
      }
      100% {
        transform: rotate(406deg);
      }
    }
    &:before {
      position: absolute;
      content: '';
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #fff000;
      box-shadow: 0 0 20px #fff000;
      top: -6px;
      right: -8px;
    }
  }
`;
const styles: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  background: 'linear-gradient( #0654b9, #003171)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};
const Loading = () => {
  return (
    <div style={styles}>
      <View>
        loading
        <span />
      </View>
    </div>
  );
};

export default Loading;
