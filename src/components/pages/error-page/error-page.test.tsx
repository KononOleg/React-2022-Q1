import '@testing-library/jest-dom';
import { ErrorPage } from './error-page';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Error page', () => {
  it('should render Error page', () => {
    const result = render(<ErrorPage />, { wrapper: BrowserRouter });
    expect(result).not.toBeNull();
  });
});
