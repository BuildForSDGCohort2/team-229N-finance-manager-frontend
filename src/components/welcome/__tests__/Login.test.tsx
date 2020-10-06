import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import App from '../../../App';

afterEach(cleanup);

describe('finance manager test', () => {
  test('it renders splash screen', async () => {
    const { getByText } = await render(<App />);
    const linkElement = getByText(/loading/);
    expect(linkElement).toBeInTheDocument();
  });
  test('it renders home screen', async () => {
    const { queryByTestId } = await render(<App />);
    const goTologin = (await queryByTestId('gotoLogin')) as Element;
    expect(goTologin).toBeInTheDocument();
    fireEvent.click(goTologin);
    // debug();
  });
});

describe('Login', () => {
  test('Login page visible', async () => {
    const { queryByTestId } = await render(<App />);
    const loginPage = await queryByTestId('login-page');
    expect(loginPage).toBeInTheDocument();
    // debug();
  });
  test('Login validation', async () => {
    const { queryByTestId, getByText } = await render(<App />);
    const loginButton = (await queryByTestId('login-button')) as Element;
    fireEvent.click(loginButton);
    const validationMsg = getByText(/All fields are required/);
    expect(validationMsg).toBeInTheDocument();
    // debug();
  });
  test('should match snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
