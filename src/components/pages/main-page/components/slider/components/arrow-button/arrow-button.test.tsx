import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ArrowButton } from './arrow-button';

describe('Arrow button', () => {
  it('should render arrow button', () => {
    const mockOnSubmit = jest.fn();
    const result = render(<ArrowButton onClick={mockOnSubmit} />);
    expect(result).not.toBeNull();
  });

  it('should render left arrow button', () => {
    const mockOnSubmit = jest.fn();
    const result = render(<ArrowButton onClick={mockOnSubmit} isLeft={true} />);
    const img = result.getByRole('img');
    expect(img).toHaveClass('slider__arrow_left');
  });
});
