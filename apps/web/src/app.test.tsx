import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders Vite and React logos', () => {
    render(<App />);

    // Check if the logos are rendered
    const viteLogo = screen.getByAltText(/Vite logo/i);
    const reactLogo = screen.getByAltText(/React logo/i);

    expect(viteLogo).toBeDefined();
    expect(reactLogo).toBeDefined();
  });
});
