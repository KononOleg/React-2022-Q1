import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MainPage } from './main-page';

describe('Main Page', () => {
  it('should render Main Page', () => {
    const result = render(<MainPage />);
    expect(result).not.toBeNull();
  });
});
