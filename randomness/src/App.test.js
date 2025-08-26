import {act, render, screen} from '@testing-library/react';
import App from './App';

test('renders minumum input', () => {
  render(<App />);
  const minimumInputElement = screen.getByLabelText("Minimum");
  expect(minimumInputElement).toBeInTheDocument();
});

test('renders maximum input', () => {
  render(<App />);
  const maximumInputElement = screen.getByLabelText("Maximum");
  expect(maximumInputElement).toBeInTheDocument();
});

test('renders random number button', () => {
  render(<App />);
  const randomNumberButton = screen.getByText("Get Random Number");
  expect(randomNumberButton).toBeInTheDocument();
});

test('should display error if minimum is null', () => {
  render(<App />);
  const minimumInputElement = screen.getByTestId("minimum-input-test");
  minimumInputElement.value = null;
  const randomNumberButton = screen.getByText("Get Random Number");
  act(() => {
    randomNumberButton.click();
  })
  const errorElement = screen.getByText("Please enter both a maximum and a minimum");
  expect(errorElement).toBeInTheDocument();
})

test('should display error if maximum is null', () => {
  render(<App />);
  const maximumInputElement = screen.getByTestId("maximum-input-test");
  maximumInputElement.value = null;
  const randomNumberButton = screen.getByText("Get Random Number");
  act(() => {
    randomNumberButton.click();
  })
  const errorElement = screen.getByText("Please enter both a maximum and a minimum");
  expect(errorElement).toBeInTheDocument();
})

test('should display error if maximum is less than minimum', () => {
  render(<App />);
  const maximumInputElement = screen.getByTestId("maximum-input-test");
  const minimumInputElement = screen.getByTestId("minimum-input-test");
  maximumInputElement.value = 2;
  minimumInputElement.value = 10;
  const randomNumberButton = screen.getByText("Get Random Number");
  console.log("minimum value:", minimumInputElement.value);
  console.log("maximum value:", maximumInputElement.value);
  act(() => {
    randomNumberButton.click();
  })
  const errorElement = screen.getByText("Maximum must be greater than or equal to minimum");
  expect(errorElement).toBeInTheDocument();
})
