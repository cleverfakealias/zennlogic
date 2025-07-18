import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { createMnTheme } from '../../theme';
import CareerTimeline from '../pages/CareerTimeline';

// Mock theme for tests
const theme = createMnTheme('light');

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('CareerTimeline', () => {
  test('renders career timeline title', () => {
    renderWithTheme(<CareerTimeline />);
    expect(screen.getByText('Career Timeline')).toBeInTheDocument();
  });

  test('renders career timeline subtitle', () => {
    renderWithTheme(<CareerTimeline />);
    expect(screen.getByText('My professional journey in technology and software development')).toBeInTheDocument();
  });

  test('renders all career positions', () => {
    renderWithTheme(<CareerTimeline />);
    
    // Check for job titles
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Support Supervisor')).toBeInTheDocument();
    expect(screen.getByText('Technical Support Representative')).toBeInTheDocument();
  });

  test('renders company names', () => {
    renderWithTheme(<CareerTimeline />);
    
    expect(screen.getByText('SPS Commerce')).toBeInTheDocument();
    expect(screen.getByText('WhereToLive.com')).toBeInTheDocument();
    expect(screen.getByText('Microboards Technology')).toBeInTheDocument();
  });

  test('renders time periods', () => {
    renderWithTheme(<CareerTimeline />);
    
    expect(screen.getByText('2017 - Present')).toBeInTheDocument();
    expect(screen.getByText('2012 - 2017')).toBeInTheDocument();
    expect(screen.getByText('2007 - 2012')).toBeInTheDocument();
  });

  test('timeline items are sorted by most recent first', () => {
    renderWithTheme(<CareerTimeline />);
    
    const jobTitles = screen.getAllByRole('heading', { level: 3 });
    expect(jobTitles[0]).toHaveTextContent('Software Engineer');
    expect(jobTitles[1]).toHaveTextContent('Support Supervisor');
    expect(jobTitles[2]).toHaveTextContent('Technical Support Representative');
  });

  test('renders job descriptions', () => {
    renderWithTheme(<CareerTimeline />);
    
    expect(screen.getByText(/Seasoned Software Developer working on enterprise SaaS applications/)).toBeInTheDocument();
    expect(screen.getByText(/Managed technical support team for web development/)).toBeInTheDocument();
    expect(screen.getByText(/Provided comprehensive technical support for CD and DVD replication/)).toBeInTheDocument();
  });

  test('has proper accessibility attributes', () => {
    renderWithTheme(<CareerTimeline />);
    
    const mainHeading = screen.getByRole('heading', { level: 1 });
    expect(mainHeading).toHaveTextContent('Career Timeline');
  });
});
