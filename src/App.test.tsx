import React from 'react';
import { cleanup, render } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';
afterEach(cleanup);
test('test splash screen', async () => {
  const { getByText, debug } = await render(<App />);
  const linkElement = getByText(/loading/);
  expect(linkElement).toBeInTheDocument();
  // debug();
});

test('It renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// import React from 'react'
// import { rest } from 'msw'
// import { setupServer } from 'msw/node'
// import { render, fireEvent, waitFor, screen } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect'
// import Fetch from '../fetch'

// const server = setupServer(
//   rest.get('/greeting', (req, res, ctx) => {
//     return res(ctx.json({ greeting: 'hello there' }))
//   })
// )

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

// test('loads and displays greeting', async () => {
//   render(<Fetch url="/greeting" />)

//   fireEvent.click(screen.getByText('Load Greeting'))

//   await waitFor(() => screen.getByRole('heading'))

//   expect(screen.getByRole('heading')).toHaveTextContent('hello there')
//   expect(screen.getByRole('button')).toHaveAttribute('disabled')
// })

// test('handles server error', async () => {
//   server.use(
//     rest.get('/greeting', (req, res, ctx) => {
//       return res(ctx.status(500))
//     })
//   )

//   render(<Fetch url="/greeting" />)

//   fireEvent.click(screen.getByText('Load Greeting'))

//   await waitFor(() => screen.getByRole('alert'))

//   expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
//   expect(screen.getByRole('button')).not.toHaveAttribute('disabled')
// })
