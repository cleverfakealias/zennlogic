import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import { createMnTheme } from "../../theme";
import Footer from "../layout/Footer";

const theme = createMnTheme("light");

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

// Mock props for Footer component
const mockProps = {
  themeMode: "light" as const,
  setThemeMode: jest.fn(),
};

describe("Footer", () => {
  test("renders footer content", () => {
    renderWithTheme(<Footer {...mockProps} />);

    // Check if footer is in the document
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });

  test("has correct styling classes", () => {
    renderWithTheme(<Footer {...mockProps} />);

    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveClass("footer");
  });

  test("renders mission statement", () => {
    renderWithTheme(<Footer {...mockProps} />);

    expect(screen.getByText("Architect. Build. Elevate.")).toBeInTheDocument();
  });

  test("renders copyright information", () => {
    renderWithTheme(<Footer {...mockProps} />);

    const currentYear = new Date().getFullYear();
    // Check for the desktop version (longer text)
    expect(
      screen.getByText(
        new RegExp(`${currentYear}.*Ben Hickman.*All rights reserved`),
      ),
    ).toBeInTheDocument();
  });
});
