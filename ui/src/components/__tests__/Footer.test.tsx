import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../layout/Footer';

describe('Footer', () => {
  test('renders footer content', () => {
    render(<Footer />);
    
    // Check if footer is in the document
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  test('has correct styling classes', () => {
    render(<Footer />);
    
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('footer');
  });
});
