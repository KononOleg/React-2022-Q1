import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Card } from './card';
import { cards } from './cards';

describe('Card', () => {
  it('should render card', () => {
    const card = cards[0];
    const result = render(<Card {...card} />);
    expect(result).not.toBeNull();
  });
  it('should render card with creators', () => {
    const card = {
      ...cards[0],
      creators: 'creators',
    };
    const { container } = render(<Card {...card} />);
    const talents = container.getElementsByClassName('card-talent__wrapper');
    expect(talents.length).toBe(2);
  });
});
