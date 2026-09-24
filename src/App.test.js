import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio greeting and main sections', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Aravind D/i);
  expect(nameElements.length).toBeGreaterThan(0);
});
