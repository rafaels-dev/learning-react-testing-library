import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import App from './App';

test('renders loading', () => {
  const { getByTestId } = render(<App />);
  const loadingElement = getByTestId('loader');
  expect(loadingElement).toBeInTheDocument();
  expect(loadingElement).toMatchSnapshot();
})

test('renders learn react link', async () => {
  const { getByText } = render(<App />);
  const linkElement = await waitForElement(
    () => getByText(/learn react/i)
  );
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toMatchSnapshot();
});
