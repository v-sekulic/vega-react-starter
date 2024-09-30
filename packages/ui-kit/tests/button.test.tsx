import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../src/ui/button';
test('renders Button component', () => {
  render(<Button onClick={() => {}}>Click me</Button>);
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeTruthy();
});

test('calls onClick handler', () => {
  const onClickMock = jest.fn();
  render(
    <Button
      onClick={() => {
        onClickMock();
      }}
    >
      Click Me
    </Button>
  );
  const buttonElement = screen.getByText(/Click Me/i);
  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
