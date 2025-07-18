import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../layout/Header";

// Mock props
const mockProps = {
  themeMode: "light",
  setThemeMode: jest.fn(),
};

describe("Header", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders navigation links", () => {
    render(<Header {...mockProps} />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Career")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  test("renders theme toggle button", () => {
    render(<Header {...mockProps} />);

    const themeButton = screen.getByRole("button");
    expect(themeButton).toBeInTheDocument();
  });

  test("calls setThemeMode when theme button is clicked", () => {
    render(<Header {...mockProps} />);

    const themeButton = screen.getByRole("button");
    fireEvent.click(themeButton);

    expect(mockProps.setThemeMode).toHaveBeenCalledWith("dark");
  });

  test("shows correct icon for light theme", () => {
    render(<Header {...mockProps} />);

    // Should show moon icon when in light mode (to switch to dark)
    const moonIcon = document.querySelector("svg");
    expect(moonIcon).toBeInTheDocument();
  });

  test("shows correct icon for dark theme", () => {
    const darkProps = { ...mockProps, themeMode: "dark" };
    render(<Header {...darkProps} />);

    // Should show sun icon when in dark mode (to switch to light)
    const sunIcon = document.querySelector("svg");
    expect(sunIcon).toBeInTheDocument();
  });

  test("navigation links have correct href attributes", () => {
    render(<Header {...mockProps} />);

    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText("Blog").closest("a")).toHaveAttribute(
      "href",
      "/blog",
    );
    expect(screen.getByText("Career").closest("a")).toHaveAttribute(
      "href",
      "/career",
    );
    expect(screen.getByText("About").closest("a")).toHaveAttribute(
      "href",
      "/about",
    );
    expect(screen.getByText("Contact").closest("a")).toHaveAttribute(
      "href",
      "/contact",
    );
  });
});
