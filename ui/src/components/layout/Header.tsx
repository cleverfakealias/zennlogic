import React, { useState, useEffect, useRef } from "react";
import { Avatar, Box, Typography, IconButton, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router-dom";
import "./Header.css";
import Socials from "./Socials";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

interface HeaderProps {
  themeMode: string;
  setThemeMode: (mode: string) => void;
}

// Custom hook to safely use location
const useSafeLocation = () => {
  try {
    return useLocation();
  } catch (error) {
    // Return a default location if not inside Router context
    return { pathname: window.location.pathname };
  }
};

const Header: React.FC<HeaderProps> = () => {
  const theme = useTheme();
  const location = useSafeLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Function to check if a link is active
  const isActiveLink = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };
  // Close drawer when clicking outside
  useEffect(() => {
    if (!drawerOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setDrawerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [drawerOpen]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <header className="header" role="banner" aria-label="Site header">
      <nav
        className="header-nav"
        aria-label="Main navigation"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr 1fr",
          alignItems: "center",
          minHeight: "4.5rem",
        }}
      >
        {/* Left cell: Logo and site title */}
        <div
          className="header-cell-left"
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <Avatar
            src="/images/ZL monogram.png"
            alt="ZennLogic monogram logo"
            sx={{
              width: 64,
              height: 64,
              border: "3px solid #8CD2EF",
              boxShadow: "0 4px 24px 0 rgba(140,210,239,0.15)",
              bgcolor: "#fff",
              marginRight: "0.5rem",
              transition: theme.custom.transitions.standard,
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 1,
              ml: 1,
            }}
          >
            <Typography
              variant="h2"
              component="span"
              sx={{
                fontWeight: 900,
                letterSpacing: "0.04em",
                color: "#fff",
                fontFamily: theme.typography.fontFamily,
                lineHeight: 1.05,
                fontSize: { xs: "1.4rem", md: "2rem" },
                textShadow: "0 2px 8px rgba(255,255,255,0.18)",
                mb: 0.2,
                transition: theme.custom.transitions.standard,
              }}
            >
              ZennLogic
            </Typography>
            <Typography
              variant="subtitle1"
              component="span"
              sx={{
                color: "#4DD0E1",
                fontWeight: 700,
                fontFamily: theme.typography.fontFamily,
                letterSpacing: "0.08em",
                mt: 0.5,
                fontSize: { xs: "0.9rem", md: "1rem" },
                textShadow: "0 2px 8px rgba(77,208,225,0.18)",
                transition: theme.custom.transitions.standard,
              }}
            >
              Software Development
            </Typography>
          </Box>
        </div>
        {/* Center cell: Nav links (desktop only) */}
        <div
          className="header-cell-center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {!isMobile && (
            <ul className="header-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    aria-label={link.name}
                    className={isActiveLink(link.href) ? "active" : ""}
                    style={{
                      position: "relative",
                      ...(isActiveLink(link.href) && {
                        color: "#8CD2EF",
                        fontWeight: "600",
                        textShadow: "0 0 8px rgba(140, 210, 239, 0.8)",
                      }),
                    }}
                  >
                    {link.name}
                    {isActiveLink(link.href) && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: "-10px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "100%",
                          height: "4px",
                          background:
                            "linear-gradient(90deg, #8CD2EF, #5DADE2, #3498DB)",
                          borderRadius: "2px",
                          boxShadow: "0 2px 8px rgba(140, 210, 239, 0.6)",
                          animation: "glow 2s ease-in-out infinite alternate",
                        }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Right cell: Socials (desktop) and menu button/mobile drawer (mobile) */}
        <div
          className="header-cell-right"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {!isMobile && <Socials />}
          {isMobile && (
            <>
              <IconButton
                className="menu-btn"
                aria-label={
                  drawerOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-controls="mobile-nav"
                aria-expanded={drawerOpen}
                onClick={handleDrawerToggle}
                size="large"
                sx={{ color: "#8CD2EF" }}
              >
                <MenuIcon fontSize="inherit" />
              </IconButton>
              <div
                id="mobile-nav"
                className={`mobile-drawer${drawerOpen ? " open" : ""}`}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation menu"
                ref={drawerRef}
              >
                {/* Close button */}
                <IconButton
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close navigation menu"
                  sx={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    color: "#8CD2EF",
                    zIndex: 1,
                    background: "rgba(255,255,255,0.1)",
                    "&:hover": {
                      background: "rgba(255,255,255,0.2)",
                    },
                  }}
                >
                  <CloseIcon />
                </IconButton>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                    marginTop: "1rem",
                  }}
                >
                  <Avatar
                    src="/images/ZL monogram.png"
                    alt="ZennLogic monogram logo"
                    sx={{
                      width: 44,
                      height: 44,
                      border: "3px solid #8CD2EF",
                      boxShadow: "0 4px 24px 0 rgba(140,210,239,0.15)",
                      bgcolor: "#fff",
                    }}
                  />
                  <span className="site-title">ZennLogic</span>
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: "1px",
                    background:
                      "linear-gradient(90deg, transparent, rgba(140,210,239,0.3), transparent)",
                    marginBottom: "1.5rem",
                  }}
                />
                <ul>
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        aria-label={link.name}
                        onClick={() => setDrawerOpen(false)}
                        className={isActiveLink(link.href) ? "active" : ""}
                        style={{
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          padding: "12px 16px",
                          borderRadius: "8px",
                          transition: "all 0.3s ease",
                          ...(isActiveLink(link.href) && {
                            background:
                              "linear-gradient(135deg, rgba(140, 210, 239, 0.15), rgba(140, 210, 239, 0.05))",
                            color: "#8CD2EF",
                            fontWeight: "600",
                            borderLeft: "4px solid #8CD2EF",
                            textShadow: "0 0 8px rgba(140, 210, 239, 0.6)",
                          }),
                        }}
                      >
                        {isActiveLink(link.href) && (
                          <span
                            style={{
                              width: "8px",
                              height: "8px",
                              borderRadius: "50%",
                              background:
                                "linear-gradient(135deg, #8CD2EF, #5DADE2)",
                              marginRight: "12px",
                              boxShadow: "0 0 8px rgba(140, 210, 239, 0.7)",
                            }}
                          />
                        )}
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <div
                  style={{
                    marginTop: "2rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Socials />
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
