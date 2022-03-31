import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { SearchBar } from './search-bar';

describe('SearchBar', () => {
  it('should render SearchBar', () => {
    const value = 'test';
    const result = render(<SearchBar />);
    expect(result).not.toBeNull();

    const search = result.getByAltText('search');
    fireEvent.click(search);

    const input = result.getByRole('textbox') as HTMLInputElement;
    fireEvent.input(input, { target: { value } });
    expect(input.value).toBe(value);

    const cancel = result.getByAltText('cancel');
    fireEvent.click(cancel);
    expect(input.value).toBe('');
  });
});
