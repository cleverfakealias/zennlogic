import React, { useState } from "react";
import {
  Avatar,
  useTheme,
  Menu,
  MenuItem,
  IconButton,
  Tooltip,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Footer.css";
import Socials from "./Socials";

// Quick Links Dropdown Component and navLinks must be outside Footer
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Career", href: "/career" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

const FooterQuickLinks: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Tooltip title="Quick Links">
        <IconButton
          aria-label="quick links"
          aria-controls={open ? "footer-quick-links-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          size="small"
          sx={{ color: "text.secondary" }}
        >
          <MoreVertIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id="footer-quick-links-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "footer-quick-links-button" }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        {navLinks.map((link) => (
          <MenuItem
            key={link.name}
            component="a"
            href={link.href}
            onClick={handleClose}
            sx={{ fontSize: "0.95rem", minWidth: 120 }}
          >
            {link.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

const Footer: React.FC = () => {
  const theme = useTheme();
  return (
    <footer
      className="footer"
      role="contentinfo"
      aria-label="Site footer"
      style={{ padding: "0 24px" }}
    >
      <div
        className="footer-content"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          alignItems: "center",
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          boxSizing: "border-box",
          padding: "0",
        }}
      >
        {/* Left cell: Mission statement */}
        <div
          className="footer-cell-left"
          style={{
            textAlign: "left",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            height: "100%",
          }}
        >
          <Avatar
            src="/images/ZL monogram.png"
            alt="ZennLogic monogram logo"
            sx={{
              width: 32,
              height: 32,
              border: "2px solid",
              borderColor: theme.palette.primary.main,
              boxShadow: theme.shadows[4],
              bgcolor: "background.paper",
            }}
          />
          <span aria-label="Mission statement">Architect. Build. Elevate.</span>
        </div>
        {/* Center cell: Copyright and tech stack */}
        <div className="footer-cell-center" style={{ textAlign: "center" }}>
          <p style={{ margin: 0 }}>
            &copy; {new Date().getFullYear()} Ben Hickman. All rights reserved.
          </p>
          <p style={{ margin: 0 }}>
            Built with love{" "}
            <span role="img" aria-label="love">
              ❤️
            </span>{" "}
            by Ben Hickman using React, Vite, and Sanity.
          </p>
        </div>
        {/* Right cell: Quick links dropdown and social links */}
        <div
          className="footer-cell-right"
          style={{
            textAlign: "right",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "0.5rem",
          }}
        >
          {/* Quick Links Dropdown */}
          <FooterQuickLinks />
          <Socials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
