import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './header';

describe('Header', () => {
  it('should render header', () => {
    const result = render(<Header />, { wrapper: BrowserRouter });
    expect(result).not.toBeNull();
  });
});
