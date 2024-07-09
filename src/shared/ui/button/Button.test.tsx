import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from './Button';

const mockOnClick = jest.fn();

describe('Button component', () => {
  it('Shoud render with the correct label and have been called', () => {
    const { getByRole } = render(<Button label="1" onClick={mockOnClick} />);
    const button = getByRole('button');
    expect(button).toHaveTextContent('1');

    button.click();
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
