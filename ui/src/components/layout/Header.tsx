import React, { useState, useEffect, useRef } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import "./Header.css";
import Socials from "./Socials";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Career", href: "/career" },
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

const Header: React.FC<HeaderProps> = ({ themeMode, setThemeMode }) => {
  const location = useSafeLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Function to check if a link is active
  const isActiveLink = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };
  // Close drawer when clicking outside
  useEffect(() => {
    if (!drawerOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
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
      <nav className="header-nav" aria-label="Main navigation" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', alignItems: 'center', minHeight: '4.5rem' }}>
        {/* Left cell: Logo and site title */}
        <div className="header-cell-left" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Avatar
            src="/images/ZL monogram.png"
            alt="ZennLogic monogram logo"
            sx={{
              width: 48,
              height: 48,
              border: '2px solid',
              borderColor: theme => theme.palette.primary.main,
              boxShadow: theme => theme.shadows[4],
              bgcolor: 'background.paper',
              marginRight: '0.25rem',
            }}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1, ml: 1 }}>
            <Typography
              variant="h3"
              component="span"
              sx={{
                fontWeight: 500,
                letterSpacing: '0.04em',
                color: 'primary.dark',
                fontFamily: 'Inter, Montserrat, Roboto, Arial, sans-serif',
                lineHeight: 1.1,
                fontSize: { xs: '1.3rem', md: '2rem' },
                textShadow: '0 2px 12px rgba(65,42,145,0.08)',
              }}
            >
              ZennLogic
            </Typography>
            <Typography
              variant="subtitle1"
              component="span"
              sx={{
                color: 'secondary.dark',
                fontWeight: 500,
                fontFamily: 'Inter, Montserrat, Roboto, Arial, sans-serif',
                letterSpacing: '0.08em',
                mt: 0.2,
                fontSize: { xs: '0.85rem', md: '1rem' },
              }}
            >
              Software Development
            </Typography>
          </Box>
        </div>
        {/* Center cell: Nav links (desktop only) */}
        <div className="header-cell-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {!isMobile && (
            <ul className="header-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    aria-label={link.name}
                    className={isActiveLink(link.href) ? 'active' : ''}
                    style={{
                      position: 'relative',
                      ...(isActiveLink(link.href) && {
                        color: '#8CD2EF',
                        fontWeight: '600',
                        textShadow: '0 0 8px rgba(140, 210, 239, 0.8)'
                      })
                    }}
                  >
                    {link.name}
                    {isActiveLink(link.href) && (
                      <span 
                        style={{
                          position: 'absolute',
                          bottom: '-10px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '100%',
                          height: '4px',
                          background: 'linear-gradient(90deg, #8CD2EF, #5DADE2, #3498DB)',
                          borderRadius: '2px',
                          boxShadow: '0 2px 8px rgba(140, 210, 239, 0.6)',
                          animation: 'glow 2s ease-in-out infinite alternate'
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
        <div className="header-cell-right" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem' }}>
          <button
            className="theme-toggle-btn"
            aria-label={themeMode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            style={{ background: 'none', border: 'none', cursor: 'pointer', marginRight: '0.5rem', display: 'flex', alignItems: 'center' }}
            onClick={() => setThemeMode(themeMode === "dark" ? "light" : "dark")}
          >
            {themeMode === "dark" ? (
              <span style={{ filter: 'drop-shadow(0 0 4px #FFC62F)' }}>
                <FaSun size={22} title="Switch to light mode" color="#FFC62F" />
              </span>
            ) : (
              <span style={{ filter: 'drop-shadow(0 0 4px #8CD2EF)' }}>
                <FaMoon size={22} title="Switch to dark mode" color="#412A91" />
              </span>
            )}
          </button>
          {!isMobile && <Socials />}
          {isMobile && (
            <>
              <button
                className="menu-btn"
                aria-label={drawerOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-controls="mobile-nav"
                aria-expanded={drawerOpen}
                onClick={handleDrawerToggle}
              >
                <span aria-hidden="true">&#9776;</span>
              </button>
              <div
                id="mobile-nav"
                className={`mobile-drawer${drawerOpen ? " open" : ""}`}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation menu"
                ref={drawerRef}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                  <img src="/images/ZL monogram.png" alt="ZennLogic monogram logo" style={{ height: '2.75rem', width: '2.75rem' }} />
                  <span className="site-title">ZennLogic Development</span>
                </div>
                <ul>
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        aria-label={link.name} 
                        onClick={() => setDrawerOpen(false)}
                        className={isActiveLink(link.href) ? 'active' : ''}
                        style={{
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          transition: 'all 0.3s ease',
                          ...(isActiveLink(link.href) && {
                            background: 'linear-gradient(135deg, rgba(140, 210, 239, 0.15), rgba(140, 210, 239, 0.05))',
                            color: '#8CD2EF',
                            fontWeight: '600',
                            borderLeft: '4px solid #8CD2EF',
                            textShadow: '0 0 8px rgba(140, 210, 239, 0.6)'
                          })
                        }}
                      >
                        {isActiveLink(link.href) && (
                          <span 
                            style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              background: 'linear-gradient(135deg, #8CD2EF, #5DADE2)',
                              marginRight: '12px',
                              boxShadow: '0 0 8px rgba(140, 210, 239, 0.7)'
                            }}
                          />
                        )}
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
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
