import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Slider } from './slider';

describe('Slider', () => {
  it('should render slider', () => {
    const result = render(<Slider />);
    expect(result).not.toBeNull();
  });
});
